'use strict';

angular.module('productList', [])
  .component('productList', {
    templateUrl: 'pages/products-list/product-list.html',
    controller: "ProductListController as productList",
  });