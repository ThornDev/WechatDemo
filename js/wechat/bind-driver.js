var BindDriverFunc = function() {

	var formId = "#driver-info-form";

	$.validator.addMethod("mobile", function(value, element, params) {
		var length = value.length;
		var pattern = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
		return this.optional(element) || (length == 11 && pattern.test(value));
	}, "请正确填写您的手机号码");

	$.validator.addMethod("carNo", function(value, element, params) {
		var pattern = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[警京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{0,1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
		return this.optional(element) || pattern.test(value);
	}, "请输入正确的车牌号");

	$.validator.addMethod("count", function(value, element, params) {
		var pattern = /^[1-9][0-9]*$/g;
		try {
			var n = parseInt(value);
			if (n > 20)
				return false;
		} catch (e) {
			console.error('not a number');
			return false;
		}
		return this.optional(element) || (pattern.test(value));
	}, "*请输入合法的数量");

	var formValidation = function() {
		$(formId).validate({
			errorElement : 'div',
			errorClass : 'text-danger',
			focusInvalid : false,
			rules : {
				nickname : {
					required : false,
					minlength : 2,
					maxlength : 18
				},
				name : {
					required : true,
					minlength : 2,
					maxlength : 18
				},
				phone : {
					required : true,
					mobile : true
				},
				zhuCarNo : {
					required : true,
					carNo : true
				},
				guaCarNo : {
					required : false,
					carNo : true
				},
				axisNumber : {
					required : false,
					count : true
				},
				agree : {
					required : true
				}
			},

			messages : {
				nickname : {
					minlength : "请至少输入两个字符",
					maxlength : "最多支持18个字符"
				},
				name : {
					required : "请输入您的姓名",
					minlength : "请至少输入两个字符",
					maxlength : "最多支持18个字符"
				},
				phone : {
					required : "请输入您的手机号",
					mobile : "手机号码格式错误"
				},
				zhuCarNo : {
					required : "请输入车牌号"
				},
				axisNumber : {
					required : "请输入车轴数",
					count : "请输入合法的车轴数"
				},
				agree : {
					required : "您必须同意相关条款才可以继续操作"
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
	BindDriverFunc.init();
});