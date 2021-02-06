const express = require("express");
const authRouter = express.Router();

const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const saltRounds = 10; //⚠️⚠️ for hashing
const zxcvbn = require("zxcvbn");
const isLoggedIn = require("../utils/isLoggedIn");

///////////////////////////////////////////////////////////
/*
Signup：bcrypt zxcvbn
*/
//GET  /auth/signup
authRouter.get("/signup", (req, res, next) => {
  res.render("Signup");
});

//POST /auth/signup
authRouter.post("/signup", (req, res, next) => {
  //1 - get the values coming from the form
  // req.body.username req.body.password
  const { username, password } = req.body;

  //2 check if input values are empty and display error

  if (username === "" || password === "") {
    const props = { errorMessage: "Enter username and password" };
    res.render("Signup", props);
    return; //⚠️⚠️ 停止ejection
  }

  //https://www.npmjs.com/package/zxcvbn
  if (zxcvbn(password).score < 1) {
    const suggestion = zxcvbn(password).feedback.suggestions;
    const props = { errorMessage: suggestion[0] };

    res.render("Signup", props);
    return; //⚠️⚠️ 停止ejection
  }

  //3 check user collection to see if user name is taken
  User.findOne({ username })
    .then((user) => {
      //if taken, display error
      if (user) {
        const props = { errorMessage: "The username already exists" };
        res.render("Signup", props);
        return; //⚠️⚠️ 停止ejection
      }
      //if available, encryted password and create a new user in DB
      const salt = bcrypt.genSaltSync(saltRounds);
      /*
         random data for inserting into password
         saltRounds代表hash难度级别
         */
      const hashedPassword = bcrypt.hashSync(password, salt); //加密密码

      User.create({ username: username, password: hashedPassword })
        .then((createdUser) => {
          res.redirect("/");
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

//////////////////////////////////////////////////////////////////
/*
Login: express-session connect-mongo
需要设置中间件
*/

//GET /auth/login
//--渲染login
authRouter.get("/login", (req, res, next) => {
  res.render("Login");
});

//POST /auth/login
//--获取表格数据
authRouter.post("/login", (req, res, next) => {
  const { username, password } = req.body;

  if (username === "" || password === "") {
    const props = { errorMessage: "Indicate username and password" };
    res.render("Login", props);
    return; //stop codes run
  }

  User
  .findOne({ username })
  .then((user) => {
    if (!user) {
      //if user name not found in users collection, send an error
      const props = { errorMessage: "The username doesn't exist" };
      res.render("Login", props);
      return; //stop codes run
    }
    //bcrypt验证密码是否正确,并返回boolean
    const passwordCorrect = bcrypt.compareSync(password,user.password);
    if(passwordCorrect){
        //Create session, triggers the creation of the cookie
        req.session.currentUser=user;
        /*
        ⚠️⚠️⚠️
        服务器的SESSION中间件和req.session.currentUser=user;会触发一下两件事发生：
        1 在mongodb创建session collection
        2 用户成功登陆后，用户会在数据库的session collection创建文档，文档中包含有ID，expires时间等等信息
          建档后，服务器会将用户的session ID通过response的header发给用户浏览器的cookie storage保存，以供用户自动登录
        */

        res.redirect('/');

    }else{
        const props = { errorMessage: "Incorrect password" };
        res.render("Login", props);
        return; //stop codes run
    }


  });
});


/////////////////////////////////////////////////////////////
authRouter.get('/logout',isLoggedIn, (req,res,next)=>{
    req.session.destroy((err)=>{
        if(err){
            res.render('Error')
        }
        else{
            res.redirect('/auth/login')
        }
    })
})
//
module.exports = authRouter;
