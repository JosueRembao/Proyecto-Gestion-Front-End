(function () {
	"use strict";
	angular.module("main")
		.config(RoutesConfig)
		.run(function ($rootScope, $state) {
			$rootScope.$state = $state;
		});

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
				controller: "ProductListController as productList",
				resolve: {
					products: [
						"ProductDataService", (ProductDataService) => {
							return ProductDataService.getAllProducts();
						}
					]
				}
			})
			.state("inventario.dashboard", {
				url: '/dashboard',
				templateUrl: 'src/components/inventory/inventory.dashboard.html'
			})
			.state("inventario.productos", {
				url: '/productos',
				templateUrl: 'src/components/inventory/inventory.products.html',
			})
			.state("inventario.addProducts", {
				url: '/add-productos',
				templateUrl: 'src/components/inventory/inventory.add.product.html',
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

