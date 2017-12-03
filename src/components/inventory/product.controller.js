(function () {
	"use strict";

	angular
		.module("main")
		.controller("ProductController", ProductController)

	ProductController.$inject = [ "product", "ProductDataService", "$state"];

	function ProductController(product, ProductDataService, $state) {
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

		productCtrl.eliminar = () => {
			ProductDataService.deleteProduct(id);
			// $state.go('inventario.productos', {});
			$state.reload();
			$state.transitionTo('inventario.productos', null, {reload: true, notify:true});
		}

	}

}());

