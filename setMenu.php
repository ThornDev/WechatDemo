<?php
header("Content-Type: text/html;charset=utf-8");
require 'fetchTokenUtil.php';
$data = array(
    "button" => array(
        array(
            "type" => "click",
            "name" => urlencode("获取信息"),
            "key" => urlencode("获取信息")
        ),
        array(
            "name" => "Menu",
            "sub_button" => array(
                array(
                    "type" => "view",
                    "name" => "Search",
                    "url" => "http://www.baidu.com/"
                ),
                array(
                    "type" => "view",
                    "name" => "Video",
                    "url" => "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8f930674b4309a73&redirect_uri=http%3a%2f%2fdev.thornvbear.tech%2ftestPage.php&response_type=code&scope=snsapi_base&state=123#wechat_redirect"
                ),
                array(
                    "type" => "click",
                    "name" => urlencode("赞一下"),
                    "key" => "V1001_GOOD"
                )
            )
        )
    )
);


$utData = json_encode($data);
$utData = urldecode($utData);

$url = 'https://api.weixin.qq.com/cgi-bin/menu/create?access_token=' .$_POST['token'];
$returnRes = request_post_json($url, $utData);
echo $returnRes;
?>