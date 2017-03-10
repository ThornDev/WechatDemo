<?php
// $appid = 'wx8f930674b4309a73';
// $appsecret = '22931074e809cb5e97d9194b1960ef0e';
// echo '<script>var para=\"$appid\";</script>'
// header('location:https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8f930674b4309a73&redirect_uri=http%3a%2f%2fdev.thornvbear.tech%2foauth.php&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect');
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.0, user-scalable=yes" />
<title>微信功能测试</title>
<link rel="stylesheet" href="../css/weui.css"/>
<link rel="stylesheet" href="../css/example.css"/>
<link rel="stylesheet" href="../css/docs.min.css"/>
<link rel="stylesheet" href="../css/bootstrap.min.css"/>
<script type="text/javascript">
var appid = 'wx8f930674b4309a73';
function receiveUserInfo(){
	var url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+appid+"&redirect_uri=http%3a%2f%2fdev.thornvbear.tech%2foauth.php&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect')";
//     alert(url);
	self.location=url;
}

</script>
</head>
<body>
	<div class="container" id="container">
		<div class="page msg_success js_show">

			<div class="page__bd">
				<div style="padding-left: 10px;">
					
						<div class="bs-callout bs-callout-info">测试信息</div>
				</div>
<!-- 				<form id="driver-info-form" class="weui-cells weui-cells_form" method="get"> -->
				

					<div class="weui-btn-area">
							<button class="weui-btn weui-btn_primary" id="submit_btn" onclick="receiveUserInfo()">获取用户信息</button>
					</div>
<!-- 				</form> -->

			</div>

<div class="page__ft">

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