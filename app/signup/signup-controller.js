(function(){
    angular.module("TimeWaste").controller("SignUpController", ["$scope", "$state", "$http","$log", function($scope, $state, $http, $log){

        console.log("hello world !")
        $scope.createUser = function(){
            $log.debug($scope.newUser)
            $http.post("api/user/signup",$scope.newUser).success(function(res){
                console.log(res)
            }).error(function(error){
                console.log(error)
            })
        }

    }])
}());
