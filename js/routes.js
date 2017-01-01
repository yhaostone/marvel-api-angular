/*
 * Routes
 */
myApp.config(function($routeProvider){
    
    $routeProvider
    
    .when('/',{
        templateUrl: 'pages/welcome.html',
        controller: 'mainController'
    })
    
    .when('/characters',{
        templateUrl: 'pages/characters.html',
        controller: 'charactersController'
    })
    
    .when('/charactersResult',{
        templateUrl: 'pages/charactersResult.html',
        controller: 'charactersResultController'
    })
    
    .when('/charactersResult/:limit/:order',{
        templateUrl: 'pages/charactersResult.html',
        controller: 'charactersResultController'
    })
    
    .when('/continue',{
        templateUrl: 'pages/continue.html',
    })
    
    .otherwise({
        redirectTo: '/continue'
    });
});