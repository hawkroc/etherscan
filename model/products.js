
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
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
  type:String


});
module.exports = mongoose.model('Product', ProductsSchema);
