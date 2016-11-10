var express = require('express');
var router = express.Router();
var Album = require('../models/album.model.js');
// tool which allows the router to actually extract the data that it takes in
var bodyParser = require('body-parser');

router.use(bodyParser.json());
// opens up the 'package' of information in the url and formulates it so you can actually see what the server is sending to you
router.use(bodyParser.urlencoded({extended: true}));

// performing CRUD functions from the router
 // - use plural 'albums' as it is assumed this will be a collection as there is implicitly more than one album
router.get('/albums', function(req, res){
  Album.find({}, function(err, foundAlbums){
    if(err){
      res.status(500).json({
        err: err
      });
    }
    res.status(200).json({
      albums: foundAlbums
    });
  });
});
router.get('/albums/:id', function(req, res){
  Album.find({_id: req.params.id}, function(err, foundAlbum){
    if(err){
      res.status(500).json({
        err: err
      });
    }
    res.status(200).json({
      album: foundAlbum
    });
  });
});
router.post('/albums', function(req, res){
  console.log(req.body);
  var album = new Album(req.body);
  album.save(function(err){
    if(err){
      res.status(500).json({
        err: err
      });
    }
    res.status(201).json({
      msg: 'Successfully created album'
    });
  });
});
router.put('/albums/:id', function(req, res){
  Album.findOneAndUpdate({_id: req.params.id}, req.body, function(err, oldAlbum){
    if(err){
      res.status(500).json({
        err: err
      });
    }
    res.status(200).json({
      msg: oldAlbum
    });
  });
});
router.delete('/albums/:id', function(req, res){
  Album.findOneAndRemove({_id: req.params.id}, function(err, deletedAlbum){
    if(err){
      res.status(500).json({
        err: err
      });
    }
    res.status(200).json({
      msg: deletedAlbum
    });
  });
});

module.exports = router;
