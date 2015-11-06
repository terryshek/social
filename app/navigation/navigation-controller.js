/**
 * Created by terryshek on 6/11/15.
 */
(function(){
    angular.module('TimeWaste')
        .controller("NavigatioinController",['$scope','$http','$state', function($scope, $http, $state){
            if(localStorage['User-data']){
                $scope.loggedIn =true;
            }else{
                $scope.loggedIn =false;
            }
            $scope.logUserin=function(){
                console.log($scope.login)
                $http.post("api/user/login", $scope.login).success(function(res){
                    localStorage.setItem("User-data",JSON.stringify(res));
                    $scope.loggedIn =true;
                }).error(function(error){
                    console.error(error)
                })
            }
        }])

}());
