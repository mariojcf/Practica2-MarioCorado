angular.module('appPaqueteria')
  .controller('CrearOrdenCtrl', function($scope, OrdenesService) {
    $scope.orden = {};
    $scope.crear = function() {
      if ($scope.formCrear.$valid) {
        var id = OrdenesService.crearOrden($scope.orden);
        $scope.mensajeExito = id;
        $scope.orden = {}; // Limpiar formulario
        $scope.formCrear.$setPristine();
        $scope.formCrear.$setUntouched();
      }
    };
  });