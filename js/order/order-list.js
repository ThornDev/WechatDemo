var OrderList = function() {
	var tableSel = "#order-all";
	var loadDataUrl = "admin/orders/list";
	var tbl = undefined;
	var columns = [ {
		"data" : "id",
		"title" : "订单号",
		"defaultContent" : ""
	}, {
		"data" : "customerName",
		"title" : "客户姓名",
		"defaultContent" : ""
	}, {
		"data" : "location",
		"title" : "地理位置",
		"defaultContent" : ""
	}, {
		"data" : "totalPrice",
		"title" : "订单总额",
		"defaultContent" : "",
		"render" : function(data, type, full, meta) {
			return "￥" + data;
		}
	}, {
		"data" : "orderFlag",
		"title" : "订单状态",
		"render" : function(data, type, full, meta) {
			var text = "未知状态", cls = 'label-danger';
			if (data == 1) {
				text = "待处理";
				cls = 'danger';
			} else if (data == 2) {
				cls = 'success';
				text = '处理中';
			} else if (data == 4) {
				cls = 'default';
				text = '已完成';
			}
			var span = '<span class="label label-' + cls + '">' + text + '</span>';

			return span;

		}
	}, {
		"data" : "createTime",
		"title" : "下单时间",
		"defaultContent" : ""
	}, {
		"data" : "spName",
		"title" : "负责人",
		"defaultContent" : ""
	}, {
		"data" : "",
		"title" : "操作",
		"defaultContent" : "",
		"render" : function(data, type, full, meta) {
			var url = "admin/orders/" + full.id;
			var editBtn = "<a class='btn btn-default btn-sm' href='" + url + "'><i class='fa fa-eye'></i>&nbsp;详情</a>";
			return editBtn;

		}
	} ];

	var initTable = function() {

		tbl = $(tableSel).DataTable({
			language : {
				url : 'plugins/datatables/local/zh_cn.json'
			},
			// "lengthChange" : false,
			searching : false,
			"ordering" : false,
			"processing" : true,
			"serverSide" : true,
			"ajax" : {
				"url" : loadDataUrl,
				"type" : "GET",
				"error" : function() {
					alert("服务器未正常响应，请重试");
				}
			},
			"columns" : columns,
			"lengthMenu" : [ 5, 10, 15, 20,25 ],
			"pageLength" : 15,
			searchDelay : 500,
			//"sDom":'<"top"lf<"clear">>rt<"bottom"ip<"clear">>',//自定义布局sdom：l- 每行显示的记录数;f- 搜索框;t- 表格;i- 表格信息;p- 分页条;r- 加载时的进度条
//			"dom" : '<"toolbar">frtip',
			"dom" : 'rt<"bottom"iflp>',
			"scrollX" : true
		});
	}

	function doSearcher(params) {

		tbl.settings()[0].ajax.data = params || {
			orderFlag : $("#orderFlag").val(),
			cName : $("#cName").val(),
			cLocation : $("#cLocation").val(),
			spName : $("#spName").val()
		};
		tbl.ajax.reload();
	}

	var initSearchEvent = function() {
		$("#search-btn").click(function() {
			doSearcher();
			return false;
		});

		$("#search-reset-btn").click(function() {
			$("#orderFlag").val(-1);
			$("#cLocation").val("");
			$("#cName").val("");
			$("#spName").val("");
			doSearcher({
				orderFlag : -1
			});

			return false;
		});

		$("#orderFlag").change(function() {
			doSearcher();
		});
	}

	var setFlagIfRefererFromIndex = function() {
		var flag = $(document.body).attr('data-of');
		if (flag) {
			try {
				flag = parseInt(flag);
				doSearcher({
					orderFlag : flag
				});
				$("#orderFlag").val(flag);
			} catch (e) {
				// ignore
			}
		}
	}

	return {
		init : function() {
			initTable();
			initSearchEvent();
			setFlagIfRefererFromIndex();
		}
	};
}();

jQuery(document).ready(function() {
	OrderList.init();
});