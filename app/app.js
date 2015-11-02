/**
 * Created by terryshek on 2/11/15.
 */
(function(){
    angular.module("TimeWaste", ['ui.router'])
        .config(function($stateProvider){
            $stateProvider.state('signUp',{
                url:"/signUp",
                templateUrl:"app/signup/signup.html",
                controller:"SignUpController"
            })
        })

}());