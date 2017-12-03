(function () {
  "use strict";

  angular
    .module("main")
    .controller("ProductListController", ProductListController)

  ProductListController.$inject = [ "products", "ProductDataService", '$scope'];

  function ProductListController(products, ProductDataService) {
    let productList = this;
    productList.test = 'test✌️';
    productList.products = products;
    
    //Variables para el formulario de agregar productos
    productList.nombre = 'Borderlands';
		productList.cantidad = 10;
		productList.precioCompra = 190;
		productList.precioVenta = 200;
    productList.submit = () => {
    	console.log(`${productList.nombre} ${productList.cantidad} ${productList.precioCompra} ${productList.precioVenta}`);
			ProductDataService.addProduct(this.nombre, this.cantidad, this.precioVenta, this.precioCompra);
		}
		
  }


}());

