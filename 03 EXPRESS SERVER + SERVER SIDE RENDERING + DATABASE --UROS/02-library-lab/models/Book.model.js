const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//⚠️⚠️⚠️ const Author = require("./Author.model")  为了populate()，不知道是不是真的必须的

//创建 book schema
const bookSchema = new Schema(
  {
    title: String,
    description: String,
    rating: Number,
    authors: [
        { type: Schema.Types.ObjectId, ref: "Author" }
      ], //⚠️⚠️指定为了 Author collection使用
  },
  {
    //⚠️⚠️⚠️ timestamps选项告诉mongoose将createdAt和updateAt字段分配给当前模式。
    //https://mongoosejs.com/docs/guide.html#timestamps
    /*
        insertOne: {
         document: {
         name: 'Jean-Luc Picard',
         ship: 'USS Stargazer'
           // Mongoose will add `created_at` and `updatedAt`
         }
        },
        updateOne: {
         filter: { name: 'Jean-Luc Picard' },
         update: {
           $set: {
             ship: 'USS Enterprise'
             // Mongoose will add `updatedAt`
           }
         }
         }
        */
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Book = mongoose.model("Book",bookSchema)
module.exports= Book
