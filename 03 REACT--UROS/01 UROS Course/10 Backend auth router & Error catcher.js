/*
- app.js
  Error handling middleware

1 //show 404 when there is no route   ⚠️⚠️⚠️必须写在middleware所有route的最后
  app.use((req,res,next)=>{
      res.status(404).json({code:'not found'})

      .send(JSON.stringtify( {code:'not found'} ))
  })

2 //catch 'next(err)' calls    ⚠️⚠️⚠️ 写在404 error route之后，使用next(err)即可以触发此中间件，会在catch()中被invoke

  app.use((err,req,res,next)=>{
         ...
  })

- .env
  PUBLIC_DOMAIN=http://localhost:3000   //允许CORS
  SECRET_SESSION=jflsfjalsjfd
  PORT=5000      //backend端口
  MONGODB_URI=mongodb://localhost......

- helpers/middleware.js
  const createError = require('http-errors')   //https://www.npmjs.com/package/http-errors

  exports.isLoggedIn = (req,res,next)=>{
        //⚠️确认user是否有cookie，是否有logged in
       
      if(req.sessions.currentUser) next();
      else next(createError(403))  //createError(403) ---> new Error({message:'',statusCode: 403})
  }

  exports.isNotLoggedIn = (req,res,next)=>{
        //⚠️确认user是否没有cookie，是否没有logged in
       
      if(!req.sessions.currentUser) next();
      else next(createError(403))  //createError(403) ---> new Error({message:'',statusCode: 403})
  }

  exports.validationLogin = (req,res,next)=>{
        //⚠️确认用户是否输入了username和password
       
      if(!username || !password) {
      else next(createError(400))  //createError(403) ---> new Error({message:'',statusCode: 403})
      }
      else next()
  }


- auth.router/js
 //注意⚠️⚠️⚠️⚠️ 在auth router的backend中，只会控制是否throw error，backend不会创建具体message，具体信息将交给reat frontend

 SIGNUP     //⚠️你没有cookie，才让你signup
 router.post('/signup', isNotLoggedIn, validationLogin, (req,res,next)=>{
     const {user,password} = req.body;

     User.findOne({username})
      .then((foundUser)=>{
          if(foundUser){
                   //⚠️ user already taken
              return next(createError(400))
          }
          else{
                 //⚠️user available
              const salt = bcrypt.gensaltSync(saltRounds);
              const encryptedPassword = bcrypt,hashSync(password,salt);

              User.create({username,password:excryptecPassword})
                .then((createdUser)=>{
                       //set the "req.seesion.currentUser" using newly created user object, to trigger creation of the session
                    createdUser.password = "*";
                    req.session.currentUser = createUser;  //⚠️⚠️将创建的新用户信息(除了password)发送给浏览器cookie，并且自动会login

                    res.status(201)//created
                      .json(createdUser)

                })
                .catch((err)=>{
                    next(createError(err))
                }
          }
      })
      .catch((err)=>{
           next(createError(err))
       }
 })


 LOGIN  //⚠️没有login cookie
  router.post('/login',isNotLoggedIn , validationLogin, (req,res,next)=>{
      cosnt {username,password} = req.body;

      User.findOne({username})
         then((user=>{
             if(!user){
                 //login的用户不存在
                 next(createError(404))  //not found
             }
             
             const passwordIsValid = bcrypt.compareSync(password, user.password);  //return true or false
             if(passwordIsValid){
                 //set the "req.session.currentUser", to trigger creation of the session
                 req.session.currentUser = user;   //发送新cookie给browser
                 res.status(200)
                   json(user);
             }
             else{
                 next(createError(401))  //Unauthorized
             }
         }))
         .catch((err)=>{
             next(createError(err));
         })

  })


  LOGOUT
    router.get('/logout',isLoogedIn, (req,res,next)=>{
      req.session.destroy(function(err)=>{    //⚠️⚠️⚠️删除database中的session，浏览器中的cookie仍存在，但已经失效
        if(err){
          return next(err);
        }

        res.status(204)   //NO content
          .send()
      })
    })

    GET '/auth/me'   //⚠️⚠️⚠️for React to confirm if the user is loggedin or not 
    router.get('/me', isLoggedIn, (req,res,next)=>{
      const currentUserSessionData = req.session.currentUser;

      res
        .status(200)
        .json(currentUserSessionData)
    })

- POSTMAN Cookies, 
   测试auth router的时候要删除POSTMAN中的cookie
*/