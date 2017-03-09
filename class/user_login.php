<?php
$username = $_POST['username'];
$password = $_POST['password'];
include 'conn.php';
// 查询用户名是否存在
$password = md5($password);
$check_query = mysql_query("select id from user where username='$username' and password='$password' limit 1");
if (!mysql_fetch_array($check_query)) {
    echo '错误：用户名'.$username.'不存在或者密码错误<a href="javascript:history.back(-1);">返回</a>';
    exit();
}else{
    header("Location:../views/welcome.php");
}