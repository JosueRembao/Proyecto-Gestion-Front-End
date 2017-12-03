(function () {
	'use strict';

	angular
		.module("main")
		.controller("RegisterController", RegisterController);

	RegisterController.$inject = ["RegisterDataService", "$transitions"];

	function RegisterController(RegisterDataService, $transitions) {
		let registerCtrl = this;
		registerCtrl.test = 'funciona'
		registerCtrl.montoInicial = 0;

		registerCtrl.openRegister = () => {
			let isActive = true;
			RegisterDataService.addRegister(isActive, this.montoInicial);
		}
	}
}())
