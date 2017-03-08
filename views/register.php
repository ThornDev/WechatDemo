<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewpoint" content="width=device-width,initial-scale=1,user-scalable=0">
<title>注册</title>
<link rel="stylesheet" href="../css/weui.css"/>
<link rel="stylesheet" href="../css/example.css"/>
<link rel="stylesheet" href="../css/docs.min.css"/>
<link rel="stylesheet" href="../css/bootstrap.min.css"/>
</head>
<body>
	<div class="container" id="container">
		<div class="page msg_success js_show">

			<div class="page__bd">
				<div style="padding-left: 10px;">
					
						<div class="bs-callout bs-callout-info">注册信息</div>
					
					
				</div>
				<form id="driver-info-form" class="weui-cells weui-cells_form" action="user/bind-driver-action" method="post">
					<div class="weui-cell">
						<div class="weui-cell__hd">
							<label class="weui-label">用户名</label>
						</div>
						<div class="weui-cell__bd">
							<input class="weui-input"  name="nickname" type="text" placeholder="请输入用户名">
						</div>
					</div>
					<div class="weui-cell">
						<div class="weui-cell__hd">
							<label class="weui-label">密码</label>
						</div>
						<div class="weui-cell__bd">
							<input class="weui-input" type="password" name="password"  placeholder="请输入密码">
						</div>
					</div>
					<div class="weui-cell">
						<div class="weui-cell__hd">
							<label class="weui-label">确认密码</label>
						</div>
						<div class="weui-cell__bd">
							<input class="weui-input" type="password" name="surepassword"  placeholder="请确认密码">
						</div>
					</div>
					<div class="weui-cell">
						<div class="weui-cell__hd">
							<label class="weui-label">性别</label>
						</div>
						<div class="weui-cell__bd">
							<input class="weui-cells_radio" type="radio" name="sex" value="male"/>男
							<input class="weui-cells_radio" type="radio" name="sex" value="female"/>女
						</div>
					</div>
					<div class="weui-cell">
						<div class="weui-cell__hd">
							<label class="weui-label">生日</label>
						</div>
						<div class="weui-cell__bd">
							<input class="weui-input" type="text" name="birthday"  placeholder="请选择出生日期">
						</div>
					</div>
					<div class="weui-cell">
						<div class="weui-cell__hd">
							<label class="weui-label">手机号</label>
						</div>
						<div class="weui-cell__bd">
							<input class="weui-input" type="text" name="phone"  placeholder="请输入手机号">
						</div>
					</div>
					<label for="weuiAgree" class="weui-agree"> <input id="agree" name="agree" type="checkbox" class="weui-agree__checkbox"> <span class="weui-agree__text"> 阅读并同意<a
							href="javascript:void(0);">《相关条款》</a>
					</span>
					</label>

					<div class="weui-btn-area">
						
							<button class="weui-btn weui-btn_primary" id="submit_btn">注册</button>
						
						
					</div>
				</form>


			</div>

<div class="page__ft">
	<!-- <p class="weui-footer__links">
			<a href="javascript:void(0);" class="weui-footer__link">底部链接文本...</a>
		</p> -->
	<p class="weui-footer__text" style="text-align: center;margin: 10px 5px;">Copyright © 2016-2021 thornvbear.tech</p>
</div>
		</div>
	</div>
</body>
</html>