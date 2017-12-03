(function() {
  "use strict";
  angular
    .module("data")
    .service("ProductDataService", ProductDataService)
    .constant("ApiBasePath", "http://127.0.0.1:8080/api/");

  ProductDataService.$inject = ["$http", "ApiBasePath"];

  function ProductDataService($http, ApiBasePath) {
    let service = this;
		let url= ApiBasePath +"/products";
		
    //this method should return a promise which is a result of suing $http service
    service.getAllProducts = () => {
      //obtener todas los productos
      return $http({
        method: "GET",
        url
      })
        .then(result => {
          return result.data;
        })
        .catch(error => console.log(error));
    };

		service.getProduct = (id) => {
			//obtener todas los productos
			return $http({
				method: "GET",
				url: `${url}/${id}`
			})
				.then(result => {
					console.log(result.data)
					return result.data;
				})
				.catch(error => console.log(error));
		};

		service.updateProduct = (id, nombre, cantidad, precioVenta, precioCompra) => {
			return $http({
				method: "PUT",
				url: `${url}/${id}`,
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				transformRequest: function(obj) {
					var str = [];
					for(var p in obj)
						str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
					return str.join("&");
				},
				data: {
					nombre: nombre,
					cantidad: cantidad,
					precioVenta: precioVenta,
					precioCompra: precioCompra
				}
			})
				.then(result => {
					if (result.status === 200){
						alert("Se modifico producto con exito");
					}
					console.log(result.data);
					return result.status //? "Se agrego producto con exito" : "Error";
				})
				.catch(error => {
					console.log(error);
					alert(error.statusText + ' '+ error.data.message);
				});
		};
		
    service.addProduct = (nombre, cantidad, precioVenta, precioCompra) => {
      return $http({
        method: "POST",
        url,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },			
				transformRequest: function(obj) {
					var str = [];
					for(var p in obj)
						str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
					return str.join("&");
				},
        data: {
          nombre: nombre,
          cantidad: cantidad,
          precioVenta: precioVenta,
          precioCompra: precioCompra
        }
      })
        .then(result => {
					if (result.status === 201){
						alert("Se agrego producto con exito");
					}
          return result.status //? "Se agrego producto con exito" : "Error";
        })
        .catch(error => {
        	console.log(error);
        	alert(error.statusText + ' '+ error.data.message);
        });
    };
  }
})();
