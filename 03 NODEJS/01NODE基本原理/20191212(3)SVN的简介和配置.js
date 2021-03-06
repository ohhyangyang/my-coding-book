/*
*什么是SVN（Subversion）?

有一个简单但不十分精确比喻：
SVN = 版本控制 + 备份服务器
简单的说，您可以把SVN当成一个备份服务器，更好的是，他可以帮你记住每次上传到这个服务器的档案内容。并且自动的赋予每次的变更一个版本。
通常，我们称用来存放上传档案的地方就做Repository。用中文来说，有点像是档案仓库的意思。不过，通常我们还是使用Repository这个名词。

基本上，第一次我们需要有一个新增(add)档案的动作，将想要备份的档案放到Repository上面。
日后，当您有任何修改时，都可以上传到Repository上面，上传已经存在且修改过的档案就叫做commit，也就是提交修改给SVN server的意思。
针对每次的commit，SVN server都会赋予他一个新的版本。同时，也会把每次上传的时间记录下来。
日后，因为某些因素，如果您需要从Repository下载曾经提交的档案。您可以直接选择取得最新的版本，也可以取得任何一个之前的版本。
如果忘记了版本，还是可以靠记忆尝试取得某个日期的版本。

* 为什么要用SVN？

1。备份工作档案的重要性。
2。版本控管的重要性。
   很多时候，在经过数天努力工作后，您才发现走错方向。需要将所有的修改回复到数天前版本。
   没有几个人能够完全记住自己修改过什么东西。如果没有做好版本控管，那么，最差的状况就是要全部重来。
3。伙伴间的数据同步的重要性。
   很多时候，除了您个人外，还有其它的伙伴也需要您的档案。
4。如果没有一个好的办法，备份不同版本是很耗费硬盘空间的。

*SVN的特点
SVN Repository可以是自己计算机上的一个目录，或者是随身碟（不建议这样用）。当然也可以是公司的服务器。
SVN有很棒的版本控管机制。所有上传的版本都会帮您记录下来。日后您可以随时取得某一个时刻的版本。而且，也有版本分支及合并等好用的功能。
SVN可以让不同的开发者存取同样的档案，并且利用SVN Server作为档案同步的机制。。
SVN的存放档案方式是采用差异备份的方式。也就是说，他只会备份有不同的地方。所以很省硬盘空间。此外，他也可以针对所谓的非文字文件进行差异备份。


* 创建配置svn
（macOS自带svn，后期则可以使用cornerstone来操作SVN）
如何创建svn
1 在finder中创建一个svn目录（我创建在了young用户目录下）
2 打开terminal，直接输入svnadmin create ~/svn/code.，来创建一个仓库结构
3 进入code目录，查看其中是否自动添加了很多文件，是否建立成功

如何配置svn用户权限
1 修改 svnserve.conf文件（可以在webstorm中打开并修改）
2 修改 passwd文件
3 修改 authz文件
具体方法 https://www.hangge.com/blog/cache/detail_1507.html

启动svn
在终端输入svnserve -d -r /Users/young/svn
未报错则启动成功

停止svn
打开“活动监视器” 。搜索 svn，将进程强制退出即可。

* SVN基本术语
checkout 当你需要修改和提交的时候，用checkout，它会在你本地建立一个工作区（workingcopy）
         同时导出文件夹下有一个.svn的隐藏文件夹，存储着一些版本的元数据信息。
         此文件与repository中源文件相关联，当有别人修改或是自己修改时，working copy会显示修改数量，
         白色数量为别人修改数量，灰色数量为自己修改数量，所以如果你是项目中的开发人员，可以选择check out
         （需要检出才能形成一个受svn控制的工作拷贝，才可以进行 add update commit 等操作）
export 简单导出一个版本的数据（把服务器中的数据导出来，相当于复制一份），
       Export后的项目不会与repository中的源文件相关联，是一个独立的版本。
       如果只是下载查看，不希望自己的修改影响到整个项目，最好是选Export。
repository 一个SVN仓库，SVN目录中的一个文件夹即为一个repository
working copy 从项目中迁移到本地的一个工作区，工作区中的内容和repository中的源文件相连
import 将文件可以直接拖拽或import到repository的一个子文件夹中

* 在webstorm中将项目连接至svn
1 preferences-plugins 查找SVNToolBox插件并安装
2 preferences-version control-subversion引入svn（reset即可）
3 VCS-Enable Version Control Integration
4 VCS-get from version control-subversion-add new repository URL-checkout到要链接的项目文件夹-depth:files-OK
5 点击绿色对号-在打开的窗口上方位置选择要保存的目标files-点击commit


* cornerstone用于查看修改项目中的文件在svn状态
拖拽已经和svn连接过的项目至cornerstone左侧边栏即可
右键copy URL可查看地址，例如我的是 svn://young@localhost/coding
(svn://用户名@主机地址:端口号/路径  https://michael@192.168.1.11:443/svn/iOS)

⚠️⚠️总的来说cornerstone和webstorm都可以关联项目到svn，但是cornerstone的操作更好用，
cornerstone不但可以观察文件在svn中的实时状态，另外很多时候webstorm无法commit文件，但通过cornerstone的commit changes就可以
⚠️⚠️️URL路径名可以在cornerstone中对repository右键进行copyURL来查找
    （svn://young@localhost/code）这他妈太难猜了。。。
⚠️⚠️注意如果一个repository连接多个项目，可能需要在cornerstorm中设置多个储存空间
 */
