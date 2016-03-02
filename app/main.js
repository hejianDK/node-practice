import angular from 'angular';
import './main.css';

angular.module('mySwitch', [])
    .controller('switchCtrl', function ($scope) {
        $scope.names = [{name: 'n1...', status: 'Powered on'}, {name: 'n2...', status: 'Powered off'},
            {name: 'n3...', status: 'Powered on'}, {name: 'n4...', status: 'suspended'}];

    });