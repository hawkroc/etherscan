//server.js
'use strict'
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const  Product = require('./model/products');
const app = express();
const router = express.Router();

const port = 3001;

//mongoose.connect('mongodb://<DBUSERNAME>:<DBPASSWORD>@ds019836.mlab.com:19836/bryandb');
//mongoose.connect('mongodb://testMongodb:test@ds123312.mlab.com:23312/ai_test');
mongoose.connect('mongodb://localhost:27017/demo')
//now we should configure the APi to use bodyParser and look for JSON data in the body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use((req, res, next) =>{
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});
//test api
router.get('/', (req, res)=> {
  res.json({ message: 'API success?'});
});

const schedule = require('node-schedule');

 scheduleCronstyle=()=>{
    schedule.scheduleJob('10 * * * * *', ()=>{
        console.log('test:' + new Date());
    }); 
};

scheduleCronstyle();

app.use('/api', router);




app.listen(port, ()=> {
  console.log(`api running on port ${port}`);
});
