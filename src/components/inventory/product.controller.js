(function () {
	"use strict";

	angular
		.module("main")
		.controller("ProductController", ProductController)

	ProductController.$inject = ["product", "ProductDataService", "$state"];

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
			let promise = ProductDataService.deleteProduct(id);

			if (!promise) {
				console.log('no hay promesa')
				return
			}

			promise.then(function (result) {
					alert('success, keep/do the changes');
					$state.transitionTo('inventario.productos', null, {reload: true, notify:true});
				},
				function (error) {
					alert('not successful, undo the changes');
				})
			// $state.go('inventario.productos', {});
			// $state.reload();
			// $state.transitionTo('inventario.productos', null, {reload: true, notify:true});
		}

	}

}());

