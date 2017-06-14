angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html",
                controller:'locationsCtrl'
            })
            .state('adventures',{
                url:'/adventures/',
                parent:'home',
                templateUrl:'../views/about-adventures.html'
            })
            .state('contact',{
                url:'/contact',
                parent:'home',
                templateUrl:'../views/contact.html'
            })
            .state('packages',{
                url:'/packages/:country',
                templateUrl:'../views/packages.html',
                controller:'packagesCtrl'
            })
            .state('booked',{
                url:'booked/:id',
                templateUrl:'../views/booked.html',
                controller:'bookedCtrl'
            })
            .state('locations',{
                url:'/locations',
                templateUrl:'../views/locations.html'
            });

        $urlRouterProvider
            .otherwise('/');
    });
