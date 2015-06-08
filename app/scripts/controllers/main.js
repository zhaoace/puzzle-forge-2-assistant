'use strict';

/**
 * @ngdoc function
 * @name puzzleForge2AssistantApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the puzzleForge2AssistantApp
 */
angular.module('puzzleForge2AssistantApp')
  .controller('MainCtrl', function ($scope, Weapons) {
    $scope.weapons = Weapons.all();

  });
