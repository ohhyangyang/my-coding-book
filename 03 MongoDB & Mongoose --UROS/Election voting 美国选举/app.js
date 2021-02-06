const express = require("express");
const mongoose = require("mongoose");
const Candidate = require("./models/Candidates");
const app = express();
const DB_NAME = "elections-2020";

mongoose
  //连接mongodb
  .connect(`mongodb://localhost:27017/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  //给client1创建document
  .then((connectionObject) => {
    console.log("Connected to the database");
  });

//ROUTES  ⚠️⚠️⚠️登陆网站之后即可立即投票！！
app.get("/trump", (req, res, next) => {
  Candidate.findOneAndUpdate({ name: "Trump" }, { $inc: { votes: 1 } })
    .then((result) => {
      res.send("<h1>thanks for voting trump!</h1>");
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/biden", (req, res, next) => {
  Candidate.findOneAndUpdate({ name: "Biden" }, { $inc: { votes: 1 } })
    .then((result) => {
      res.send("<h1>thanks for voting biden!</h1>");
    })
    .catch((error) => {
      console.log(error);
    });
});

//SET LISTENER
app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
