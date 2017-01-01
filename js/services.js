/*
 * Services
 */
myApp.service('characterService',function(){
    this.character = "";
});

/*
 * Factories
 */
myApp.factory('MarvelAPI', ['$http', '$q', function($http, $q) {
    
    var apiUrl = 'http://gateway.marvel.com/v1/public/';
    
    // hint: to pass Marvel autherization, domains requests come from need to be set in Marvel developer account
    // replace your public API key here
    var apiKey = '00ec0dc199081f9a0009386e969d78b0';

    var getChar = function(character,limit, order) {
        var def = $q.defer();
        
        var url = apiUrl + 'characters?limit=' + limit + '&nameStartsWith=' + character + '&orderBy=' + order + '&apikey=' + apiKey;
        
        $http.get(url).success(function (response) {
            if (response.data.results.length > 0) {
                def.resolve({
                    characters: response.data.results
                });
            } else {
                def.reject({
                    message: 'Unable to find that character'
                });
            }
        }).error(function () {
            def.reject({
                message: 'API error'
            });
        });

      return def.promise;
    };

    return { getChar: getChar };
}]);