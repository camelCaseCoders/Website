angular.module('menuItem', [])
.directive('menuItem', function() {
    return {
        restrict: 'C',
        transclude: true,
        template: '<div class="menu-item-inner" ng-transclude></div><div class="underline-base"></div><div class="underline-overlay"></div>',
        scope: {underline: '@'},
        link: function(scope, element, attrs) {
            var $elements = element.find('div');
            window.elements = $elements;
        	var $overlay = $($elements[2])
        	.css('background-color', scope.underline);

            var $base = $($elements[1]),
                width = element.width();
            element.mouseover(function() {
                // $base.animate({
                //     width: '0px'
                // }, 100);
                // $base.hide();
                $base.addClass('underline-base-hover');
                $base.width(0);
            })
            .mouseout(function() {
                // $base.animate({
                //     width: width
                // }, 200);
                $base.removeClass('underline-base-hover');
                $base.width(width);
            });
        }
    };
});
/*
USAGE
<some-element class="menu-item" underline="some color">Some text</some-element>
*/