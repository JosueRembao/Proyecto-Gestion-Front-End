(function () {
	"use strict";

	angular
		.module("main")
		.controller("ProductController", ProductController)

	ProductController.$inject = ["product", "ProductDataService", "$state"];

	function ProductController(product, ProductDataService, $state) {
		let productCtrl = this;
		productCtrl.test = 'test✌️';
		productCtrl.product = product || {
			nombre: '',
			cantidad: 0,
			precioCompra: 0,
			precioVenta: 0
		};
    
		
		//Variables para el formulario de agregar productos
		productCtrl.nombre = productCtrl.product.nombre;
		productCtrl.cantidad = productCtrl.product.cantidad;
		productCtrl.precioCompra = productCtrl.product.precioCompra;
		productCtrl.precioVenta = productCtrl.product.precioVenta;
		const id = productCtrl.product.id;

		productCtrl.actualizar = () => {
			ProductDataService.updateProduct(id, this.nombre, this.cantidad, this.precioVenta, this.precioCompra);
		}

		productCtrl.eliminar = () => {
			let promise = ProductDataService.deleteProduct(id);

			if (!promise) {
				return
			}

			promise.then(function (result) {
					alert('Producto eliminado con exito');
					$state.transitionTo('inventario.productos', null, {reload: true, notify:true});
				},
				function (error) {
					alert('error '+ error);
				})
			// $state.go('inventario.productos', {});
			// $state.reload();
			// $state.transitionTo('inventario.productos', null, {reload: true, notify:true});
		}

		productCtrl.submit = () => {
			ProductDataService.addProduct(this.nombre, this.cantidad, this.precioVenta, this.precioCompra);
			$state.reload();
		}

	}

}());

