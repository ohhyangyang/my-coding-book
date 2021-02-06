<!--
    https://wiki.jikexueyuan.com/project/mysql/introduction.html

    -什么是MySQL (Structured Query Language)
       MySQL属于关系型数据库管理系统（RDBMS)
       MySQL 是一种在 Web 上使用的数据库系统。
       MySQL 是一种在服务器上运行的数据库系统。

    - 什么是RDBMS（Relational Database Management System)  关系型数据库管理系统
       之所以称其为关系型数据库，是因为所有数据都存储在不同的表中，
       表之间的关系是建立在主键或其他键（被称为外键）的基础之上的。
          关系型数据库管理系统（RDBMS）具有以下特点：
            能够实现一种具有表、列与索引的数据库。
            保证不同表的行之间的引用完整性。
            能自动更新索引。
            能解释 SQL 查询，组合多张表的信息。
    
    - RDBMS 术语
       数据库（Database）：数据库是带有相关数据的表的集合。
       表（Table）：表是带有数据的矩阵。数据库中的表就像一种简单的电子表格。
       列（Column）：每一列（数据元素）都包含着同种类型的数据，比如邮编。
       行（Row）：行（又被称为元组、项或记录）是一组相关数据，比如有关订阅量的数据。
       冗余（Redundancy）：存储两次数据，以便使系统更快速。
       主键（Primary Key）：主键是唯一的。同一张表中不允许出现同样两个键值。一个键值只对应着一行。
       外键（Foreign Key）：用于连接两张表。
       复合键（Compound Key）：复合键（又称组合键）是一种由多列组成的键，因为一列并不足以确定唯一性。
       索引（Index）：它在数据库中的作用就像书后的索引一样。
       引用完整性（Referential Integrity）：用来确保外键一直指向已存在的一行。
    
-->