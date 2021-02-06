/*
- claudinary
1 singup
2 npm install
3 copy username key secret to .env
4 创建 root/config/cloudinary.js
5 Update signup view    
    添加encType给 <form>
    <input type="file" name=""...
6 引入middleware给router
   xxxRouter.post('View', [isLoggedIn,] cloudinaryMiddleware, (req,res,next)=>{
    ...
    const imageUrl = req.file.secure_url  //获取图片在cloudinary的url
    ...
   })

*/