<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
</head>
<body>
<form action="../setMenu.php" method="post">

    <p>This page uses frames. The current browser you are using does not support frames.</p>
    <?php
//         include_once  '../fetchTokenUtil.php';
        include_once '../data/wechat_user_data.inc.php';
        include '../class/util/access_token_sdk.php';
//         $faccess_token = fetchToken();
        $accesstokensdk = new ACCESSTOKENSDK(APPID, APPSCRETE);
        $faccesstoken = $accesstokensdk->getAccessToken();
        echo '<br>';
        echo 'hello';
        echo '<br>';
        echo $faccesstoken;
        echo "<br>";
	?>
	 <input type="text" name="token" value='<?php echo $faccesstoken;?>' >
	<input type="submit" value="修改菜单">
</form>
 </body>
</html>