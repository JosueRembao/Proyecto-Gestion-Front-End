
(function() {
  "use strict";
  angular.module("main").config(RoutesConfig);

  RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("home", {
        url: '/',
        templateUrl: "src/shared/test.html"
      })
  }
})();
