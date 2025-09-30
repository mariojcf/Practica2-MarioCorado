angular.module('appPaqueteria')
  .controller('ActualizarOrdenCtrl', function($scope, OrdenesService) {
    $scope.estadosValidos = ['En camino', 'Entregado'];
    $scope.actualizacion = {};

    $scope.buscarOrden = function() {
      $scope.ordenEncontrada = OrdenesService.obtenerOrdenPorId($scope.idBusqueda);
      if (!$scope.ordenEncontrada) {
        $scope.mensaje = "Orden no encontrada";
        $scope.exito = false;
      } else {
        $scope.mensaje = "";
      }
    };

    $scope.actualizar = function() {
      if (!$scope.ordenEncontrada) return;

      var exito = OrdenesService.actualizarOrden(
        $scope.idBusqueda,
        $scope.actualizacion.estado,
        $scope.actualizacion.comentario,
        $scope.actualizacion.responsable
      );

      if (exito) {
        $scope.mensaje = "¡Estado actualizado correctamente!";
        $scope.exito = true;
        $scope.ordenEncontrada = OrdenesService.obtenerOrdenPorId($scope.idBusqueda); // Refrescar
      } else {
        $scope.mensaje = "No se puede saltar estados o estado inválido.";
        $scope.exito = false;
      }
    };
  });