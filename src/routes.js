(function() {
    "use strict";
    angular.module("main").config(RoutesConfig);

    RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("products", {
                url: '/products',
                template: "<product-list></product-list>"
            })
            .state("providers", {
                url: '/providers',
                template: "<provider-list></provider-list>"
            })
            .state("reports", {
                url: '/reports',
                template: "<reports></reports>"
            })
            .state("returns", {
                url: '/returns',
                template: "<returns></returns>"
            })
            .state("box", {
                url: '/box',
                template: "<h1>Caja</h1>"
            })

    }
})();