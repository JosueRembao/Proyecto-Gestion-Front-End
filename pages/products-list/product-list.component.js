'use strict';

angular.module('productList', [])
    .component('productList', {
        templateUrl: 'pages/products-list/product-list.html',
        controller: function ProductListController() {
            this.products = [{
                    Name: "Producto1",
                    Valor: 500
                },
                {
                    Name: "Producto2",
                    Valor: 600
                }
            ];
        }
    });