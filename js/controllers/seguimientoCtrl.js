angular.module('appPaqueteria')
  .controller('SeguimientoCtrl', function($scope, OrdenesService) {
    $scope.buscar = function() {
      var paquete = OrdenesService.obtenerOrdenPorId($scope.idBusqueda);
      if (paquete) {
        $scope.paquete = paquete;
        $scope.mensajeError = null;
      } else {
        $scope.paquete = null;
        $scope.mensajeError = "Paquete no encontrado.";
      }
    };
  });