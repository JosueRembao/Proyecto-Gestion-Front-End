(function () {
	'use strict';

	angular
		.module("main")
		.controller("RegisterController", RegisterController);

	RegisterController.$inject = ["RegisterDataService"];
	function RegisterController(RegisterDataService) {
		let registerCtrl = this;
		registerCtrl.test = 'funciona';
		
		registerCtrl.montoInicial = 0;
		
		registerCtrl.openRegister = () =>{
			let isActive = true;
			// console.log('cambiano caja a ' + isActive + ' con ' + this.montoInicial);
			RegisterDataService.addRegister(isActive, this.montoInicial);
		}
	}
}())
