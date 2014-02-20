angular.module('menuItem', [])
.directive('menuItem', function() {
    return {
        restrict: 'C',
        transclude: true,
        template: '<div class="menu-item-inner" ng-transclude></div><div class="underline-base"></div><div class="underline-overlay"></div>',
        scope: {underline: '@'},
        link: function(scope, element, attrs) {
        	var $overlay = $(element.find('.underline-overlay')[0])
        	.css('background-color', scope.underline);
        }
    };
});
/*
USAGE
<some-element class="menu-item" underline="some color">Some text</some-element>
*/