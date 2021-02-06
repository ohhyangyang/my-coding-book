/*

- 常用router组件

  <BrowserRouter>
  <Switch>
  <Route path="/xx" component={Xxx} exact/>

  <Link to="/xx"/>
  <NavLink to="/xx" activeClassName="selected-link" />

  <Redirect to="">  <Redirect to="/error" />

  <Route exact path="/:countryCode" render={(reactRouterProps) => {
                return (
                  <CountryDetails
                    countries={this.state.countries}
                    {...reactRouterProps}
  />

  withRouter(Page)

  this.props.history.push('/projects')   //react-router-dom method
  this.props.history.goBack    //react-router-dom method

- 创建 React router

  
  npm install reat-router reat-router-dom

  App.js
  1 import {BrowserRouter,Route,Switch} from 'react-router-dom'
    import      import所有pages文件夹中的页面
  2 创建<BrowserRouter>
     <BrowserRouter> 是React路由根组件
     <BrowserRouter>用于控制哪个组件将在浏览器中为特定的URL进行渲染。
  
  3<BrowserRouter>
     <Navbar/>
     
     <Switch>     //<Switch>防止不同页面因为path的问题同时显示
       <Route path="/" component={Dashboard} exact />  
            //⚠️⚠️必须加exact，否则 'localhost:3000/123'也可以matchDashboard
       <Route path="/about" component={About} exact/> 
       <Route path="/contact" component={Contact} exact/> 
       <Route path="/contact/:id" component={ContactDetails} exact/> 

       <Route component={Error} /> 
     </Switch>
    
     <Footer/>
  </BrowserRouter>

  Navbar.js
  1 import {link,NavLink} from 'react-router-dom'
    ⚠️⚠️⚠️ 在react中不使用<a>，会reload页面
  
  2 <nav>
      <ul>
        
        <link to="/">Dashboard</link>
              ⚠️⚠️<link>会去<BrowserRouter>寻找
        <link to="/contact">Contact</link>
        <link to="/about">About</link>


        <NavLink activeClassName="selected-link" to="/">Dashboard</NavLink>
              ⚠️⚠️<NavLink>拥有active样式，link被选中时会显示activeClassName的样式
        <NavLink activeClassName="selected-link" to="/contact">Contact</NavLink>
        <NavLink activeClassName="selected-link" to="/about">About</NavLink>
      
      </ul>
    </nav>
  
  DashboardRedirect.js
  1 import {Redirect} from 'react-router'
  2 state={
      isLoggedIn:true
    }

    render(){
        if(!this.state.isLoggedIn){
            return<Redirect to="/error"/>
        }
        else if(this.state.isLoggedIn){
           return(访问页面...)
        }
    }
  
  Contacts.js
  1 import {link} from 'react-router-dom'
    
  2 <div key={contact.id}>
       <Link to=`/contacts/${contact.id}`>
          <h4>name</4>
       </Link>

    </div>

  ContactDetail.js
  1 import contacts from 'xxx'

  2 function ContactDetail(props){
        获取id：props.match.params.Id
        const foundContact = contacts.find((contact)=>{
            return contact.id === id
        })
    }


*/