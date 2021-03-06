const React = require("react");
const Layout =require('./Layout')


function Login(props) {
  return (
      <Layout>
      <form action="/auth/login" method="POST">
      <label>Username:</label>
      <input type="text" name="username" />
      <br />
      <label>Password:</label>
      <input type="text" name="password" />
      
      <br />
      <button className="edit-button" type="submit">LOG IN</button>
    {
        props.errorMessage
          ?<div>{props.errorMessage}</div>
          :null
    }
    
    </form>
    <p>
        Don't have an account?<a href="/auth/signup">Sign up</a>
    </p>
      </Layout>
    
  );
}
module.exports = Login;