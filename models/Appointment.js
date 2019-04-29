
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    userID: String,
    firstname: { 
        type: String,
        trim: true
    },
    lastname:{ type: String },
    phone:{ type: String },
    email: { type: String },
    address1: { type: String },
    address2: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    
    timeforappt: { type: String },
    
    prepurchaseworkshop: { type: Boolean, default: false},
    creditcounseling: { type: Boolean, default: false},
    postpurchase: { type: Boolean, default: false},
    prebankruptcy: { type: Boolean, default: false},
    taxdelinquency: { type: Boolean, default: false},
    defaultdelinquency: { type: Boolean, default: false},
    discussinperson: { type: Boolean, default: false},
    contactbyphone: { type: Boolean, default: false},
    contactbyemail: { type: Boolean, default: false},
    movetoconsumer: { type: Boolean, default: false},
    counselor: {
        type: Schema.Types.ObjectId,
        ref: "Counselor"
    },
    staff: {
        type: Schema.Types.ObjectId,
        ref: "Admin"
    },
    consumer: {
        type: Schema.Types.ObjectId,
        ref: "Consumer"
    }
});
  

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;
    