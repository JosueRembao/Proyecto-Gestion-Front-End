(function () {
  "use strict";
  angular.module("main").config(RoutesConfig);

  RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/sales");

    $urlRouterProvider.when("/inventario/", "/inventario/dashboard");
    $urlRouterProvider.when("/inventario", "/inventario/dashboard");

    $stateProvider
      .state("inventario", {
        url: '/inventario',
        abstract: true,
        templateUrl: "src/components/inventory/inventory.html",
      })
      .state("inventario.dashboard", {
        url: '/dashboard',
        templateUrl: '/src/components/inventory/inventory.dashboard.html'
      })
      .state("inventario.productos", {
        url: '/productos',
        templateUrl: '/src/components/inventory/inventory.products.html',
        controller: "ProductListController as productList",
        resolve: {
          products: [
            "ProductDataService",
            function(ProductDataService) {
              console.log(ProductDataService.getAllProducts());
              return ProductDataService.getAllProducts();
            }
          ]
        }
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
      .state("sales", {
        url: '/sales',
        templateUrl: "src/components/sales/sales.html",
      })
      .state("openRegister", {
        url: '/open-register',
        templateUrl: "src/components/register/register.form.html",
      })
  }
})();

