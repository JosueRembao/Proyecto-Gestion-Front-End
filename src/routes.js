(function () {
  "use strict";
  angular.module("main").config(RoutesConfig);

  RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/sales");

    $stateProvider
      .state("products", {
        url: '/products',
        templateUrl: "../pages/products-list/product-list.html",
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
        templateUrl: "../pages/sales/sales.html"
      })
  }
})();

