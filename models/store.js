const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// will use net sales and car count in schema to generate "ticket avg" on view
const dailySchema = new Schema {
    date: Date,
    netsales: Number, 
    carcount: Number, 
    labor: Number,
}

const storeSchema = new Schema(
  {
    name: String,
    storeid: Number, 
    address: String,
    city: String,
    state: String, 
    zip: Number,
    website: String,
    google: String, 
    dailySales: [dailySchema],
    manager: [{type: Schema.Types.ObjectId, ref: 'User'}],
    general: [{type: Schema.Types.ObjectId, ref: 'User'}],    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Store", storeSchema);