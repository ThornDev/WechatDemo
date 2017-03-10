<?php
// echo 'hello' . '<br>';
header('content-type:text/html;charset=utf-8');
$code = $_GET['code'];
$state = $_GET['state'];
// echo 'code '.$code.' state '.$state.'<br>';
// 换成自己的接口信息
$appid = 'wx8f930674b4309a73';
$appsecret = '22931074e809cb5e97d9194b1960ef0e';
if (empty($code)) {
    echo 'error';
    $this->error('授权失败');
}
// 根据code的值获得refresh_token
$token_url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=' . $appid . '&secret=' . $appsecret . '&code=' . $code . '&grant_type=authorization_code';
// echo $token_url.'<br>';
$token = json_decode(file_get_contents($token_url));
if (isset($token->errcode)) {
    echo '<h1>错误：</h1>' . $token->errcode;
    echo '<br/><h2>错误信息：</h2>' . $token->errmsg;
    exit();
}

// 根据refresh_token获取access_token
$access_token_url = 'https://api.weixin.qq.com/sns/oauth2/refresh_token?appid=' . $appid . '&grant_type=refresh_token&refresh_token=' . $token->refresh_token;
// 转成对象
$access_token = json_decode(file_get_contents($access_token_url));
if (isset($access_token->errcode)) {
    echo '<h1>错误：</h1>' . $access_token->errcode;
    echo '<br/><h2>错误信息：</h2>' . $access_token->errmsg;
    exit();
}

// 根据access_token和openid获取用户信息
$user_info_url = 'https://api.weixin.qq.com/sns/userinfo?access_token=' . $access_token->access_token . '&openid=' . $access_token->openid . '&lang=zh_CN';
// 转成对象
$user_info = json_decode(file_get_contents($user_info_url));
if (isset($user_info->errcode)) {
    echo '<h1>错误：</h1>' . $user_info->errcode;
    echo '<br/><h2>错误信息：</h2>' . $user_info->errmsg;
    exit();
}
// 打印用户信息
// echo '<pre>';
// print_r($user_info);
echo '</pre>';
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.0, user-scalable=yes" />
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
	<div class="logo">
	<img alt="avatar" src="<?php echo $user_info->headimgurl;?>" width="45"
		height="45" align="middle" />
	</div>
	
	<p>openid:<?php echo $user_info->openid;?></p>
	<p>nickname:<?php echo $user_info->nickname;?></p>
	<p>sex:<?php

if ($user_info->sex) {
    echo '男';
} else {
    echo '女';
}
?></p>
	<p>country:<?php echo $user_info->country;?></p>
	<p>province:<?php echo $user_info->province;?></p>
	<p>city:<?php echo $user_info->city;?></p>



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