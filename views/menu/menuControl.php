<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
    <body>
    <p>This page uses frames. The current browser you are using does not support frames.</p>
     <?php
    include_once '../../class/util/util.php';
      
        include_once PROJECTPATH.'/data/wechat_user_data.inc.php';
        include_once PROJECTPATH.'/class/util/access_token_sdk.php';

        $accesstokensdk = new ACCESSTOKENSDK(APPID, APPSCRETE);
        $faccesstoken = $accesstokensdk->getAccessToken();
        echo '<br>';
        echo 'hello';
        echo '<br>';
	?>
    </body>

</html>