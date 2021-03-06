/*
-NPM介绍 (Node Package Manager)
https://www.npmjs.com/
NPM用于管理和下载模块包的平台（管家）
NPM帮助Node完成了第三方模块的发布、安装和依赖等
借助NPM，Node与第三方模块之间形成了很好的一个生态系统

-NPM命令
npm -v     -->查看vpm版本（注意有空格）
npm version     -->查看所有模块的版本
npm     -->帮助和说明
npm search '包名'     -->搜索模块包
npm install '包名'     -->在当前目录安装模块包（注意需要先去到当前的目录）
   (install可简写成i）
npm remove '包名'     -->删除模块包
   (remove可简写为r)
npm install '包名' --save     -->安装模块包并添加到当前js文件的依赖中
                             （但其实我的实际情况是，使用 npm install '包名' 时，就已经默认在依赖中添加包了）
npm install     -->通过package.json文件来下载当前项目所有依赖的包
                  (⚠️在网上上传或查找一个node模块包时，一般都只会上传一个拥有依赖的package.json文件，而不是上传整个node_modules模块包文件
                   原因一是因为上传和下载速度会变慢，二是因为模块包每年都会更新版本，这样是为了上传下载到最新的模块包)
npm search '包名'-g     -->全局模式安装模块包
                       (该命令用的不多，项目中的包都不可以使用全局模式安装，给计算机使用的工具才需要全局安装）

-NPM创建一个项目的流程
1 创建一个项目的文件夹目录，并在目录中创建一个js文件并编写代码
2 创建这个项目的package.json文件
     ->在terminal中进入到目标目录中
     ->输入"npm init"  (npm init -y  defalt创建项目)
     ->输入模块包的名字，例如hello_npm，并回车（不可以含有大写字母）
     ->输入entry point
      （即入口文件，也就是模块包所使用到的js文件。
        entry point在这个文件中的字段名是main，可以随时改）
     ->输入其他相应内容并回车...
     (我的实际情况是，下载一个包时，文件自行创建了一个package-lock.json文件，但这个json文件并不可以使用"npm install"命令来下载包，
     因此仍是需要自己创建的）
3 在terminal输入"npm search 模块包" 来搜索需要的包
4 输入"npm install 模块包"，下载需要用的包到当前项目文件夹

-注意事项
⚠️如果项目的package.json中没有自动添加对应的包名到dependencies，那么在下载包时则需要使用"npm install '包名' --save"命令来下载
⚠️下载的模块包都会被保存到每个项目对应的node_modules文件夹中
⚠️通过npm下载的包，不属于用户自定义文件，直接通过包name即可require引入，而不用输入其相对路径
⚠️node在使用包name来引入模块时，它会首先在当前项目目录的node_modules中寻找该模块
  如果没有，则去上一级目录的node_modules中寻找
  如还没有，则再去上一级，直到找到为止，找不到则报错


-CNPM，中国的镜像NPM服务器
  因为npm服务器在美国，为了防止以后在中国被墙，发展出了中国的镜像服务器（淘宝npm镜像），了解即可

 */
var math=require("math");//因为是从npm下载的模块包，而非自定义，所以不用按照相对路径格式来写，可以直接引用
console.log(math.add(123,456));//579