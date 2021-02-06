/*
-Axios
https://github.com/axios/axios
  - 使用方法
    在server和npm中使用：npm install axios
    在browser中使用：<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

    axios.get('URL')   返回 Promise
    axios.post()
    axios.put()
    axios.patch()
    axios.delete()


    axios.get('ApiUrl')
    .then((response)=>{
        console.log(response);
        const countriesArr = response.data;   //body储存位置

        const props = {countriesArr:countriesArr}

        res.render("Countries",props)
    })
    .catch( (err) => console.log(err) )

-Fetch & Axios
  Fetch和DOM一样是浏览器的原生AJAX，兼容性更强
  我们在后端用Axios首先因为nodejs服务器环境中没有Fetch，
                其次Axios拥有很好的整理routes的能力
  在有原生Fetch的情况下，通常使用fetch，更稳定


- Postman -- test API
  1 进入Colletions，创建一个API colletion
  2 点击Add request，选择method，将想要测试的url粘贴到search bar中
  3 点击send，获取结果

  使用API数据

  put 全部更新 （更加常用）
  patch 部分更新

 练习：https://gist.github.com/ross-u/89eecb7dfbfd6e73bc0922b0270cdc55

*/