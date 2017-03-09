<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.0, user-scalable=yes" />
<title>登录</title>
<link rel="stylesheet" href="../css/weui.css"/>
<link rel="stylesheet" href="../css/example.css"/>
<link rel="stylesheet" href="../css/docs.min.css"/>
<link rel="stylesheet" href="../css/bootstrap.min.css"/>
<script type="text/javascript">
function InputCheck(loginform)
{
	if(loginform.username.value == "")
	{
		alert("请输入用户名！");
		loginform.username.focus();
		return false;
	}
	if(loginform.password.value == "")
	{
		alert("请输入密码！");
		loginform.password.focus();
		return false;
	}
}
</script>
</head>
<body>
	<div class="container" id="container">
		<div class="page msg_success js_show">

			<div class="page__bd">
				<div style="padding-left: 10px;">
					
						<div class="bs-callout bs-callout-info">登录信息</div>
					
					
				</div>
				<form id="driver-info-form" class="weui-cells weui-cells_form" action="../class/user_login.php" method="post" name="loginform" onSubmit="return InputCheck(this)">
					<div class="weui-cell">
						<div class="weui-cell__hd">
							<label class="weui-label">用户名</label>
						</div>
						<div class="weui-cell__bd">
							<input class="weui-input"  name="username" type="text" placeholder="请输入用户名">
						</div>
					</div>
					<div class="weui-cell">
						<div class="weui-cell__hd">
							<label class="weui-label">密码</label>
						</div>
						<div class="weui-cell__bd">
							<input class="weui-input" type="password" name="password"  placeholder="请输入密码">
						</div>
					</div>
					<label for="weuiAgree" class="weui-agree"> <input id="agree" name="agree" type="checkbox" class="weui-agree__checkbox"> <span class="weui-agree__text"> 阅读并同意<a
							href="javascript:void(0);">《相关条款》</a>
					</span>
					</label>

					<div class="weui-btn-area">
						
							<button class="weui-btn weui-btn_primary" id="submit_btn">登录</button>
						
						
					</div>
				</form>

				<form id="driver-info-form" class="weui-cells weui-cells_form" action="register.php" method="post">
				

					<div class="weui-btn-area">
						
							<button class="weui-btn weui-btn_primary" id="submit_btn">注册</button>
						
						
					</div>
				</form>

			</div>

<div class="page__ft">
	<!-- <p class="weui-footer__links">
			<a href="javascript:void(0);" class="weui-footer__link">底部链接文本...</a>
		</p> -->
	<p class="weui-footer__text" style="text-align: center;margin: 10px 5px;">Copyright © 2016-2021 thornvbear.tech</p>
</div>
		</div>
	</div>
</body>

<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="plugins/jquery-validation/js/jquery.validate.js"></script>
<script type="text/javascript" src="plugins/jquery-validation/js/additional-methods.js"></script>
<script type="text/javascript" src="js/wechat/bind-driver.js"></script>
</html>