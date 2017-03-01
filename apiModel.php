<?php 
/**
     * 模拟post进行url请求
     * @param string $url
     * @param array $post_data
     */
    function request_post($url = '', $post_data = array()) {
        if (empty($url) || empty($post_data)) {
            return false;
        }
       $ch = curl_init();
       curl_setopt($ch, CURLOPT_URL, $url);
       curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
       curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
       curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
//         　　 post数据
        curl_setopt($ch, CURLOPT_POST, 1);
       // post的变量
       curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
       $output = curl_exec($ch);
       curl_close($ch);
       //打印获得的数据
       return $output;
    }
    
    /**
     * 模拟post进行url请求
     * @param string $url
     * @param array $post_data
     */
    function request_post_json($url = '', $post_data = array()) {
        if (empty($url) || empty($post_data)) {
            return false;
        }
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        //         　　 post数据
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; MSIE 5.01; Windows NT 5.0)');
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json', 'Content-Length: ' . strlen($post_data)));
        curl_setopt($ch, CURLOPT_POST, 1);
        // post的变量
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data); 
        $output = curl_exec($ch);
        curl_close($ch);
        //打印获得的数据
        return $output;
//         $ch = curl_init();
//         curl_setopt($ch, CURLOPT_URL, $url);
//         curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
//         curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
//         curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
//         curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; MSIE 5.01; Windows NT 5.0)');
//         curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
//         curl_setopt($ch, CURLOPT_AUTOREFERER, 1);
//         curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
//         curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//         $tmpInfo = curl_exec($ch);
//         if (curl_errno($ch)) {
//             return curl_error($ch);
//         }
        
//         curl_close($ch);
//         return $tmpInfo;
    }
    ?>