'use strict';

angular.module('returns', [])
    .component('returns', {
        templateUrl: 'pages/returns/returns.html',
        controller: function returnsController() {
            this.returns = [{
                    Name: "Devolucion 1",
                    Num: 500
                },
                {
                    Name: "Devolucion 2",
                    Num: 600
                }
            ];
        }
    });