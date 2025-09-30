angular.module('appPaqueteria', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/crear', {
        templateUrl: 'views/crear-orden.html',
        controller: 'CrearOrdenCtrl'
      })
      .when('/actualizar', {
        templateUrl: 'views/actualizar-orden.html',
        controller: 'ActualizarOrdenCtrl'
      })
      .when('/seguimiento', {
        templateUrl: 'views/seguimiento.html',
        controller: 'SeguimientoCtrl'
      })
      .otherwise({
        redirectTo: '/crear'
      });
  });