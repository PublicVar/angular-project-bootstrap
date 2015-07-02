(function () {

    //Set all routes at the same place
    angular.module('publicvar').constant('APP_ROUTES',{
        homepage: '/',
    });
    
    angular.module('publicvar').config(['$routeProvider','APP_ROUTES', function ($routeProvider, APP_ROUTES) {

        $routeProvider
                .when(APP_ROUTES.homepage, {
                    templateUrl:  'partials/home.html',
                    controller: 'HomeController'
        })
;
    }]);

})();