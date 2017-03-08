var OrderStatus = function() {

	function setCount(data) {
		$("#o-newly").find("h3.count").text(data.newly);
		$("#o-processing").find("h3.count").text(data.processing);
		$("#o-done").find("h3.count").text(data.done);
		$("#o-all").find("h3.count").text(data.all);
	}

	var loadOrderStatistics = function() {
		$.get("admin/orders/statistic", {}, function(data) {
			if (data.success) {
				setCount(data);
			}
		}, "JSON");
	}

	return {
		init : function() {
			loadOrderStatistics();
		}
	};
}();

jQuery(document).ready(function() {
	OrderStatus.init();
});