angular.module('tareasApp.controllers', [])

.controller('homeCtrl', function($scope,TareasFactory,$firebaseArray) {
  $scope.tareas=  $firebaseArray(TareasFactory.refTareas());
  $scope.tarea={};
  $scope.agregar=function() {

    
    $scope.tareas.$add({
      texto : $scope.tarea.text
    })
    $scope.tarea.text='';


  }

  $scope.borrar=function(index) {
    $scope.tareas.$remove($scope.tareas[index])
  }

});