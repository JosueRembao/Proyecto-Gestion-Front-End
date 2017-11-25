(function() {
  "use strict";
  angular
    .module("data")
    .service("ProductDataService", ProductDataService)
    .constant("ApiBasePath", "http://0.0.0.0:9000/api");

  ProductDataService.$inject = ["$http", "ApiBasePath"];
  function ProductDataService($http, ApiBasePath) {
    let service = this;

    //this method should return a promise which is a result of suing $http service
    service.getAllProducts = () => {
      //obtener todas los productos
      return $http({
        method: "GET",
        url: ApiBasePath + "/products"
      })
        .then(result => {
          console.log(result.data);
          return result.data;
        })
        .catch(error => console.log(error));
    };

    /*service.getItemsForCategory = categoryShortName => {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params:{ category: categoryShortName}
      })
        .then(result => {
          console.log(result.data);
          return result.data;
        })
        .catch(error => console.log(error));
    };*/
  }
})();
