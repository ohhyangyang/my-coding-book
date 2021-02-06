const React = require("react");  

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>{props.title}</title>

        <link rel="stylesheet" href="/styles/style.css" />
      </head>
      <body>
        
        {props.children}

        
      </body>
    </html>
  );
}

module.exports = Layout;
