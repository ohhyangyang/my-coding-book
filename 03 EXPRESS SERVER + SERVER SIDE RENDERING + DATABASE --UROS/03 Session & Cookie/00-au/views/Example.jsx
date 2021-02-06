const React = require("react");
const Layout = require("./Layout");


function Example(props) {
  return (
      <Layout>
      {
          props.userIsLoggedIn
            ?<p>Hello</p>
            :null
      }
      </Layout>
    
  );
}
module.exports = Example;