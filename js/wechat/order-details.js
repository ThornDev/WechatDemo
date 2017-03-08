var OrderDetailFunc = function() {

	function setErrorTips(hasErr, msg) {
		if (hasErr) {
			$("#error-tips-div").find("strong").text(msg);
			$("#error-tips-div").css('display', 'block');
		} else {
			$("#error-tips-div").css('display', 'none');
		}
	}

	var submitBtnEvent = function() {
		$("#sub_btn").click(
				function() {
					var fwtd = $(":input[name='fwtd']:checked").val();
					if (!fwtd || fwtd == "") {
						setErrorTips(true, "请评价服务商服务态度");
						return;
					}

					var zyd = $(":input[name='zyd']:checked").val();
					if (!zyd || zyd == "") {
						setErrorTips(true, "请评价服务商的专业度");
						return;
					}

					var pssd = $(":input[name='pssd']:checked").val();
					if (!pssd || pssd == "") {
						setErrorTips(true, "请评价物流配送速度");
						return;
					}

					var ztmyd = $(":input[name='ztmyd']:checked").val();
					if (!ztmyd || ztmyd == "") {
						setErrorTips(true, "请评价总体满意度");
						return;
					}

					setErrorTips(false);

					var url = "user/orders/"
							+ $(document.body).attr('data-o-id') + "/evaluate/"
							+ $(document.body).attr('data-op-id');

					var params = {
						fwtd : fwtd,
						zyd : zyd,
						pssd : pssd,
						ztmyd : ztmyd,
						remarks : $("#remarks").val()
					};

					$.post(url, params, function(data) {
						if (data.success) {
							$("#error-tips-div").find("strong").text("评价成功");
							$("#error-tips-div").removeClass('alert-danger')
									.addClass('alert-success').css('display',
											'block');
							$("#sub_btn").remove();
						} else {
							setErrorTips(true, data.msg);
						}
					}, "JSON");
				});
	}

	return {
		init : function() {
			submitBtnEvent();
		}
	};

}();

$(document).ready(function() {
	OrderDetailFunc.init();
});