import angular from 'angular';
import './main.css';
import names from './js/data';

angular.module('mySwitch', [])
    .controller('switchCtrl', function ($scope) {
        $scope.names = names;

    });