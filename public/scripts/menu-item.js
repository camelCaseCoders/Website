angular.module('menuItem', [])
.directive('menuItem', function() {
	return {
		restrict: 'C',
		transclude: true,
		template: '<div class="menu-item-inner" ng-transclude></div><div class="underline-base"></div><div class="underline-overlay"></div>',
		scope: {underline: '@'},
		link: function(scope, element, attrs) {
			var $elements = element.find('div');
			var $inner = $($elements[0]),
				$base = $($elements[1]),
				$overlay = $($elements[2])
					.css('background-color', scope.underline);

			var width = $inner.outerWidth();
			element.mouseover(function() {
				$base.addClass('underline-base-hover');
				$base.width(0);
			})
			.mouseout(function() {
				$base.removeClass('underline-base-hover');
				$base.width(width);
			});
			$(window).resize(function() {
				width = $inner.outerWidth();
				$base.width($inner.outerWidth());
			});
		}
	};
});
/*
USAGE
<some-element class="menu-item" underline="some color">Some text</some-element>
*/