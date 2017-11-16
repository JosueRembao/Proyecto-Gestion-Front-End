'use strict';

angular.module('providerList', [])
    .component('providerList', {
        templateUrl: 'pages/providers-list/provider-list.html',
        controller: function ProviderListController() {
            this.providers = [{
                    Name: "Proveedor 1",
                    Num: 500
                },
                {
                    Name: "Proveedor 2",
                    Num: 600
                }
            ];
        }
    });