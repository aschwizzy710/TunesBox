// creates variable called mongoose which uses mongoose package
var mongoose = require('mongoose');
// gives us the tool (mongoose) to create a cookie cutter which will become the model
var Schema = mongoose.Schema;

// tells our cookie cutter the shape its going to cut in
var albumSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  releaseDate: {
    type: Date,
    required: false
  },
  recommendment: {
    value: Boolean,
    required: false
  },
  albumCover: {
    value: String,
    required: false
  }
});
// forms the actual cookie cutter which is our model, or 'Album' in this case
var Album = mongoose.model('Album', albumSchema);
// packages up our data and ships it our so its available in other files
module.exports = Album;
