<?php
// if (!isset($_POST['submit'])) {
//     exit('非法访问！');
// }
$username = $_POST['username'];
$password = $_POST['password'];
$repswd = $_POST['surepassword'];
$sex = $_POST['sex'];
$birthday = $_POST['birthday'];
$phone = $_POST['phone'];
$openid = '123';
// 注册信息判断
// if (!preg_match('/^[\w\x80-\xff]{3,15}$/', $username)) {
//     exit('错误：用户名不符合规定。<a href="javascript:history.back(-1);">返回</a>');
// }

// if (strlen($password) < 6) {
//     exit('错误：密码长度不符合规定。<a href="javascript:history.back(-1);">返回</a>');
// }

// if ($password != $repswd) {
//     exit('错误：两次密码输入不一致。<a href="javascript:history.back(-1);">返回</a>');
// }

// if (!preg_match('/^w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*$/', $subject)) {
//     ;
// }
include 'conn.php';
// 查询数据库里用户名是否已存在
$check_query = mysql_query("select id from user where username='$username' limit 1");
if (mysql_fetch_array($check_query)) {
    echo '错误'.$username.'用户已存在<a href="javascript:history.back(-1);">返回</a>';
    exit();
}
// 写入数据
$password = md5($password);
$regdate = date('Y-m-d H:i:s',time());
$sql = "insert into user(username,password,sex,birthday,phone,openid,retime) values('$username','$password','$sex','$birthday','$phone','$openid','$regdate');";
echo $sql;
if (mysql_query($sql,$conn)) {
    exit('用户注册成功 ！<a href="../views/login.php">登录</a>');
}else {
    echo '抱歉！添加数据失败！'.mysql_errno().'<br>';
    exit('点击此处 <a href="javascript:history.back(-1);">返回</a>重试');
}

