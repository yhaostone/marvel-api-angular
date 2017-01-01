/*
 * Direcitves
 */
myApp.directive("characterRecord",function(){
    return{
        restrict: 'E',
        templateUrl: 'directives/characterRecord.html',
        replace:true,
        scope:{
            characterItem: "=",
            popup: "&"
        },
        link: function(){
            // do something after linking
            console.log('Linking...');
        }
    }
});
