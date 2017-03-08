var LoginFunc = function() {

	var formId = "#loginForm";

	var formValidation = function() {
		$(formId).validate({
			errorElement : 'div',
			errorClass : 'text-danger',
			focusInvalid : true,
			rules : {
				name : {
					required : true,
					minlength : 2,
					maxlength : 18
				},
				password : {
					required : true,
					minlength : 2,
					maxlength : 18
				}
			},

			messages : {
				name : {
					required : "请输入登录名",
					minlength : "至少输入{0}个字符",
					maxlength : "最多支持{0}个字符"
				},
				password : {
					required : "请输入密码",
					minlength : "至少输入{0}个字符",
					maxlength : "最多支持{0}个字符"
				}
			},

			highlight : function(element) {
				$(element).closest('.form-group').addClass('has-error');
			},

			success : function(label) {
				label.closest('.form-group').removeClass('has-error');
				label.remove();
			},

			errorPlacement : function(error, element) {
				error.insertAfter(element);
			},

			submitHandler : function(form) {
				form.submit();
			}
		});
	}

	var submitBtnEvent = function() {
		$("#submit_btn").click(function() {
			if (!$(formId).validate().form()) {
				return false;
			}

			$("#submit_btn").attr('disabled', 'disabled');
			$.post("admin/sign-in-action", {
				name : $("#name").val(),
				password : $("#password").val(),
				rememberMe : $("#rememberMe").is(":checked")
			}, function(data) {
				if (data.success) {
					window.location.replace(data.location);
				} else {
					$("#submit_btn").removeAttr('disabled');
					$("#alert-div").css('display','block');
					$("#alert-div").find('span.tips').text(data.msg);
					console.info(data);
				}
			}, "JSON");

			return false;
		});
	}

	return {
		init : function() {
			formValidation();
			submitBtnEvent();
		}
	};

}();

$(document).ready(function() {
	LoginFunc.init();
});