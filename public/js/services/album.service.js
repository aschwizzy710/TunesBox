(function() {
  angular.module('TunesBox')
        .factory('AlbumService', AlbumService);

  AlbumService.$inject = ['$http'];

  function AlbumService($http){
    init();
    var albums = [];
    return {
      get: getAllAlbums,
      create: createOneAlbum,
      update: updateOneAlbum,
      delete: deleteOneAlbum
    };

    function init(){ // this is going to make our first data request upon file load
      $http.get('/albums')
            .then(function(response){
              albums = response.data.albums;
            })
            .catch(function(err){
              console.log(err);
            });
    }
    function getAllAlbums(){
      return albums;
    }
    function createOneAlbum(album){}
    function updateOneAlbum(index, updatedAlbum){}
    function deleteOneAlbum(index, deletedAlbum){}

  }
}());
