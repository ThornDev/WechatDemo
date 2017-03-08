var OrderList = function() {
	$table = $("#sp-all");
	var loadDataUrl = "admin/service-providers/list";
	var updateUrl = "admin/service-provider";
	var cols = [ {
		checkbox : true
	}, {
		field : "id",
		title : "ID",
		sortable : true
	}, {
		field : "name",
		title : "姓名",
		editable : {
			type : 'text',
			title : '用户名',
			validate : function(v) {
				if (!v)
					return '姓名不能为空';

			}
		}
	}, {
		field : "nickname",
		title : "昵称"
	}, {
		field : "phone",
		title : "手机号",
		editable : {
			type : 'text',
			title : '手机号',
			validate : function(v) {
				if (!v)
					return '手机号不能为空';

			}
		}
	}, {
		title : "主车牌号",
		field : "zhuCarNo",
		editable : {
			type : 'text',
			title : '主车牌号',
			validate : function(v) {
				if (!isCarNo(v))
					return '请输入合法的主车牌号';

			}
		}
	}, {
		field : "desc",
		title : "备注"
	}, {
		field : "createTime",
		title : "注册日期",
		sortable : true
	}, {
		field : 'operate',
		title : '操作',
		align : 'center',
		events : {
			'click .rm' : function(e, value, row, index) {
				swal({
					title : "Are you sure?",
					text : "You will not be able to recover this operation!",
					type : "warning",
					showCancelButton : true,
					confirmButtonColor : "#DD6B55",
					confirmButtonText : "Yes, delete it!",
					closeOnConfirm : false
				}, function() {
					swal("Deleted!", "has been deleted.", "success");
					$table.bootstrapTable('remove', {
						field : 'id',
						values : [ row.id ]
					});
				});
			}
		},
		formatter : operateFormatter
	} ];

	function isCarNo(str) {
		var pattern = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[警京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{0,1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
		return pattern.test(str);
	}
	function operateFormatter(value, row, index) {
		var detailsUrl = "admin/service-providers/" + row.id;
		return [ '<a class="btn btn-default" href="' + detailsUrl + '">', '<i class="fa fa-eye"></i>', '详情</a>  ', '<a class="btn btn-danger rm" title="删除">', '<i class="fa fa-remove">删除</i>', '</a>' ]
				.join('');
	}

	var initTable = function() {
		$table.bootstrapTable({
			url : loadDataUrl, // 请求后台的URL（*）
			method : 'get', // 请求方式（*）
			toolbar : '#toolbar', // 工具按钮用哪个容器
			striped : true, // 是否显示行间隔色
			cache : false, // 是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
			pagination : true, // 是否显示分页（*）
			sortable : true, // 是否启用排序
			sortOrder : "asc", // 排序方式
			queryParams : function(param) {
				return {
					limit : param.limit, // 页面大小
					offset : param.offset,
					sort : param.sort,
					order : param.order
				};
			},
			sidePagination : "server", // 分页方式：client客户端分页，server服务端分页（*）
			pageNumber : 1, // 初始化加载第一页，默认第一页
			pageSize : 15, // 每页的记录行数（*）
			pageList : [ 15, 20,25, 50 ], // 可供选择的每页的行数（*）
			search : false, // 是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
			strictSearch : true,
			showColumns : true, // 是否显示所有的列
			showRefresh : true, // 是否显示刷新按钮
			minimumCountColumns : 2, // 最少允许的列数
			clickToSelect : true, // 是否启用点击选中行
			// height : 500, // 行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
			uniqueId : "id", // 每一行的唯一标识，一般为主键列
			showToggle : true, // 是否显示详细视图和列表视图的切换按钮
			cardView : false, // 是否显示详细视图
			detailView : false, // 是否显示父子表
			columns : cols,
			onEditableSave : function(field, row, oldValue, $el) {
				$.post(updateUrl, row, function(data) {
					if (data.success) {
						notice("操作成功", "success");
					} else {
						notice(data.msg, "danger");
					}
				}, "JSON");
			}
		});
	}

	function notice(msg, msgType) {
		$.notify({
			icon : 'glyphicon glyphicon-warning-sign',
			title : '服务器通知',
			message : msg
		}, {
			element : '#sp-all',
			type : msgType || "success",
			delay : 3000
		});
	}

	return {
		init : function() {
			initTable();
		}
	};
}();

jQuery(document).ready(function() {
	OrderList.init();
});