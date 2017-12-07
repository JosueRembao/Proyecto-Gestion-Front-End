(function() {
	"use strict";
	angular
		.module("data")
		.service("RegisterDataService", RegisterDataService);

	RegisterDataService.$inject = ["$http", "ApiBasePath"];

	function RegisterDataService($http, ApiBasePath) {
		let service = this;
		let url = `${ApiBasePath}register`;

		//this method should return a promise which is a result of suing $http service
		service.getRegisters = () => {
			return $http({
				method: "GET",
				url
			})
				.then(result => {
					return result.data;
				})
				.catch(error => console.log(error));
		};


		service.updateRegister = (id, isActive) => {
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
					isActive: isActive,
				}
			})
				.then(result => {
					if (result.status === 200){
						alert("Se modifico caja con exito");
					}
					console.log(result.data);
					return result.status //? "Se agrego producto con exito" : "Error";
				})
				.catch(error => {
					console.log(error);
					alert(error.statusText + ' '+ error.data.message);
				});
		};
		
		service.addRegister = (isActive, montoInicial) => {
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
					isActive: isActive,
					montoInicial: montoInicial,
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
