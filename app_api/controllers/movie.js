var mongoose = require('mongoose');
var Movie = mongoose.model('moviesData');

module.exports.getPopular = function(req, res) {

  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    Movie
      .find().sort( { vote_average: -1 } ).limit(5)
      .exec(function(err, movie) {
        res.status(200).json(movie);
      });
  }

};
