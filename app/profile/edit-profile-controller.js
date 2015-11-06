/**
 * Created by terryshek on 6/11/15.
 */
(function(){
    angular.module('TimeWaste')
        .controller("EditProfileControlller",['Upload','$scope', '$state', '$http', function(Upload, $scope, $state, $http){
            $scope.user = JSON.parse(localStorage["User-data"]) || undefined;

            $scope.$watch(function(){
                return $scope.file
            }, function(){
                $scope.upload($scope.file)
            })
            $scope.upload = function(file){
                if(file){
                    Upload.upload({
                        url:"api/profile/edit",
                        method:'POST',
                        data:{userId:$scope.user._id},
                        file:file
                    }).progress(function(evt){
                        console.log("firing")
                    }).success(function(res){

                    }).error(function(error){
                        console.log(error)
                    })
                }
            };
        }])
}());
