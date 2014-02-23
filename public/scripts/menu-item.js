angular.module('menuItem', [])
.directive('menuItem', function() {
	return {
		restrict: 'C',
		transclude: true,
		template: '<div class="menu-item-inner" ng-transclude></div><div class="underline-base"></div><div class="underline-overlay"></div>',
		scope: {id: '@'},
		link: function(scope, element, attrs) {
			var elements = element.find('div');
			$(elements[2]).attr('id', scope.id);

			var $base = $(elements[1]);
			element.mouseover(function() {
				$base.addClass('underline-base-hover');
			})
			.mouseout(function() {
				$base.removeClass('underline-base-hover');
			});
		}
	};
});
/*
USAGE
<some-element class="menu-item" data-id="some id for the color">Some text</some-element>
*/