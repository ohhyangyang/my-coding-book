/*
        *命令行窗口
         又名小黑屏、终端、shell、cmd窗口  
        (⚠️macOS系统)

        *常用指令(dos)
            pwd 列出当前路径（直接拖拽一个文件到终端，也可显示路径）
            ls 列出当前目录下的所有文件
            ls -R 列出当前目录下的所有文件以及其子文件
            cd XXX 进入到XXX目录   (XXX指代一个目录名)           
            mkdir XXX 创建一个目录
            rmdir XXX 删除一个目录
            open XXX 打开一个文件
            clear 清屏
            
        *目录名包括：
            . 表示当前目录
            .. 表示上一级目录
            Desktop  桌面
            等等

        *环境变量中添加新path
        - 当在命令行窗口打开一个文件，或调用一个程序时，
			系统会首先在当前目录下寻找文件程序，
			如果没有找到则会依次到环境变量path的路径中寻找，直到找到为止
			如果没找到则报错
			
		- 所以可以将一些经常需要访问的程序和文件的路径添加到path中，
            这样就可以在任意位置来访问这些文件和程序了
            
           添加方法
            教程： https://www.jianshu.com/p/463244ec27e3
           1 输入sudo vi ~/.bash_profile
           （⚠️一定要用sudo，否则没权限保存文件）
           2 输入password 1111
           3 点击i建进入编 辑状态。
           4 首先export + 自定义名字（MAVEN_HOME） = 路径名称，
             然后使用export PATH=$PATH:$+自定义名字（MAVEN_HOME）。
             eg：export MAVEN_HOME=/usr/local/apache-maven-3.6.0
                 export PATH=$PATH:$MAVEN_HOME
            (设置PATH的语法都为中间用冒号隔开
             export PATH=$PATH:<PATH 1>:<PATH 2>:<PATH 3>:------:<PATH N>)
           5 编辑完之后，按ESC键，输入:wq，就可以保存退出了，如果不想保存就输入:q就可以了
           （有时会因为权限问题提示：E45: 'readonly' option is set (add ! to override)错误，这时使用:wq!强制保存退出就ok）

        *进程和线程
         进程
           进程负责为程序的运行提供必备的内存环境（简单说就是代码都是存到进程里的）
           相当于工厂中的车间


         线程
           线程是计算机中最小的计算单位，线程负责执行进程中的程序代码
           相当于工厂中干活的工人(CPU)

           单线程：JS是单线程的
           多线程

*/