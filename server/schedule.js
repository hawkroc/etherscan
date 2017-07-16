const schedule = require('node-schedule');
const synData = require('./synchronizeData');
const mogo = require('./mongooseProxy');

scheduleCronstyle = () => {
 let start,end;
    schedule.scheduleJob('1 * * * * *', () => {

        GetCurrentBlock().then((response) => {
           end=response.data.result;
            console.log('this is current blcok ' + response.data.result);
     GetMaxBlock().then((response)=>{
     	//(response)=null?start=response.blockNumber;
         (response) ? start = response.blockNumber : 1;
    
     	     GetdataFromApi(start, end).then((response) => {
     	     	 	console.log("2start is "+start+" end is "+end);

                console.log(""+response.data.result);
                CreateRecords(response.data.result);
            });


     });



       

        });





    });
}
