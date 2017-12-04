(function() {
    "use strict";
    angular.module("main")
        .config(RoutesConfig)
        .run(function($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        })
        .config(function($provide) {
            $provide.decorator('$state', function($delegate, $stateParams) {
                $delegate.forceReload = function() {
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
                            return ProductDataService.getAllProducts();
                        }
                    ]
                }
            })
            .state("inventario.producto", {
                url: '/producto/:productId',
                templateUrl: 'src/components/inventory/inventory.product.html',
                params: { id: null },
                controller: "ProductController as productCtrl",
                resolve: {
                    product: ['$stateParams', 'ProductDataService', function($stateParams, ProductDataService) {
                        return ProductDataService.getProduct($stateParams.productId);
                    }]
                }
            })
            .state("inventario.addProducts", {
                url: '/add-productos',
                templateUrl: 'src/components/inventory/inventory.add.product.html',
                controller: "ProductController as productCtrl",
                resolve: {
                    product: () => {
                        return null;
                    }
                }
            })
            .state("inventario.categorias", {
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
                // abstract: true
            })
            .state('sales.register', {
                url: '/register',
                templateUrl: 'src/components/register/register.html',
                resolve: {
                    registers: ['$stateParams', 'RegisterDataService', function($stateParams, RegisterDataService) {
                        return RegisterDataService.getRegisters();
                    }]
                },
                controller: function($scope, $transitions, registers) {
                        let registerMannagerCtrl = $scope;
                        registerMannagerCtrl.test = 'funciona'
                        registerMannagerCtrl.registers = registers;

                        $transitions.onStart({}, function(transition) {
                            let transitionName = transition.to().name;
                            let registerIsActive = registerMannagerCtrl.registers[0].isActive;
                            console.log('register is actuve? :' + registerIsActive);
                            console.log('name: ' + transitionName);

                            if (registerIsActive && transitionName === "sales.openRegister") {
                                console.log('deberia de cambiar')
                                return transition.router.stateService.target('sales.dashboard');
                            }
                            console.log(
                                "Successful Transition from " + transition.from().name +
                                " to " + transition.to().name
                            );
                        });
                    }
                    // controller: "RegisterMannagerController registerMannagerCtrl"
            })
            .state("sales.openRegister", {
                url: '/open-register',
                templateUrl: "src/components/register/register.form.html",
                controller: 'RegisterController as registerCtrl',
            })
            .state("sales.dashboard", {
                url: '/dashboard',
                templateUrl: 'src/components/sales/sales.dashboard.html',
                // controller: 'RegisterController as registerCtrl',
            });
    }
})();