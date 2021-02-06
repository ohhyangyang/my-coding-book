/*
- <AuthProvider> Holding Context API
  1 Used to store data about user and if he is authenticated
  2 Shares this data with the rest of the React app
  3 Handles authentication logic/flow

  <Provider value={xxx}> APP  </Provider>

  <Consumer>  需要value={xxx}的components </Consumer>

context/auth-context.js

    import React from 'react'
    import axios from 'axios'
    const {Consumer,Provider} = React.CreateContext();



    class AuthProvider extends React.Component {
        state = {
            isLoggedIn: false,
            isLoading: true,
            user:null
        }

        componentDidMount(){
            //⚠️⚠️在刚刚挂载了AuthProvider，运行App.js前的一瞬间，需要根server确认该用户是否有登陆的权限，来决定如何渲染App.js
            axios.get('http://localhost:5000/auth/me', {withCredentials: true})
                                 //⚠️⚠️ {withCredentials: true}，告诉浏览器发送请求时也发送 cookie session 给server
                                       同时也用于通过CORS中间件，在当前情况下，{withCredentials: true}在所有axios req中都必须使用
                                
               .then((response)=>{
                   const user = response.data;
                   this.setState({
                       isLoggedIn: true,  //可以直接登录
                       user:user,    //获取user信息
                       isLoading:false   //已经首次loading完毕
                   })
               })
               .catch((err)=>{
                   const user = response.data;
                   this.setState({
                       isLoggedIn: false,   //不可以直接登录
                       user:null,   //不提供user信息
                       isLoading:false
                   })
               })
        }
        
        //
        signup = (username, password) => {
            axios.post(
                'http://localhost:5000/auth/signup', 
                {username,password}, 
                {withCredentials: true} ？？？？
              )
              .then((response)=>{
                  const user = response.data;
                  this.setState({
                      isLoggedIn : true,
                      user:user
                  })
              })
              .catch((err)=>{
                  this.setState({
                      isLoggedIn : false,
                      user:null
                  })
              })
        }

        login = (username, password) => {
            axios.post(
                'http://localhost:5000/auth/login', 
                {username,password}, 
                {withCredentials: true}  ？？？？
              )
              .then((response)=>{
                  const user = response.data;
                  this.setState({
                      isLoggedIn : true,
                      user:user
                  })
              })
              .catch((err)=>{
                  this.setState({
                      isLoggedIn : false,
                      user:null
                  })
              })
        }

        logout = () => {
            axios.get('http://localhost:5000/auth/logout',{withCredentials:true})
              .then((response)=>{
                  this.setState({
                      isLoggedIn:false,
                      user:null
                  })
              })
              .catch((err) => console.log(err))
        }

        render(){
            const {isLoggedIn, isLoading, user} = this.state;
            const {signup, login, logout} = this;

            return(
                <Provider value={{isLoggedIn, isLoading, user, signup, login, logout}}>
                              //第一个括号是要引入js，第二个括号是包裹对象
                   {this.props.children}
                </Provider>
            )
        }
    }


    function withAuth (WrappedComponent){
        return function(props){
            
                <Consumer>
                  {function(value){
                      const {isLoggedIn, isLoading, user, signup, login, logout} = value;
                      return (<WrappedComponent 
                                      {...props}          //此处括号是为了引入js
                                      isLoggedIn={isLoggedIn} 
                                      isLoading={isLoading}
                                      user={user}
                                      signup={signup}
                                      login={login}
                                      logout={logout}        {...value}
                                      />)
                  }}
                </Consumer>
            
        }
    }

    export {AuthProvider,withAuth}

index.js
    import {AuthProvider} from 'xxx'

    ReactDOM.render(
        <Router>
           <AuthProvider>
              <App/>
           </AuthProvider>
        </Router>
    )

AnonRoute.js    不可以去private page
   import React form 'react'
   import {Route, Redirect} from 'react-router-dom
   import {withAuth} from '....'
   function AonoRoute(routeProps){
       
    //from AuthProvider (via withAuth)
       const {user,isLoggedIn, isLoadind} = routeProps; 

    //from the AnonRoute itself
       const ComponentToShow = routeProps.component;  
       const {exact,path} = routeProps
       
       //if AuthProvider is still making request to check the user
       if(isLoading) return 'Loading'

       return (
           <Route
               render={
                   exact={exact}
                   path={path}
                   function(props){
                       if(isLoggedIn) return <Redirect to="/private"/>
                       else if(!isLoggedIn) return <ComponentToShow {...props} />
                   }
               }/>
        
           )
   }

   export default withAuth(AnonRoute)

PrivateRoute.js        //forbids access to user who's not logged in 不可以去signup和login
   import React form 'react'
   import {Route, Redirect} from 'react-router-dom
   import {withAuth} from '....'

   function PrivateRoute(routeProps){
       
    //from AuthProvider (via withAuth)
       const {user,isLoggedIn, isLoadind} = routeProps; 

    //from the AnonRoute itself
       const ComponentToShow = routeProps.component;  
       const {exact,path} = routeProps
       
       //if AuthProvider is still making request to check the user
       if(isLoading) return 'Loading'

       return (
           <Route
               render={
                   exact={exact}
                   path={path}
                   function(props){
                       if(!isLoggedIn) return <Redirect to="/login"/>
                       else if(isLoggedIn) return <ComponentToShow {...props} />
                   }
               }/>
        
           )
   }

   export default withAuth(PrivateRoute)
*/