/*
 * Controllers
 */
myApp.controller('mainController',['$scope','$log', function($scope,$log){
    
}]);

myApp.controller('charactersController',['$scope','$log', '$location','characterService', function($scope,$log,$location,characterService){
    
    $scope.character=characterService.character;
    
    $scope.$watch('character',function(){
        characterService.character = $scope.character;            
    });
    
    $scope.submit = function(){
        
        if($scope.character===''){
            $scope.formMessage = 'Cannot be empty'
            return;
        }
        
        $location.path("/charactersResult");
    }                               
    
}]);

myApp.controller('charactersResultController',['$scope','$log','$routeParams','characterService','MarvelAPI','$uibModal', function($scope,$log,$routeParams, characterService, MarvelAPI, $uibModal){
    
    $scope.character = characterService.character;
    
    $scope.limit = $routeParams.limit || '3';         // set default limit 3
    $scope.order = $routeParams.order || 'name';    // set default order by name
    
    // get matched characters through Marvel API service
    MarvelAPI.getChar($scope.character, $scope.limit, $scope.order)
        .then(function (response) {
        if (response) {
            $scope.characters = response;
            $log.log(response);
            $scope.searchChar = 'success';
        }
    },function (response) {
        $scope.errorMsg = response.message;
        $scope.searchChar = 'fail';
    });
    
    // popup modal window
    $scope.popup = function(char){
        
        // use full size image here
        $scope.url = char.thumbnail.path + '.' + char.thumbnail.extension;
        
        var uibModalInstance = $uibModal.open({
            templateUrl: 'pages/popup.html',
            scope: $scope
        });
    }
}]);
