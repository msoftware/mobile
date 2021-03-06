/**
 * Minds::mobile
 * The main app file
 *
 * @author Mark Harding
 */

define(['angular', 'uiRouter', 'imgcache', 'window', 'config', 'templates-compiled', 'filters/filters', 'services/services', 'directives/directives', 'controllers/controllers', 'ionicAngular'],
	function(angular, uiRouter, imgcache, window) {
	'use strict';

	var app = angular.module('app', ['ionic', 'app.templates', 'app.controllers', 'app.filters', 'app.services', 'app.directives', 'app.config', 'ui.router']);

	app.run(function() {
		console.log('angular is ready');
		/*try {
			imgcache.options.usePersistentCache = true;
			imgcache.init(function() {
				console.log('cache created successfully!');
			}, function() {
				console.log('check the log for errors');
			});

		} catch (e) {
		}*/
	});

	return app;

});
