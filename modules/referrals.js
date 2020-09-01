var mongoose = require('mongoose');


var reftest = new mongoose.Schema({
    
    name: [{
      type: mongoose.Schema.Types.ObjectId,
    ref : "patientdetails",
    default:[]
    }],
    surgeonname: 
      [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "surgeondetails"
     }],
    appointmentdate: {
      type:String,
      required: true,
      trim: true
    },
    priority: {
      type: String,
      required: true,
      trim: true
    },
    date: {
      type: String,
      required: true,
      trim: true
    }
});



var refdetails = mongoose.model('refdetails', reftest);
module.exports = refdetails;
