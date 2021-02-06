const express = require("express");
const User = require("../models/User.model");
const siteRouter = express.Router();
const isLoggedIn = require("../utils/isLoggedIn");

// function isLogedIn(req, res, next) {
//   //if the request comes with an authenticated cookie(如果user有cookie)
//   //⚠️⚠️req.session.currentUser代表认证过的session对象
//   if (req.session.currentUser) {
//     console.log("GOOD TO DO");
//     next(); //if not match this one, call next middleware or routes
//   } else {
//     res.redirect("/auth/login");
//   }
// }

//GET /secret
siteRouter.get("/secret", isLoggedIn ,(req, res, next) => {
    //⚠️⚠️有cookie时，才执行以下callbak
    console.log(req.session.currentUser)
    const {_id}=req.session.currentUser
    User.findById(_id)
      .then((user)=>{
          const props = {user:user} 
          res.render('Secret',props)
      })


    
});

//只有login才看得见
siteRouter.get('/example',(req,res,next)=>{
    const userIsLoggedIn = Boolean(req.session.currentUser)
    console.log(userIsLoggedIn)
    const props = {userIsLoggedIn};
    res.render('Example',props)
})

module.exports = siteRouter;
