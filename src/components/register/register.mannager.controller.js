(function () {
	'use strict';

	angular
		.module("main")
		.controller("RegisterMannagerController", RegisterMannagerController);

	RegisterMannagerController.$inject = ["RegisterDataService", "$transitions", "registers"];

	function RegisterMannagerController($transitions, registers, RegisterDataService) {
		let registerMannagerCtrl = this;
		registerMannagerCtrl.registers = registers;

		// registerMannagerCtrl.closeRegister = 
		
		$transitions.onBefore({}, function (transition) {
			const transitionName = transition.to().name;
			const registerIsActive = registerMannagerCtrl.registers[0].isActive;

			if (registerIsActive && transitionName === "sales.openRegister"){
				return transition.router.stateService.target('sales.dashboard');
			}
		});
	}
}());
