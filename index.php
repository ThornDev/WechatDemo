<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>微信公众号管理系统</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">


<link rel="stylesheet" type="text/css" href="css/reset.css">
<link rel="stylesheet" type="text/css" href="css/structure.css">
<script src="js/ajax.js"></script>
</head>

<body>
	<form class="box login" method="get">
		<fieldset class="boxBody">
			<div id="con"></div>
			<label>用户名</label> 
			<input type="text" name="username" id="username" class="text" tabindex="1" placeholder="用户名 " value="wangmianjie"> 
			<label><a href="#" class="rLink" tabindex="5">忘记密码？</a>密码</label>
			<input type="password" name="password" id="password" class="text" tabindex="2" placeholder="密码" value="123456">
		</fieldset>
		<footer>
		 <label><input type="checkbox" tabindex="3">记住密码</label> 
		 <input type="button" id="btn" class="btnLogin" value="登 录" tabindex="4">
		 <input type="reset" class="btnLogin" value="重置" id="re" tabindex="6"> 
		</footer>
	</form>
	<footer id="main"> 
	<a href="http://thornvbear.tech/about/">thornvbear.tech</a>
	<a href="http://thornvbear.tech/about/">PSD by thornvbear</a> 
	</footer>
</body>
</html>
<script src="js/user_login.js"></script>
