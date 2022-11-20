import mongoose, { Schema } from "mongoose";

const partyDataSchema = new mongoose.Schema(
  {
    partyname: {
      type: String,
      
    },
    email: {
      type: String,
    
    },
  
    address: {
      type: Schema.Types.Mixed,
    },
    city: {
      type: String,
    
    },
    state: {
      type: String,
      
    },
    pincode: {
      type: Number,
      
    },
    phonenumber: {
      type: Number,
      
    },
    phonenumber2: {
      type: String,
    
    },

    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userData",
      
    },
  },
  {
    timestamp: true,
  }
);

const partyData = mongoose.model("paryData", partyDataSchema);
export default partyData;
