var SPDetails = function() {
	$.fn.serializeObject = function() {
		var o = {};
		var a = this.serializeArray();
		$.each(a, function() {
			if (o[this.name] !== undefined) {
				if (!o[this.name].push) {
					o[this.name] = [ o[this.name] ];
				}
				o[this.name].push(this.value || '');
			} else {
				o[this.name] = this.value || '';
			}
		});
		return o;
	};
	var formId = "#accountForm";

	var formValidation = function() {
		$(formId).validate({
			errorElement : 'div',
			errorClass : 'text-danger',
			focusInvalid : false,
			rules : {
				oldPassword : {
					required : true,
					minlength : 3,
					maxlength : 18
				},
				newPassword : {
					required : true,
					minlength : 3,
					maxlength : 18
				},
				rePassword : {
					required : true,
					minlength : 3,
					maxlength : 18,
					equalTo : "#newPassword"
				}
			},

			messages : {
				oldPassword : {
					required : "输入旧密码",
					minlength : "至少输入三个字符",
					maxlength : "最多支持18个字符"
				},
				newPassword : {
					required : "输入新密码",
					minlength : "至少输入三个字符",
					maxlength : "最多支持18个字符"
				},
				rePassword : {
					required : "确认密码",
					minlength : "至少输入三个字符",
					maxlength : "最多支持18个字符",
					equalTo : "两次输入不一致"
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

	var initEvent = function() {
		$("#submit_btn").click(function() {
			if (!$(formId).validate().form()) {
				return false;
			}

			var params = $(formId).serializeObject();
			params._method = "PUT";
			console.info(params);
			$.post("admin/account", params, function(data) {
				if (data.success) {
					notice("更新成功");
				} else {
					notice("更新失败:" + data.msg, "danger");
				}
			}, "JSON");
			return false;
		});
	}
	function notice(msg, msgType) {
		$.notify({
			icon : 'glyphicon glyphicon-warning-sign',
			title : '服务器通知',
			message : msg
		}, {
			element : formId,
			type : msgType || "success",
			delay : 3000
		});
	}

	return {
		init : function() {
			formValidation();
			initEvent();
		}
	};
}();

jQuery(document).ready(function() {
	SPDetails.init();
});