const React = require("react");
const Layout = require("./Layout")

function Home(props) {
  return (
   <Layout>
       <h1>Home Page</h1>
       <a href="/auth/signup">Sign up</a>
       <a href="/auth/login">Log in</a>
       <a href="/auth/logout">Log out</a>

   </Layout>
  );
}

module.exports = Home;
