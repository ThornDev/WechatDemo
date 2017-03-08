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
	var formId = "#sp-form";

	$.validator.addMethod("mobile", function(value, element, params) {
		var length = value.length;
		var pattern = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
		return this.optional(element) || (length == 11 && pattern.test(value));
	}, "请正确填写您的手机号码");

	$.validator.addMethod("carNo", function(value, element, params) {
		var pattern = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[警京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{0,1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
		return this.optional(element) || pattern.test(value);
	}, "请输入正确的车牌号");

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
				serviceTime : {
					required : true
				},
				hasPhysicalStore : {
					required : true
				},
				serviceItem : {
					required : true
				},
				serviceCarNo : {
					required : true,
					carNo : true
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
				serviceTime : {
					required : "请选择服务时间"
				},
				hasPhysicalStore : {
					required : "请选择有无实体店"
				},
				serviceItem : {
					required : "请至少选择一项"
				},
				serviceCarNo : {
					required : "请填写流动服务车车牌号",
					carNo : "请填写合法的车牌号"
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
	function isArray(obj) {
		return Object.prototype.toString.call(obj) === '[object Array]';
	}
	var initEvent = function() {
		$("#sub_btn").click(function() {
			if (!$(formId).validate().form()) {
				return false;
			}
			var params = $(formId).serializeObject();
			if (isArray(params.serviceItem)) {
				var str = "";
				for (i in params.serviceItem) {
					str += params.serviceItem[i] + ",";
				}
				params.serviceItem = str;
			}
			$.post("admin/service-provider", params, function(data) {
				if (data.success) {
					notice("更新成功");
					if($(document.body).attr("data-op")=="create"){
						window.location.replace("admin/service-providers");
					}
				} else {
					notice("更新失败:"+data.msg, "danger");
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