(function () {
  "use strict";

  angular
    .module("productList")
    .controller("ProductListController", ProductListController)

  ProductListController.$inject = [ "products"];

  function ProductListController(products) {
    let productList = this;
    productList.products = products;
  }


}());

