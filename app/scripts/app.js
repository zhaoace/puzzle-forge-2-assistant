'use strict';

/**
 * @ngdoc overview
 * @name puzzleForge2AssistantApp
 * @description
 * # puzzleForge2AssistantApp
 *
 * Main module of the application.
 */
angular
  .module('puzzleForge2AssistantApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
