var OrderStatistics = function() {

	var statisticsOption = {
		title : {
			text : '服务项消费比例统计',
			x : 'center'
		},
		tooltip : {
			trigger : 'item',
			formatter : "{a} <br/>{b} : {c} ({d}%)"
		},
		legend : {
			x : 'center',
			y : 'bottom',
			data : [ '轮胎调位', '轮胎安装', '轮胎修补', '轮位调位', '气压调整', '气压和花纹检测', '打黄油' ]
		},
		toolbox : {
			show : true,
			feature : {
				magicType : {
					show : true,
					type : [ 'pie', 'funnel' ]
				},
				restore : {
					show : true
				},
				saveAsImage : {
					show : true
				}
			}
		},
		calculable : true,
		series : [ {
			name : '半径模式',
			type : 'pie',
			radius : [ 20, 110 ],
			center : [ '25%', 200 ],
			roseType : 'radius',
			width : '40%', // for funnel
			max : 40, // for funnel
			itemStyle : {
				normal : {
					label : {
						show : true
					},
					labelLine : {
						show : true
					}
				},
				emphasis : {
					label : {
						show : true
					},
					labelLine : {
						show : true
					}
				}
			},
			data : [ {
				value : 0,
				name : '轮胎调位'
			}, {
				value : 0,
				name : '轮胎安装'
			}, {
				value : 0,
				name : '轮胎修补'
			}, {
				value : 0,
				name : '轮位调位'
			}, {
				value : 0,
				name : '气压调整'
			}, {
				value : 0,
				name : '气压和花纹检测'
			}, {
				value : 0,
				name : '打黄油'
			} ]
		}, {
			name : '面积模式',
			type : 'pie',
			radius : [ 30, 110 ],
			center : [ '75%', 200 ],
			roseType : 'area',
			x : '50%', // for funnel
			max : 40, // for funnel
			sort : 'ascending', // for funnel
			data : [ {
				value : 0,
				name : '轮胎调位'
			}, {
				value : 0,
				name : '轮胎安装'
			}, {
				value : 0,
				name : '轮胎修补'
			}, {
				value : 0,
				name : '轮位调位'
			}, {
				value : 0,
				name : '气压调整'
			}, {
				value : 0,
				name : '气压和花纹检测'
			}, {
				value : 0,
				name : '打黄油'
			} ]
		} ]
	};

	var statisticsChartPie = echarts.init(document.getElementById('order-statistics-pie'));

	var initStatisticsChart = function() {
		statisticsChartPie.setOption(statisticsOption, true);
		$.get("admin/charts/service/proportion", {}, function(data) {
			if (data.success) {
				statisticsOption.series[0].data = data.data;
				statisticsOption.series[1].data = data.data;
				statisticsChartPie.setOption(statisticsOption, true);
			} else {
				alert("服务项比例分析图加载出错了V_V");
			}
		}, "JSON");
	}

	return {
		init : function() {
			initStatisticsChart();
		}
	};
}();

jQuery(document).ready(function() {
	OrderStatistics.init();
});