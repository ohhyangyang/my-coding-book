/*
- 数据库 Database DB
数据库是按照数据结构来组织、存储和管理数据的仓库

我们的程序都是在内存中运行的，一旦程序运行结束或者计算机断电，程序中运行的数据都会丢失。
所以我们就需要将一些程序运行的数据持久化到硬盘之中，以确保数据的安全性 。
而数据库就是数据持久化的最佳选择。

- 数据库分类
  关系型数据库 RDBMS (Relational Database Management System)
      例如 MySQL 、 Oracle 、 DB2 、 SQL Server
    （⚠️关系数据库中全都是表）

  非关系型数据库 No SQL (Not Only SQL)
      例如 MongoDB 、 Redis
      No SQL种类繁复
      而MongoDB属于No SQL的文档型数据库

  (SQL：结构化查询语言，所有的RDBMS都是通过SQL操作的，是一门标准化语言
  而No SQL最开始是一项反对SQL语言的运动，标准化的SQL就像XML一样，虽然简化了开发和成本，却限制了程序员们创新的机会)

- 数据库的构成
    数据库的服务器：用来保存数据  -->mongod
    数据库的客户端：用来操作服务器，对数据进行更删改查    -->mongo

- MongoDB简介
  MongoDB是为了快速开发Web应用而设计的数据库系统（反观RDBMS的建表过程是很慢的）
  MongoDB的设计目标是极简、灵活、想存啥存啥
  MongoDB的数据模型是面向文档的，所谓文档是一种类似于JSON的结构，
  简单理解：MongoDB中存的是各种各样的增强版的JSON(即BSON，二进制的JSON)

- MongoDB的下载安装
  1 下载： 官网下载官网上的最新版本（64位），偶数版本为稳定版，奇数为开发版本
     （32位的还需要更多操作）
  2 安装：将下载的文件夹粘贴到用户的local目录下
     ⚠️local目录为隐藏目录，通过"打开finder- shift+command+g - 查找/usr/local"可以找到
  3 安装成功：打开terminal，输入mongo，如果没有显示command not found就是安装成功
  4 配置PATH环境变量：将MongoDB的bin目录添加到path下
  （此部分也可参考node第一天的笔记）
      a 输入echo $PATH回车  会显示当前已有的所有path
         /usr/local/bin
         /usr/bin:/bin
         /usr/sbin:/sbin
         ...
      b 输入sudo vi ~/.bash_profile回车，输入密码（1111），打开./.bash_profile文件（⚠️一定要用sudo，否则没权限保存文件）
      c 回车
      d 打开后还只是处于查看模式，不能编辑。输入“i”，进入insert模式
      e 添加环境变量，例如添加/usr/local/mongodb/bin
            export MONGODB_HOME=/usr/local/mongodb
            export PATH=$PATH:$MONGODB_HOME/bin
      f 编辑完成，点击“esc键，退出insert模式”, 然后输入“:wq!”,回车，保存成功。
      g 输入“source ./.bash_profile”，让环境变量生效。
      h 输入”echo $PATH”,查看环境变量，显示如下：
          /usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/mongodb/bin:/usr/local/mongodb/bin
          发现添加成功。
      i 重新打开终端，环境变量就会生效了。
      （⚠️另外一种添加方式是，可以直接在terminal中输入“open -e .bash_profile”，在打开的文件中加入添加的路径，然后Command+S）

        ???那么为什么要配置PATH
        为了使用方便，不用进入到对应的目录，在任何位置，都可以直接调用node，mongodb......
        但是貌似，在我的情况下，mongod的macos版本已经自动添加其为环境变量了，而无需再自行操作此步骤
        但学习了添加PATH的方法也很好了

  4 安装程序时，如果使用homebrew安装mongodb，那么会自动生成以下文件：
            配置mongodb用的 /usr/local/etc/mongod.conf
            保存日志的 /usr/local/var/log/mongodb
            保存数据库的 /usr/local/var/mongodb
    如果是手动安装，有可能不自动生成，则需要自行创建类似的文件夹
            /usr/local/mongodb/data/db   -->用于存放数据库内容
            /usr/local/mongodb/log       -->用于存放mongodb.log
            /usr/local/mongodb/etc       -->用于存放mongo.conf


  5 mongod，启动服务器 (⚠️⚠️⚠️ 输入ctrl+c退出mongod）
      回到terminal，可以通过两种方式启动mongod：
      
         方法(1) 根据步骤4的信息手动启动mongod服务器，通过信息提供dbpath和logpath两个路径，以及fork参数（fork使mongodb可以在后台运行）。
               输入 "mongod --dbpath db路径 --logpath mongo.log路径 --port 端口号"，启动mongod服务器
               例如：mongod --dbpath /usr/local/mongodb/data/db --logpath /usr/local/mongodb/log/mongodb.log --port 27017
                    -->表示：启动mongod服务器，
                            服务器内容存到"...db"，
                            log日志存到"...mongodb.log"，
                            端口号设为27017
                   （因为如果想选择保存到非默认位置下，则需特别指定）
                   （端口号建议尽量使用27017默认号，如要更改，则尽量使用4位以上，最大不超过65535，且不要使用被占用过的）
                   
                 ⚠️⚠️⚠️ 方法(1)中mongd的terminal窗口不可以关闭
                   
         方法(2) 通过修改mongod.conf配置文件来自动启动mongod，在其中存储dbpath、logpath、fork和许多其他参数的值来启动服务器   （⚠️因为fork设为true，只需每次开机的时候启动一次mongod）
              在/usr/local/mongodb/etc目录下创建一个mongod.conf文件，在文件内输入(1)方法中涉及的各种信息
              例如：dbpath=/usr/local/mongodb/data/db/        #数据库路径
                   logpath=/usr/local/mongodb/log/mongodb.log          #日志输出文件路径
                   logappend=true            #错误日志采用追加模式，配置这个选项后mongodb的日志会追加到现有的日志文件，而不是从新创建一个新文件
                   journal=true           #启用日志文件，默认启用
                   quiet=false           #这个选项可以过滤掉一些无用的日志信息，若需要调试使用请设置为false
                   fork=true            #是否后台启动，有这个参数，就可以实现后台运行
                   port=27017            #端口号 默认为27017
                   
              然后输入 "mongod -f [mongo.conf路径]" 回车，导入配置文件中的信息
              例如：mongod -f /usr/local/mongodb/etc/mongo.conf  ⚠️
                   如果显示
                      "about to fork child process, waiting until server is ready for connections.
                      forked process: 3431
                      child process started successfully, parent exiting"  之类的，表示配置成功
               
               ⚠️⚠️⚠️ 由于fork为true启动了后台，方法(2)中mongd的terminal窗口可以关闭
              （⚠️最终我选择了方法二）

          ???我虽然尝试成功修改了端口号，而且貌似也修改启动了，但却无法成功连接mongo客户端

  6 mongo，启动客户端： （⚠️输入️exit回车 或者 ctr+C 退出mongo）

       接5(1)，如果没有通过fork参数启动后台运行的话，则注意不要关闭当前运行mongod服务器的terminal，
       再打开一个新的terminal，输入mongo回车 启动客户端，如出现>箭头，表示成功
       ⚠️此情况如果选中mongd服务器中内容的话，会导致服务器的停止

       接5(2)，如果设置了后台运行的话，则可以很自由的关闭运行了mongod的terminal（因为此时fork的设置，mongodb的服务器在计算机的background中运行）
       输入mongo，启动客户端

  7 MongoDB启动成功：
        打开浏览器，在地址栏输入端口号localhost:27017，
        如显示"It looks like you are trying to access MongoDB over HTTP on the native driver port."证明启动成功

  8 再次启动mongodb时

       继方法(1) 如果没启动mongod的后台运行的话，则在运行mongo客户端时，mongod的服务器的terminal要始终保持打开，退出了或是关闭了服务器，都需要重复5命令重新启动mongod

       继方法(2) 如果开启了mongod后台的话，只需每次在开机时启动一次mongod即可，此时mongodb的服务器将在计算机的background中运行，
       mongod的服务器的terminal不用一直保持打开，不需要同时开启两个terminal



- 安装可视化工具
  我选择了Studio 3T
  安装过程很简单，若没有修改端口号的话，直接点connect即可

！！！
重要的macos快捷命令
 option + command + c 复制文件的路径
 shift + command + G 前往一个文件夹

*/

