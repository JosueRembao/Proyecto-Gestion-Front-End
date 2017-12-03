(function () {
  "use strict";

  angular
    .module("main")
    .controller("ProductListController", ProductListController)

  ProductListController.$inject = [ "products", "ProductDataService", "$state"];

  function ProductListController(products, ProductDataService, $state) {
		let productList = this;
    productList.test = 'test✌️';
    productList.products = products;
		
    for (const prop in productList.products) {
			console.log(`obj.${prop} = ${JSON.stringify(productList.products[prop])}`);
		}
		productList.producto = {
			nombre: 'Borderlands',
			cantidad: 10,
			precioCompra: 100,
			precioVenta: 200
		};
		//
		// console.log('deberia recargar ' + $state.current.name);
		// console.log("valor de productos"+ products )
		// console.log('Producto:' + product);
		// // Variables para el formulario de agregar productos
		// console.log(productList.producto.nombre)
    // productList.nombre = productList.producto.nombre; //== null ? 'Borderlands';
    // productList.cantidad = productList.producto.cantidad;
    // productList.precioCompra = productList.producto.precioCompra;
    // productList.precioVenta = productList.producto.precioVenta;
		//
		//
    productList.submit = () => {
			ProductDataService.addProduct(this.nombre, this.cantidad, this.precioVenta, this.precioCompra);
			$state.reload();
		}
		
  }


}());

