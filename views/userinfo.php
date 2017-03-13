<?php
require '../class/oauth.php';
$oauth = new reqOauth();
$user_info = $oauth->achieveUserinfo();
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.0, user-scalable=no" />
<title>获取用户信息</title>
<link rel="stylesheet" href="../css/weui.css" />
<link rel="stylesheet" href="../css/example.css" />
<link rel="stylesheet" href="../css/docs.min.css" />
<link rel="stylesheet" href="../css/bootstrap.min.css" />
</head>
<body>

	<div style="padding-left: 10px;">
		<div class="bs-callout bs-callout-info">用户信息信息</div>
	</div>
	<div style="text-align: center">
		<img alt="avatar" src="<?php echo $user_info->headimgurl;?>"
			width="60" height="60" align="middle" />
	</div>

	<div style="font-size: 15px">
	
		<p>&nbsp; openid:<?php echo $user_info->openid;?></p>
		<p>&nbsp; nickname:<?php echo $user_info->nickname;?></p>
		<p>&nbsp; sex:
	<?php
if ($user_info->sex) {
    echo '男';
} else {
    echo '女';
}
?></p>
		<p>&nbsp; country:<?php echo $user_info->country;?></p>
		<p>&nbsp; province:<?php echo $user_info->province;?></p>
		<p>&nbsp; city:<?php echo $user_info->city;?></p>
	</div>

	<div class="page__ft">
		<p class="weui-footer__text"
			style="text-align: center; margin: 10px 5px;">Copyright © 2016-2021
			thornvbear.tech</p>
	</div>

</body>

<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript"
	src="plugins/jquery-validation/js/jquery.validate.js"></script>
<script type="text/javascript"
	src="plugins/jquery-validation/js/additional-methods.js"></script>
<script type="text/javascript" src="js/wechat/bind-driver.js"></script>
</html>