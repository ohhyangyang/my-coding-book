const React = require("react");
const Layout = require("./Layout");
const AddAuthor = require('./components/AddAuthor')

function EditBook(props) {
  return (
    <Layout>
    <h3>Edit a book:</h3>
      <form action={`/books/edit?bookid=${props.oneBook._id}`} method="POST">
      {/* ⚠️⚠️ 将当下bookID发送给routes，通过ID来添加data至数据库 */}
        <label>Title:</label>
        <input type="text" name="title" defaultValue={props.oneBook.title} />
        <br />

        <label>Author:</label>
        {console.log(props.oneBook.authors)}
        <input type="text" name="author" defaultValue={props.oneBook.authors[0].name+" " +props.oneBook.authors[0].lastName} />
        <br />

        <label>Description:</label>
        <input
          type="text"
          name="description"
          defaultValue={props.oneBook.description}
        />
        <br />

        <label>Rate:</label>
        <input type="number" name="rating" defaultValue={props.oneBook.rating} />
        <br />

        <button className="edit-button" type="submit">
          EDIT
        </button>
      </form>

      <h3>Add an author to the book:</h3>
      <AddAuthor idOfTheBook={props.oneBook._id}/>
    </Layout>
  );
}

module.exports = EditBook;