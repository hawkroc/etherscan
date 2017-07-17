const schedule = require('node-schedule');
const synData = require('./synchronizeData');
const mogo = require('./mongooseProxy');
const address = "0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae";
scheduleCronstyle = () => {
    let start, end;
    schedule.scheduleJob('1 * * * * *', () => {

        GetCurrentBlock().then((response) => {
            end = response.data.result;
            console.log('this is current blcok ' + response.data.result);
            GetMaxBlock().then((response) => {
                //  console.log("this max number "+response.data.blockNumber);
               // (response) ? start = response.data.blockNumber: 1;
                if (response === null) {
                    start = 1;
                } else {
                    start = parseInt(response.blockNumber)+1;
                }
                GetdataFromApi(start, end, address).then((response) => {
                    console.log("start is " + start + " end is " + end);
                    console.log("this array size" + response.data.result.length);
                    CreateRecords(response.data.result, address);
                });
            });
        });
    });
}
