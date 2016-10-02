(function() {
    'use strict';

    angular
        .module('app.code')
         .config(configFunction);

    configFunction.$inject = ['$routeProvider', 'STATIC_URL'];


    function configFunction($routeProvider, STATIC_URL) {
        $routeProvider
        .when('/', {
            templateUrl: STATIC_URL + '/code/code.html',
            controller: 'codeController',
            
        });

    }


})();
