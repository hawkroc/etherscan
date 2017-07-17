
'use strict';

//const mongoose = require('mongoose');
const mongoose = require('../server/db.js'),
      Schema = mongoose.Schema;

const RecordsSchema = new Schema({
  address:String,
  blockNumber: Number,
  timeStamp: String,
  from:String,
  to:String,
  gas:Number,
  gasPrice:Number,
  isError:String,
  input:String,
  contractAddress:String,
  cumulativeGasUsed:String,
  gasUsed:String,
  confirmations:String,
  value:Number,
  time:Date,
  month:String,
  type:String


});
module.exports = mongoose.model('Record', RecordsSchema);
