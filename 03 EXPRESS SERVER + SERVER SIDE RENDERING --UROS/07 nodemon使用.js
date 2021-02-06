/*
STEP1 Terminal中输入 npm install nodemon -g (只执行一次即可)
STEP2 Terminal中输入 npm install nodemon --save-dev
STEP3 Terminal中输入 nodemon -e '*' app.js
STEP3 或者可以在package.josn的scripts中添加"start:dev": "nodemon -e '*' app.js"
                 (-e：extension， *：js和jsx等所有file， app.js：服务器位置)
      然后在terminal 中输入npm run dev即可以运行nodemon
*/