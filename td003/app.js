var app = angular.module("app", []);

app.controller("operations", function($scope) {



	$scope.submit = function() {
			var nmbr1 = $scope.nombre1;
			var nmbr2 = $scope.nombre2;
			var operator = $scope.operateur;
			
			var maths = {
						'+' : function(x, y) {return x + y},
						'-' : function(x, y) {return x - y},
						'*' : function(x, y) {return x * y},
						'/' : function(x, y) {return x / y}
			};

			$scope.resu = nmbr1 + operator + nmbr2 + " font " + (maths[operator](nmbr1, nmbr2));
	}

})