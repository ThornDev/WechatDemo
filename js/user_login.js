/**
 * 
 */
var btn = document.getElementById('btn');
var re = document.getElementById('re');
var user = document.getElementById('username');
var password = document.getElementById('password');
btn.onclick = function(){
	var isValidate=false;
	if(user.value ==""){
		con.innerHTML = '<font color="red">帐号不能为空！</font>';
		user.focus();
		return;
	}
	if (!user.value.match(/^\S{2,20}$/)) {
		
		user.focus();
		return;
	} else {
		user.className = 'text';
		isValidate=true;
	}

	if (password.value == "") {
		con.innerHTML = '<font color="red">密码不能为空！</font>';
		password.focus();
		return;
	} else {
		password.className = 'text';
		isValidate=true;
	}
	
	if (isValidate) {
		var ajax = Ajax();
		ajax.get('./class/user_login.php?username='+document.getElementById('username').value+'&password='+document.getElementById('password').value, function(data){
			var con = document.getElementById('con');
			eval(data);
			if (login) {
				con.innerHTML = '<font color="green">登录成功，跳转中...</font>';
				location = './views/setWeMenu.php'; // 登录成功后指定跳转页面
			} else {
				con.innerHTML = '<font color="red">帐号或密码错误！</font>';
			}
		});
	}
	
};
re.onclick = function(){
	user.value="";
	password.value="";
};