
const React = require('react');

function Signup(){
    return(
        <form action="/signup-form-data" method="POST">
        {/* ⚠️⚠️⚠️ 一定记得使用POST！！ 这样不会在url中显示客户敏感数据，
                而是会通过HTTP body传递: req.body */}
            <label htmlFor="">Email</label>
            <br/>
            <input type="email" name="emailAddress"/>
            <br/>
            <label htmlFor="">Password</label>
            <br/>
            <input type="password" name="passwordStr"/>
            
            <br/>
            <button type="submit">Signup</button>
        </form>
        /*
        ⚠️⚠️
        表单中的数据将会传递到 /search-form-data页面的 query string: 
               http://localhost:3000/search-form-data?searchString=xxx
        需要app.js通过app.get('/search-form-data',(req,res,next)=>{})来截获数据
        */
    )
}
module.exports =Signup