'use strict';

angular.module('reports', [])
    .component('reports', {
        templateUrl: 'pages/reports/reports.html',
        controller: function reportsController() {
            this.report = 'Esto es un reporte!';
        }
    });