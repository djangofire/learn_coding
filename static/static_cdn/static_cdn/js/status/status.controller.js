
(function() {
    'use strict';

    angular
        .module('app.status')
        .controller("statusController",function($scope,$http){
			// var vm=this;
			$http.get('status.json')
			.success(function(response){
				alert(response.status_result);
				$scope.status_list=response.status_result;

			});
		})	

})();
