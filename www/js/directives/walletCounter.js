/*global define*/

define(['angular'], function(angular) {
    "use strict";

    var directive = function($rootScope, $timeout, Client, wallet) {
		return {
			restrict: 'E',
			template: "{{$root.points}}",
			scope: true,
			link: function(scope, element, attrs) {
				//scope.count = $rootScope.points;
				//timeout, because we
				wallet.getCount();
			}
		};
    };

    directive.$inject = ['$rootScope', '$timeout', 'Client', 'wallet'];
    return directive;
});
