$(document).ready(function() {
	var $footer = $('#main-footer'),
		$push = $('#push'),
		$wrapper = $('#wrapper');

	var setSize = function() {
		var height = $footer.height();
		$push.height(height);
		$wrapper.css('margin-bottom', -height);
	}
	setSize();
	$(window).resize(setSize);
});