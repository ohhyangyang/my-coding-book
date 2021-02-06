const React = require("react");
const Layout = require("./Layout");


function Signup(props) {  
  return (
      <Layout>
      <form action="/auth/signup" method="POST">
      <label>Username:</label>
      <input type="text" name="username" />
      <br />
      <label>Password:</label>
      <input type="text" name="password" />
      
      <br />
      <button className="edit-button" type="submit">CREATE ACCOUNT</button>
    {
        props.errorMessage
          ?<div>{props.errorMessage}</div>
          :null
    }
    
    </form>
      </Layout>
    
  );
}
module.exports = Signup;