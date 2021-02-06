const express = require("express");
const Book = require("../models/Book.model");
const booksRouter = express.Router();

//GET  /books
//--寻找所有book来渲染Book页面
booksRouter.get('/',(req,res,next)=>{
    // res.render("Book");

    Book.find()  //⚠️⚠️返回array
      .then((allBooksFromDB)=>{
          const props = {books:allBooksFromDB};
          res.render("Book",props);
      })
      .catch((err)=>console.log(err));
})

//GET /books/add
booksRouter.get('/add',(req,res,next)=>{
    res.render("AddBook");
})

//POST /books/add  
//--获取来自AddBook页面的Data，通过Data创建新book，并redirect到/books
booksRouter.post("/add", (req, res, next) => {
    // 通过req.body获取表格data
    const { title, author, description, rating } = req.body;
    /*
    ⚠️⚠️⚠️⚠️
    在创建新书之前，也需要建立新的 authors 文档，为了和 books 建立联系
    authors.create({})
    */
  
    // 创建新Book
    Book.create({ title, author, description, rating })
      .then((book) => {
        //重引导到 /books， 可以看到新书添加成功
        res.redirect("/books");
      })
      .catch((err) => console.log(err));
  });

//GET /books/edit   渲染 EditBook 页面
booksRouter.get("/edit", (req, res, next) => {
    // Get the bookid passed via the link.
    // Example:    <a href="/books/edit?bookid=123">
    const { bookid } = req.query;
  
    // 通过bookID寻找 book document
    Book.findOne({ _id: bookid })
    //也可以使用Book.findById(bookid) 

      //通过引入authorsID所在的文档中的文件到book
      .populate("authors")
      .then((oneBook) => {
        const props = { oneBook: oneBook };
        //渲染 EditBook
        res.render("EditBook", props);
      })
      .catch((err) => console.log(err));
  });

//POST /books/edit  
//-- 通过req.query和req.body获取来自EditBook页面的data
booksRouter.post("/edit", (req, res, next) => {
    const { bookid } = req.query;
    const { title, author, description, rating } = req.body;
    

    Book.findByIdAndUpdate(
      bookid,
      { title, author, description, rating },
      { new: true }
      //⚠️⚠️ {new : true} is used to get the updated document version returned after the update
    )
      .then((updatedBook) => {
        console.log("book document after the update", updatedBook);
        res.redirect("/books");
      })
      .catch((error) => console.error(error));
  });

//GET /books/details/:bookId
// -- 通过 bookID 获取book数据，渲染 BookDetails
booksRouter.get("/details/:bookId", (req, res, next) => { 
    const { bookId } = req.params;
  

    Book.findById(bookId)
      //⚠️⚠️⚠️ using findById instead of find because find returns an array.
      .populate("authors")  
      //⚠️⚠️⚠️⚠️ 通过关于authors在schema中 ref:Authors的设定, authorsId可以找到Authors集合中对应的文档
      .then((oneBook) => {
        const props = { oneBook: oneBook };

        console.log("oneBook",oneBook)//⚠️⚠️⚠️这里可以看清除 populate 后 authors 的结果
  
        res.render("BookDetails", props);
      })
      .catch((err) => console.log("Error retrieving book details: ", err));
  });

module.exports=booksRouter;