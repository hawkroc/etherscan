
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecordsSchema = new Schema({
  blockNumber: String,
  timeStamp: String,
  from:String,
  to:String,
  gas:String,
  gasPrice:String,
  isError:String,
  input:String,
  contractAddress:String,
  cumulativeGasUsed:String,
  gasUsed:String,
  confirmations:String,
  value:String,
  type:String


});
module.exports = mongoose.model('Record', RecordsSchema);
