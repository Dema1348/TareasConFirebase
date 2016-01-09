angular.module('tareasApp.services', [])

  .factory('TareasFactory', function($firebase) {
     var ref= new Firebase("https://tareasionic.firebaseio.com/");
     var refTareas= new Firebase("https://tareasionic.firebaseio.com/tareas");


     return{
        ref: function() {
          return ref;
        },
        refTareas: function() {
          return refTareas;
        }
     }
  });
