<?php

class ACCESSTOKENSDK
{
    private $appId;
    private $appSecret;

    public function __construct($appId, $appSecret)
    {
        $this->appId = $appId;
        $this->appSecret = $appSecret;
    }

    public function getAccessToken()
    {
        // access_token 应该全局存储与更新，以下代码以写入到文件中做示例
        $dir = dirname(__FILE__);
        include $dir.'../util_control.php';
        include_once  PROJECTPATH.'/curlRequest.php';
        
        $file_path = PROJECTPATH.'/data/access_token.php';
        $data = json_decode(get_php_file($file_path));
        if ($data->expire_time < time()) {
            // 如果是企业号用以下URL获取access_token
            $url = "https://api.weixin.qq.com/cgi-bin/token";
            $post_data['grant_type'] = 'client_credential';
            $post_data['appid'] = $this->appId;
            $post_data['secret'] = $this->appSecret;
            $res = request_post($url, $post_data);
            $json = json_decode($res);
            echo "网络获取";
            $access_token = $json->access_token;
            if ($access_token) {
                $data->expire_time = time() + 7000;
                $data->access_token = $access_token;
                set_php_file($file_path, json_encode($data));
            }
        } else {
            echo "缓存获取";
            $access_token = $data->access_token;
        }
        return $access_token;
    }

    private function httpGet($url)
    {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_TIMEOUT, 500);
        // 为保证第三方服务器与微信服务器之间数据传输的安全性，所有微信接口采用https方式调用，必须使用下面2行代码打开ssl安全校验。
        // 如果在部署过程中代码在此处验证失败，请到 http://curl.haxx.se/ca/cacert.pem 下载新的证书判别文件。
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 2);
        curl_setopt($curl, CURLOPT_URL, $url);
        
        $res = curl_exec($curl);
        curl_close($curl);
        
        return $res;
    }
}

