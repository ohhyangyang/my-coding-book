/*
COMMONJS的package规范将一组相关的模块组合到一起，形成一个完整的工具
包规范由包结构和包描述文件组成
   - 包结构 用于组织包中的各种文件
   - 包描述文件 描述包的相关信息，供外部读取分析

包实际上就是一个压缩文件，解压后应包含如下文件：
   - package.json  包描述文件（只有此文件是必需的）
      用于表达非代码相关的信息，位于包的根目录下，是包的最重要组成部分
      ⚠️json文件中不可以写注释
      重要字段：
          name 包的名字   -->使用方法：require（包的名字）
          description 描述包的作用
          version 版本
          keywords 关键字 -->用于搜索包
          maintainers 主要贡献者
          contributors 非主要作者
          bugs 提交bugs的地址
          licenses 协议权限
          repositories 仓库，包括Git和SVN地址
          dependencies 依赖于哪些工具或者包
          homepage 主页
          os 系统
          cpu
          engine 引擎
          builtin 构建工具
          directories
          implements
          scripts
          author
          bin
          main 主要文件
          devDependencies 开发过程中依赖的工具或包
   - bin 可执行的二进制文件
   - lib js代码
   - doc 文档
   - test 单元测试
 */