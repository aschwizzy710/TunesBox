(function() {
  angular.module('TunesBox') // getter syntax
        .controller('MainController', MainController);

MainController.$inject = ['$scope', 'AlbumService'];

function MainController($scope, AlbumService){
  $scope.albums = AlbumService.get();
  $scope.createAlbum = createAlbum;
  $scope.deleteAlbum = deleteAlbum;
  $scope.editAlbum = editAlbum;
  $scope.saveAlbum = saveAlbum;

  $scope.$watch(function(){
    return AlbumService.get();
  }, function(){
    $scope.albums = AlbumService.get();
  });
  function createAlbum(newAlbum){
    AlbumService.create(newAlbum);
    $scope.newAlbum = '';
  }
  function deleteAlbum(index, album){
    AlbumService.delete(index, album);
  }
  function editAlbum(album){
    album.isBeingEdited = true;
  }
  function saveAlbum(index, album){
    AlbumService.update(index, album);
    album.isBeingEdited = false;
  }

}


}());
