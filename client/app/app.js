'use strict';

angular.module('gTeamApp', ['gTeamApp.constants', 'ngCookies', 'ngResource', 'ngSanitize',
    'ui.router'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
