<?php
header("Content-Type: text/html;charset=utf-8");
require 'apiModel.php';
$access_token = "";
function fetchToken(){
    $appid = 'wx8f930674b4309a73';
    $appsecret = '22931074e809cb5e97d9194b1960ef0e';
    session_start();
    $_SESSION['access_token'] = null;
    $_SESSION['expire_time'] = null;
    if ($_SESSION['access_token'] && $_SESSION['expire_time'] > time()) {
        echo 'ֱ直接拿到'.'<br>';
        return $_SESSION['access_token'];
    }else {
        if ($appid != null && $appsecret != null) {
            $url = "https://api.weixin.qq.com/cgi-bin/token";
            $post_data['grant_type'] = 'client_credential';
            $post_data['appid'] = $appid;
            $post_data['secret'] = $appsecret;
            $res = request_post($url,$post_data);
            $json = json_decode($res);
            $access_token = $json->access_token;
            $_SESSION['access_token'] = $access_token;
            $_SESSION['expire_time'] = time() + 7200;
            echo '服务器获取'.'<br>';
            return  $access_token;
        }else {
            return null;
        }
    }
    
}
