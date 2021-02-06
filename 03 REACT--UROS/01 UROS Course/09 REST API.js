/*
- REST API要点：

  URL命名：/api/projects/:id 不可以使用动词
  status code: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
  BoilerPlate https://github.com/ross-u/React-Code-Along---Project-Management-Server
 
- React frontend VS backend
  React App 
      1 使用 port3000
      2 使用 import xxx from 'xxx' (ES6)
            export default XXX
      3 const {xx} = this.props.match.params

      4 axios.get(`http://localhost:5000/api/projects/${id}/tasks/${taskId}`)
          .then((apiResponse=>{  //⚠️⚠️⚠️
              const theTask = apiResponse.data;
              this.setState(theTask)
          }))
          .then(err=>console.log(err))

  backend 
      1 使用 port 5000
      2 使用 const xxx = require('xxx)  (NodeJS)
            module.exports = AAA
      3 const {xx} = req.params

      4 Router.get("/projects/:projectId/tasks/:taskId",(req,res,next)=>{
        const {projectId,taskId} = req.params;
        console.log(projectId,taskId)
        Project.findById(projectId)
        .populate('tasks')
        .then((theProject) => {  //⚠️⚠️⚠️
            const tasks= theProject.tasks
            const theTask = tasks.find(task => task._id==taskId)
            res.status(200).json(theTask)
        }).catch((err) => {
            res.status(500).json(err)
        });
      })

  

- POSTMAN
   1 create collection
   2 3点--EDIT--variable
     {{BASE_URL}}:{{PORT}}/api/projects
   3 POST 需要输入body
     GET 不需要body

- CORS
  BROWSER中存在着CORS条约，当发送请求时，情景如下：
    3000 BROWSER: hey server，你接受什么样的请求？
    5000 SERVER：我接收3000端口的请求
    3000 BROWSER：开始发送请求

  PROXY: a way to cheat，Proxy代理没有CORS，所以不像browser 样受CORS约束限制

   1 npm install cors --save
   2 app.js: const cors = require('cors');
   3 添加 CORS middleware
      app.use(cors({
        credentials: true,
        origin: ['http://localhost:3000']    // <== this will be the URL of our React app (it will be running on port 3000)
      }));

- 创建backend项目
   https://github.com/ross-u/React-Code-Along---Project-Management-Server
    输入：npx express-generator --no-view

    project.router.js
         1 const express = require('express')
           const router = express.Router();
           const Project = require('./../models/project.model')
           const Task = require('./../models/task.model')

         2 router.post('/projects',(req,res,next)=>{
             const  {title,description} = req.body
             Project.create({title,description,task:[]})
              .then((createdProject)=>{
                  res.status(201).json(createdProject)  //201--created, default num:200
              })
              .catch((err)=>{
                  res.status(500).json(err) //500--internal server error
              })
         })

         3 router.get('projects',(req,res,next)=>{
             Project
               .find()
               .populate('tasks')
               .then((allTheProjects)=>{
                   res.status(200).json(allTheProjects)  //200--OK
               })
               .catch((err)=>{
                  res.status(500).json(err) //500--internal server error
              })
         })

         4 router.get('projects/:id',(req,res,next)=>{
             const { id } = req.params;
             Project
               .findById( id )
               .populate('tasks')
               .then((foundProject)=>{
                   res.status(200).json(allTheProjects)  //200--OK
               })
               .catch((err)=>{
                  res.status(500).json(err) //500--internal server error
              })
         })


         last module.exports=router


    app.js
        app.use('/',router)

- 创建frontend项目
  https://github.com/ross-u/m3-react-demo-ca-client
    npx create-react-app app名称
    npm i axios react-router-dom
    创建文件和文件夹和css
 -index.js
    import {BrowserRouter} from 'react-router-dom'
    <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter> 
    </React.StrictMode> 

-AddProject.js
   import axios from 'axios';

   axios.post('xxx',{title,description})
     .then(()=>{
         this.setState({title:"",description:""})
     })
     .catch((err)=>{console.log(err)})


- ProjectList.js
   impoert {Link} from 'react-router-dom'
   import axios from 'axios';
   import AddProject from 'xxx'






*/