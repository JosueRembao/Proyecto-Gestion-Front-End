(function () {
	"use strict";
	angular.module("main")
		.config(RoutesConfig)
		.run(function ($rootScope, $state, $stateParams) {
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
		})
		.config(function ($provide) {
			$provide.decorator('$state', function ($delegate, $stateParams) {
				$delegate.forceReload = function () {
					return $delegate.go($delegate.current, $stateParams, {
						reload: true,
						inherit: false,
						notify: true
					});
				};
				return $delegate;
			});
		});

	RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

	function RoutesConfig($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/sales");

		$urlRouterProvider.when("/inventario/", "/inventario/dashboard");
		$urlRouterProvider.when("/inventario", "/inventario/dashboard");
		$urlRouterProvider.when("/sales", '/sales/register');
		$urlRouterProvider.when("/sales/", '/sales/register');

		$stateProvider
			.state("inventario", {
				url: '/inventario',
				abstract: true,
				templateUrl: "src/components/inventory/inventory.html",
				// controller: "ProductListController as productList",
				// resolve: {
				// 	product: () => {
				// 		console.log('resolviendo porducto en padre');
				// 		return {};
				// 	},
				// 	products: () => {
				// 		console.log('resolviendo porductos en padre');
				// 		return [];
				// 	}
				// }
			})
			.state("inventario.dashboard", {
				url: '/dashboard',
				templateUrl: 'src/components/inventory/inventory.dashboard.html',
			})
			.state("inventario.productos", {
				url: '/productos',
				templateUrl: 'src/components/inventory/inventory.products.html',
				controller: "ProductListController as productList",
				resolve: {
					products: [
						"ProductDataService", (ProductDataService) => {
							console.log('resolviendo porductos en inventario.productos');
							return ProductDataService.getAllProducts();
						}
					],
					// product:  () =>{
					// 	return null;
					// }
				}
			})
			.state("inventario.producto", {
			url: '/producto/:productId',
			templateUrl: 'src/components/inventory/inventory.product.html',
			params: {id: null},
			resolve: {
				product: ['$stateParams', 'ProductDataService', function ($stateParams, ProductDataService) {
					console.log('resolviendo inventario.producto')
					return ProductDataService.getProduct($stateParams.productId);
				}]
			},
			controller: "ProductController as productCtrl"

		})
			.state("inventario.addProducts", {
				url: '/add-productos',
				templateUrl: 'src/components/inventory/inventory.add.product.html',
			}).state("inventario.categorias", {
			url: '/categories',
			templateUrl: 'src/components/categories/categories.html'
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
			}).state('sales.register', {
			url: '/register',
			templateUrl: 'src/components/register/register.html'
		})
			.state("sales.openRegister", {
				url: '/open-register',
				templateUrl: "src/components/register/register.form.html",
			})
	}
})();

