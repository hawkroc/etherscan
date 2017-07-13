
const  schedule = require('node-schedule');
const  synData= require('./server/schedule');

 scheduleCronstyle=()=>{
 	console.log("start");
    schedule.scheduleJob('5 * * * * *', ()=>{
        console.log('scheduleCronstyle:' + new Date());
    }); 
}


