(function() {
    'use strict';

    angular
        .module('app.code')
        .controller("codeController",function($scope,codeFactory){
            // var vm=this;
        
            codeFactory.getCodeList().success(function (data) {
                    $scope.codes = data.websites;
                });
        });            


})();
