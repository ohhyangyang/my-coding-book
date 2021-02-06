const React = require("react");
const Layout = require("./Layout");

function Book(props) {
  return (
    <Layout>
      <h1>Books Pages</h1>

      {props.books.map((oneBook,i) => {
        return (
          <p className="book-title" key={i}>
            <a href={`/books/edit?bookid=${oneBook._id}`} className="edit-button">
              EDIT
            </a>

            <a href={`/books/details/${oneBook._id}`}> 
               {oneBook.title} 
            </a>
          </p>
        );
      })}
    </Layout>
  );
}

module.exports = Book;
