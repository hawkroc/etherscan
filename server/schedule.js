
const  schedule = require('node-schedule');
const  synData= require('./synchronizeData');

 scheduleCronstyle=()=>{
 	console.log("start");
    schedule.scheduleJob('5 * * * * *', ()=>{
        console.log('scheduleCronstyle:' + GetCurrentBlock());
    }); 
}


