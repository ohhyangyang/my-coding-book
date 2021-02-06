const React = require("react");
function AddAuthor(props) {
  return (
    <form action={`/authors/add?bookid=${props.idOfTheBook}`} method="POST">
      <label>Firstname:</label>
      <input type="text" name="name" />
      <br />
      <label>Lastname:</label>
      <input type="text" name="lastName" />
      <br />
      <label>Nationality:</label>
      <input type="text" name="nationality" />
      <br />
      <label>Birthday:</label>
      <input type="number" name="birthday" />
      <br />
      <label>Img:</label>
      <input type="number" name="pictureUrl" />
      <br />
      <button className="edit-button" type="submit">ADD</button>
    </form>
  );
}
module.exports = AddAuthor;