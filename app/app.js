/**
 * Created by terryshek on 2/11/15.
 */
(function(){
    angular.module("TimeWaste", ['ui.router', 'ngFileUpload'])
        .config(function($stateProvider){
            $stateProvider.state('signUp',{
                url:"/signUp",
                templateUrl:"app/signup/signup.html",
                controller:"SignUpController"
            }).state('editProfile',{
                url:"/edit-profile",
                templateUrl:"app/profile/edit-profile-view.html",
                controller:"EditProfileControlller"
            })
        })

}());
