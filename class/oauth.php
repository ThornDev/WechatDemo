<?php
header('content-type:text/html;charset=utf-8');
$code = $_GET['code'];
$state = $_GET['state'];

class reqOauth
{
    // echo 'code '.$code.' state '.$state.'<br>';
    // 换成自己的接口信息
    public $appid = 'wx8f930674b4309a73';

    public $appsecret = '22931074e809cb5e97d9194b1960ef0e';
    
    // 根据code、state获取refresh_token
    public function achieveRefreshToken()
    {
        $token_url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=' . $this->appid . '&secret=' . $this->appsecret . '&code=' . $GLOBALS['code'] . '&grant_type=authorization_code';
//         echo $token_url . '<br>';
        $token = json_decode(file_get_contents($token_url));
        if (isset($token->errcode)) {
            echo '<h1>achieveRefreshToken 错误：</h1>' . $token->errcode;
            echo '<br/><h2>错误信息：</h2>' . $token->errmsg;
            exit();
        }
        ;
        return $token->refresh_token;
    }
    
    // 根据refresh_token获取access_token
    public function achieveAccessToken()
    {
        $refresh_token = $this->achieveRefreshToken();
//         echo $refresh_token . '<br>';
        $access_token_url = 'https://api.weixin.qq.com/sns/oauth2/refresh_token?appid=' . $this->appid . '&grant_type=refresh_token&refresh_token=' . $refresh_token;
        // 转成对象
        $access_token_obj = json_decode(file_get_contents($access_token_url));
        if (isset($access_token->errcode)) {
            echo '<h1>achieveAccessToken 错误：</h1>' . $access_token_obj->errcode;
            echo '<br/><h2>错误信息：</h2>' . $access_token_obj->errmsg;
            exit();
        }
        ;
        return $access_token_obj;
    }
    
    // 根据access_token和openid获取用户信息
    public function achieveUserinfo()
    {
        $access_obj = $this->achieveAccessToken();
        $access_token = $access_obj->access_token;
        $openid = $access_obj->openid;
        $user_info_url = 'https://api.weixin.qq.com/sns/userinfo?access_token=' . $access_token . '&openid=' . $openid . '&lang=zh_CN';
        // 转成对象
        $user_info = json_decode(file_get_contents($user_info_url));
        if (isset($user_info->errcode)) {
            echo '<h1>achieveUserinfo 错误：</h1>' . $user_info->errcode;
            echo '<br/><h2>错误信息：</h2>' . $user_info->errmsg;
            exit();
        }
        ;
        return $user_info;
    }
}
?>
