angular.module('appPaqueteria')
  .service('OrdenesService', function() {
    var ordenes = [];

    // Generar ID único de 12 caracteres alfanuméricos
    function generarIdUnico() {
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var id = '';
      for (var i = 0; i < 12; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
    }

    this.crearOrden = function(orden) {
      var nuevaOrden = {
        id: generarIdUnico(),
        estado: 'Creado',
        fechaCreacion: new Date(),
        historial: [{
          fecha: new Date(),
          estado: 'Creado',
          comentario: 'Orden creada',
          responsable: 'Sistema'
        }],
        ...orden
      };
      ordenes.push(nuevaOrden);
      return nuevaOrden.id;
    };

    this.obtenerOrdenPorId = function(id) {
      return ordenes.find(o => o.id === id);
    };

    this.actualizarOrden = function(id, nuevoEstado, comentario, responsable) {
      var orden = this.obtenerOrdenPorId(id);
      if (orden) {
        // Validar secuencia de estados
        var secuencia = ['Creado', 'En camino', 'Entregado'];
        var indiceActual = secuencia.indexOf(orden.estado);
        var indiceNuevo = secuencia.indexOf(nuevoEstado);

        if (indiceNuevo === indiceActual + 1) {
          orden.estado = nuevoEstado;
          orden.historial.push({
            fecha: new Date(),
            estado: nuevoEstado,
            comentario: comentario,
            responsable: responsable
          });
          return true;
        }
      }
      return false;
    };

    this.getOrdenes = function() {
      return ordenes;
    };
  });