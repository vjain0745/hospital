var mongoose = require('mongoose');
var surgeons = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    trim: true
    },
    
    speciality: {
      type: String,
      required: true,
      trim: true
    }
});



var surgeondetails = mongoose.model('surgeondetails', surgeons);
module.exports = surgeondetails;
