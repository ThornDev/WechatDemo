<?php
header("Content-Type: text/html;charset=utf-8");
require 'fetchTokenUtil.php';
$data = array(
    "button" => array(
        array(
            "type" => "click",
            "name" => urlencode("服务"),
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
                    "url" => "http://120.25.153.95/www/notifySendLocation.php"
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