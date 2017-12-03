(function () {
  "use strict";

  angular
    .module("main")
    .controller("ProductListController", ProductListController)

  ProductListController.$inject = [ "products", "ProductDataService", "$state", "product"];

  function ProductListController(products, ProductDataService, $state, product) {
		let productList = this;
    productList.test = 'test✌️';
    productList.products = products;
		productList.producto = product || {
			nombre: 'Borderlands',
			cantidad: 10,
			precioCompra: 100,
			precioVenta: 200
		};
		console.log('deberia recargar' + $state.current.name);

		console.log('Producto:' + product);
		// Variables para el formulario de agregar productos
    productList.nombre = productList.producto.nombre //== null ? 'Borderlands';
    productList.cantidad = productList.producto.cantidad;
    productList.precioCompra = productList.producto.precioCompra;
    productList.precioVenta = productList.producto.precioVenta;
		
		
    productList.submit = () => {
			ProductDataService.addProduct(this.nombre, this.cantidad, this.precioVenta, this.precioCompra);
			$state.reload();
		}
		
  }


}());

