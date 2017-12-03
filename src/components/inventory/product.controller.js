(function () {
	"use strict";

	angular
		.module("main")
		.controller("ProductController", ProductController)

	ProductController.$inject = [ "product", "ProductDataService"];

	function ProductController(product, ProductDataService) {
		let productCtrl = this;
		productCtrl.test = 'test✌️';
		productCtrl.product = product;

		//Variables para el formulario de agregar productos
		productCtrl.nombre = product.nombre;
		productCtrl.cantidad = product.cantidad;
		productCtrl.precioCompra = product.precioCompra;
		productCtrl.precioVenta = product.precioVenta;
		const id = product.id;

		productCtrl.actualizar = () => {
			ProductDataService.updateProduct(id, this.nombre, this.cantidad, this.precioVenta, this.precioCompra);
		}

	}

}());

