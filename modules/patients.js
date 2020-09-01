var mongoose = require('mongoose');


var details = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    dob: {
      type: String,
      required: true,
      trim: true
    },
    gender: {
      type: String,
      required: true,
      trim: true
    },
    id:{
      type: Number,
      required: true,
      trim: true
    }
});



var patientdetails = mongoose.model('patientdetails', details);
module.exports = patientdetails;
