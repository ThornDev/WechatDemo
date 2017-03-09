<?php
/********************
*数据库连接
********************/
$conn = @mysql_connect("120.25.153.95","root","vaxABr4ukTC+AVJp1+KUyYqxfbU=");
if (!$conn) {
    die("连接数据库失败：".mysql_errno());
}
mysql_select_db("ctrip",$conn);

mysql_query("set character set 'utf-8'");
mysql_query("set names 'utf-8'");
// $sql = "insert into user values('2','123','12','1','2016-12-12','12','12','2017-09-08 12:12:12');";
// if (mysql_query($sql,$conn)) {
//     exit('用户注册成功！点击此处<a href="login.php">登陆</a>');
// }else {
//     echo '抱歉！添加数据失败：'.mysql_errno().'<br>';
//     exit('点击此处 <a href="javascript:history.back(-1);">返回</a>重试');
// }