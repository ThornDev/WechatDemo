var RepairPageFunc = function() {

	var $loadingEl = $('#loadingToast');
	var $toast = $('#toast');
	var formId = "#service-form";

	var defaultMaxLengErrMsg = "您输入的数量太大";
	var defaultMinLengErrMsg = "您输入的数字太小";
	var defaultPriceErrMsg = "请输入价格";
	var defaultNumberErrMsg = "请输入数量";

	$.validator.addMethod("count", function(value, element, params) {
		var checkName = /^[1-9][0-9]*$/g;
		try {
			parseInt(value);
		} catch (e) {
			console.error('not a number');
			return false;
		}
		return this.optional(element) || (checkName.test(value));
	}, "*请输入合法的数量");

	$.validator.addMethod("price", function(value, element, params) {
		var checkName = /^\+?\d{1,}(\.\d{0,2})?$/;
		try {
			parseFloat(value);
		} catch (e) {
			console.error('not a number');
			return false;
		}
		return this.optional(element) || (checkName.test(value));
	}, "*请输入一个合法的价格(最多两位小数)");

	var formValidation = function() {
		$(formId).validate({
			errorElement : 'div',
			errorClass : 'text-danger',
			focusInvalid : false,
			rules : {
				ltazPrice : {
					required : function() {
						return $("#ch-ltaz").is(":checked");
					},
					price : true,
					minlength : 1
				},
				ltazNumber : {
					required : function() {
						return $("#ch-ltaz").is(":checked");
					},
					count : true,
					maxlength : 3,
					minlength : 1
				},
				ltxbPrice : {
					required : function() {
						return $("#ch-ltxb").is(":checked");
					},
					price : true,
					minlength : 1
				},
				ltxbNumber : {
					required : function() {
						return $("#ch-ltxb").is(":checked");
					},
					count : true,
					maxlength : 3,
					minlength : 1
				},
				lttwPrice : {
					required : function() {
						return $("#ch-lttw").is(":checked");
					},
					price : true,
					minlength : 1
				},
				lttwNumber : {
					required : function() {
						return $("#ch-lttw").is(":checked");
					},
					count : true,
					maxlength : 3,
					minlength : 1
				},
				qyhhwjcPrice : {
					required : function() {
						return $("#ch-qyhhwjc").is(":checked");
					},
					price : true,
					minlength : 1
				},
				qyhhwjcNumber : {
					required : function() {
						return $("#ch-qyhhwjc").is(":checked");
					},
					count : true,
					maxlength : 3,
					minlength : 1
				},
				cdqPrice : {
					required : function() {
						return $("#ch-cdq").is(":checked");
					},
					price : true,
					minlength : 1
				},
				cdqNumber : {
					required : function() {
						return $("#ch-cdq").is(":checked");
					},
					count : true,
					maxlength : 3,
					minlength : 1
				},
				qytzPrice : {
					required : function() {
						return $("#ch-qytz").is(":checked");
					},
					price : true,
					minlength : 1
				},
				qytzNumber : {
					required : function() {
						return $("#ch-qytz").is(":checked");
					},
					count : true,
					maxlength : 3,
					minlength : 1
				},
				xlwPrice : {
					required : function() {
						return $("#ch-xlw").is(":checked");
					},
					price : true,
					minlength : 1
				},
				xlwNumber : {
					required : function() {
						return $("#ch-xlw").is(":checked");
					},
					count : true,
					maxlength : 3,
					minlength : 1
				},
				ltfmPrice : {
					required : function() {
						return $("#ch-ltfm").is(":checked");
					},
					price : true,
					minlength : 1
				},
				ltfmNumber : {
					required : function() {
						return $("#ch-ltfm").is(":checked");
					},
					count : true,
					maxlength : 3,
					minlength : 1
				},
				ghqmjPrice : {
					required : function() {
						return $("#ch-ghqmj").is(":checked");
					},
					price : true,
					minlength : 1
				},
				ghqmjNumber : {
					required : function() {
						return $("#ch-ghqmj").is(":checked");
					},
					count : true,
					maxlength : 3,
					minlength : 1
				},
				dphPrice : {
					required : function() {
						return $("#ch-dph").is(":checked");
					},
					price : true,
					minlength : 1
				},
				dphNumber : {
					required : function() {
						return $("#ch-dph").is(":checked");
					},
					count : true,
					maxlength : 3,
					minlength : 1
				},
				sldwPrice : {
					required : function() {
						return $("#ch-sldw").is(":checked");
					},
					price : true,
					minlength : 1
				},
				sldwNumber : {
					required : function() {
						return $("#ch-sldw").is(":checked");
					},
					count : true,
					maxlength : 3,
					minlength : 1
				},
				dhyPrice : {
					required : function() {
						return $("#ch-dhy").is(":checked");
					},
					price : true,
					minlength : 1
				},
			},

			messages : {
				ltazPrice : {
					minlength : defaultMinLengErrMsg,
					required : defaultPriceErrMsg
				},
				ltazNumber : {
					maxlength : defaultMaxLengErrMsg,
					minlength : defaultMinLengErrMsg,
					required : defaultNumberErrMsg
				},
				ltxbPrice : {
					minlength : defaultMinLengErrMsg,
					required : defaultPriceErrMsg
				},
				ltxbNumber : {
					maxlength : defaultMaxLengErrMsg,
					minlength : defaultMinLengErrMsg,
					required : defaultNumberErrMsg
				},
				lttwPrice : {
					minlength : defaultMinLengErrMsg,
					required : defaultPriceErrMsg
				},
				lttwNumber : {
					maxlength : defaultMaxLengErrMsg,
					minlength : defaultMinLengErrMsg,
					required : defaultNumberErrMsg
				},
				qyhhwjcPrice : {
					minlength : defaultMinLengErrMsg,
					required : defaultPriceErrMsg
				},
				qyhhwjcNumber : {
					maxlength : defaultMaxLengErrMsg,
					minlength : defaultMinLengErrMsg,
					required : defaultNumberErrMsg
				},
				cdqPrice : {
					minlength : defaultMinLengErrMsg,
					required : defaultPriceErrMsg
				},
				cdqNumber : {
					maxlength : defaultMaxLengErrMsg,
					minlength : defaultMinLengErrMsg,
					required : defaultNumberErrMsg
				},
				xlwNumber : {
					maxlength : defaultMaxLengErrMsg,
					minlength : defaultMinLengErrMsg,
					required : defaultNumberErrMsg
				},
				xlwPrice : {
					minlength : defaultMinLengErrMsg,
					required : defaultPriceErrMsg
				},
				ltfmNumber : {
					maxlength : defaultMaxLengErrMsg,
					minlength : defaultMinLengErrMsg,
					required : defaultNumberErrMsg
				},
				ltfmPrice : {
					minlength : defaultMinLengErrMsg,
					required : defaultPriceErrMsg
				},
				ghqmjNumber : {
					maxlength : defaultMaxLengErrMsg,
					minlength : defaultMinLengErrMsg,
					required : defaultNumberErrMsg
				},
				ghqmjPrice : {
					minlength : defaultMinLengErrMsg,
					required : defaultPriceErrMsg
				},
				dphNumber : {
					maxlength : defaultMaxLengErrMsg,
					minlength : defaultMinLengErrMsg,
					required : defaultNumberErrMsg
				},
				dphPrice : {
					minlength : defaultMinLengErrMsg,
					required : defaultPriceErrMsg
				},
				sldwNumber : {
					maxlength : defaultMaxLengErrMsg,
					minlength : defaultMinLengErrMsg,
					required : defaultNumberErrMsg
				},
				sldwPrice : {
					minlength : defaultMinLengErrMsg,
					required : defaultPriceErrMsg
				},
				qytzNumber : {
					maxlength : defaultMaxLengErrMsg,
					required : defaultNumberErrMsg
				},
				qytzPrice : {
					minlength : defaultMinLengErrMsg,
					required : defaultPriceErrMsg
				},
				dhyPrice : {
					minlength : defaultMinLengErrMsg,
					required : defaultPriceErrMsg
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

		/*
		 * $('.login-form input').keypress(function(e) { if (e.which == 13) { if
		 * ($('.login-form').validate().form()) { $('.login-form').submit(); }
		 * return false; } });
		 */
	}

	var switchItem = function() {
		$("input.item").change(function() {
			$("#total-input").val(0);
			var div = $(this).parent().next('div.switch-item');
			if ($(this).is(':checked')) {
				$(div).css('display', 'block');
			} else {
				$(div).css('display', 'none');
			}
		});

		$("input.input_").change(function() {
			$("#total-input").val(0);
		});
	}

	function setErrorTips(hasErr, msg) {
		var div = $("#error-tips-div");
		if (hasErr) {
			$(div).find("strong.error").text(msg);
			$(div).css("display", "block");
			$("#total-input").val(0);
		} else {
			$(div).css("display", "none");
		}
	}

	function fixPoint(n) {
		return Math.floor(n * 100) / 100;
	}

	function getTotalByItemName(name) {
		if (!$("#ch-" + name).is(":checked")) {
			return 0;
		}

		var itemPrice = parseFloat($(":input[name='" + name + "Price']").val());
		var itemNumber = parseInt($(":input[name='" + name + "Number']").val());

		return fixPoint(itemPrice * itemNumber);
	}

	function calculateTotal() {
		var ltaz = getTotalByItemName('ltaz');
		var qyhhwjc = getTotalByItemName('qyhhwjc');
		var qytz = getTotalByItemName('qytz');
		var cdq = getTotalByItemName('cdq');

		var ltxb = getTotalByItemName('ltxb');
		var xlw = getTotalByItemName('xlw');
		var ltfm = getTotalByItemName('ltfm');
		var lttw = getTotalByItemName('lttw');

		var ghqmj = getTotalByItemName('ghqmj');
		var dph = getTotalByItemName('dph');
		var sldw = getTotalByItemName('sldw');
		var dhy = 0;

		if ($("#ch-dhy").is(":checked")) {
			dhy = fixPoint(parseFloat($(":input[name='dhyPrice']").val()) * 1);
		}
		// var totalPrice = ltaz + ltxb + lttw + qyhhwjc + lwtw + qytz + dhy;
		var totalPrice = ltaz + qyhhwjc + qytz + cdq + ltxb + xlw + ltfm + lttw + ghqmj + dph + sldw + dhy;
		$("#total-input").val(totalPrice);
		return totalPrice;
	}

	var initCalcTotalBtnEvent = function() {
		$("#calculate").click(function() {
			if ($("input.item:checked").length == 0) {
				setErrorTips(true, "请至少选择一项服务");
				return false;
			}
			setErrorTips(false);
			if (!$(formId).validate().form()) {
				setErrorTips(true, "请先核对你的输入");
				return false;
			}
			setErrorTips(false);

			var totalPrice = calculateTotal();
			if (totalPrice <= 0) {
				setErrorTips(true, "金额不能为零");
				return false;
			}
			setErrorTips(false);

			return false;
		});
	}

	function startLoading() {
		$loadingEl.css('display', "block");
	}

	function stopLoading() {
		$loadingEl.css('display', "none");
	}

	var submitBtnEvent = function() {
		$("#submit_btn").click(function() {
			if (!$("#total-input").val() || 0 == $("#total-input").val()) {
				setErrorTips(true, "请先确认服务金额");
				return false;
			}

			$(formId).submit();
			return false;
		});
	}

	return {
		init : function() {
			formValidation();
			switchItem();
			initCalcTotalBtnEvent();
			submitBtnEvent();
		}
	};

}();

$(document).ready(function() {
	RepairPageFunc.init();
});