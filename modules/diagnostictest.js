var mongoose = require('mongoose');


var diagtest = new mongoose.Schema({
    test: {
      type: String,
      required: true,
      trim: true
    },
    name:[{
      type: mongoose.Schema.Types.ObjectId,
    ref : "patientdetails",
    
    }],
    surgeonname: [{
      type: mongoose.Schema.Types.ObjectId,
      ref : "surgeondetails"
   }],
    result: {
      type: String,
      required: true,
      trim: true
    },
    dateordered: {
      type: String,
      required: true,
      trim: true
    },
    dateofresult: {
      type: String,
      required: true,
      trim: true
    }
});



var diagdetails = mongoose.model('diagdetails', diagtest);
module.exports = diagdetails;
