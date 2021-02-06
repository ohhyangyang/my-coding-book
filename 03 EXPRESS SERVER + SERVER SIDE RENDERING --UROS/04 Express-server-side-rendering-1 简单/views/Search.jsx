
const React = require('react');

function Search(){
    return(
        <form action="/search-form-data" method="GET">

            <input type="text" name="searchString" placeholder="Look for..."/>
            <br/>
            <button type="submit">Search</button>
        </form>
        /*
        ⚠️⚠️
        表单中的数据将会传递到 /search-form-data页面的 query string: 
               http://localhost:3000/search-form-data?searchString=xxx
        需要app.js通过app.get('/search-form-data',(req,res,next)=>{})来截获数据
        */
    )
}
module.exports =Search