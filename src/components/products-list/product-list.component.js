'use strict';

angular.module('productList', [])
  .component('productList', {
    templateUrl: 'pages/products-list/inventory.products.html',
    controller: "ProductListController as productList",
  });