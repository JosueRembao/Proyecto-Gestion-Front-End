(function() {
  "use strict";
  angular
    .module("data")
    .service("ProductDataService", ProductDataService)
    .constant("ApiBasePath", "http://127.0.0.1:8080/api/products");

  ProductDataService.$inject = ["$http", "ApiBasePath"];

  function ProductDataService($http, ApiBasePath) {
    let service = this;

    //this method should return a promise which is a result of suing $http service
    service.getAllProducts = () => {
      //obtener todas los productos
      return $http({
        method: "GET",
        url: ApiBasePath
      })
        .then(result => {
          return result.data;
        })
        .catch(error => console.log(error));
    };

    service.addProduct = (nombre, cantidad, precioVenta, precioCompra) => {
      return $http({
        method: "POST",
        url: ApiBasePath,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: {
          nombre: nombre,
          cantidad: cantidad,
          precioVenta: precioVenta,
          precioCompra: precioCompra
        }
      })
        .then(result => {
          console.log(result.data);
          return result.data ? "Se agrego producto con exito" : "Error";
        })
        .catch(error => console.log(error));
    };
  }
})();
