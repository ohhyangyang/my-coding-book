<!--
    - phpMyAdmin管理工具
        phpMyAdmin是一个以PHP为基础的，架构在网站主机上的MySQL数据库管理工具
        让管理者可以用web来管理MySQL数据库
        为本地服务器数据库的视觉化体现
     
   - phpMyAdmin基本使用

    1 打开界面
       打开XAMPP，在Services中打开MySQL
       打开浏览器，输入localhost:8000/phpmyadmin进入到SQL管理页面（端口号不一定一直为8000，可自行定义）


    2 手动创建database（尚无PHP操作）
        创建yang_pizza数据库
           点开上方database选项，输入yang_pizza，点击create
        创建pizzas表格
           输入pizzas，输入5列(id,title,ingredients,email,creation time)，点击下方GO
        创建表格的columns，定义model
           id            Type:INT(整数)              选择A_I (auto increment) 表示当拥有新的用户记录时，会自动添加新id
           title         Type:VARCHAR(代表string)    Length/Values:255(just do that)
           ingredients   Type:VARCHAR(代表string)    Length/Values:255(just do that)
           emial         Type:VARCHAR(代表string)    Length/Values:255(just do that)
           created_at    Type:TIMESTAMP(代表时间戳)   Default:CURRENT_TIME
           点击下方save
        创建表格的rows，创建用户记录
           点击上方Insert选项
           id            Value:1 (⚠️⚠️ 只需要输入第一次，从第二次开始因为选择了AI会自动添加)
           title         Value:yang supreme
           ingredients   Value:tomato, cheese, tofu
           email         Value:holayangge@gmail.com
           created_at    Value:CURRENT_TIMESTAMP (⚠️⚠️ 为default)
           点击下方GO，
           即创建成功，点击上方Browse选项即可查看




-->        