<?php
header('content-type:text/html;charset=utf-8');
$username = $_GET['username'];
$password = $_GET['password'];
include 'conn.php';
// // 查询用户名是否存在
$password = md5($password);
$check_query = mysql_query("select id from user where username='$username' and password='$password' limit 1");
if (!mysql_fetch_array($check_query)) {
    echo 'var login=false';
}else{
    setcookie('username',$username);
    echo "var login=true";
}