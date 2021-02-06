//1 引入mongoose
const mongoose = require("mongoose");
const data = require("./data"); //引入用户数据

//引入clientmodel
const Client = require("./moduels/ClientModel");

const DB_NAME = "iron-bank"; /*不该动的数据时常会大写*/

//2 create a databse
mongoose

  //1 连接mongodb
  .connect(`mongodb://localhost:27017/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })

  //2 给client1创建document
  .then((connectionObject) => {
    console.log("Connected to the database");

    //create documents with this client1 data to
    const client1 = {
      name: "Infamouse Bob",
      age: 60,
      accountActive: true,
      balance: 31218.56,
      payments: [],
    };
    //创建document
    const pr = Client.create(client1);
    return pr;
  })
  // //3 通过id寻找client
  // .then((createdClient)=>{
  //     console.log(createdClient)
  //     const pr = Client.findById('1234567');
  //     return pr
  // })
  //4 给整个data数组创建文档
  .then((foundClient) => {
    console.log(foundClient);
    const pr = Client.insertMany(data);
    return pr;
  })
  //5 查询整个client collection的文档
  .then((result) => {
    console.log(result);

    const pr = Client.find();

    return pr;
  })

  .then((result) => {
    //6求所有用户balance的总和
    let total = 0;
    result.forEach((clientObj) => {
      total += clientObj.balance;
    });

    console.log("total");

    //7 update一个文档  Model.findOneAndUpdate( queryObj , updateObj )
    const newPayments = [{ amount: 5000 }, { amount: 10000 }];
    const totalPayments = 5000 + 10000;

    const pr = Client.findOneAndUpdate(
      { $and: [{ name: "a" }, { balance: 31218.56 }] },
      { $set: { balance: totalPayments, payments: newPayments } }
    );

    return pr;
  })
   //8 删除文档
  .then(() => {
    console.log("Field balance was updated");

    const pr = Client.deleteOne({name:'b'})
    return pr
  })
  .then((result)=>{
    console.log(result.deletedCount)
    /*
    如果deletedCount为0，证明没有删除成功，
    如果deletedCount为1，证明删除成功
    */
})
  .catch((error) => {
    console.log(error);
  });

  

 
  
