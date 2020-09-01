var mongoose = require('mongoose');

var waitingdetails = new mongoose.Schema({
    name: [{      type: mongoose.Schema.Types.ObjectId,
    ref : "patientdetails"
    
    }],
    placementdate: {
      type: String,
      required: true,
      trim: true
    },
    removaldate: {
        type: String,
        required: true,
        trim: true
    },
    surgeonname: [{
      type: mongoose.Schema.Types.ObjectId,
      ref : "surgeondetails"
   }],
    priority: {
        type: String,
        required: true,
        trim: true
    },
    typeofoperation: {
        type: String,
        required: true,
        trim: true
    }
});




var waitinglist = mongoose.model('waitingpatients', waitingdetails);
module.exports = waitinglist;
