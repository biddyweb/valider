'use strict';

/**
 * @ngdoc overview
 * @name validerApp
 * @description
 * # validerApp
 *
 * Main module of the application.
 */
angular
  .module('validerApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
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
      .when('/sms', {
        templateUrl: 'views/sms.html',
        controller: 'SmsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).filter('escape', function () {
    return window.encodeURIComponent;
  });
