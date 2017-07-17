import axios from 'axios';
const url = "http://api.etherscan.io/api?module=account&action=txlist&address=";
const key = "&apikey=E9MYVKUN5TNUBH6P4E5IWEUHAXGZCXQSNV";
var currentNumber;
//test
export const GetdataFromApi = (start, end,configaddress,isFirst) => { 
  if(!isFirst){
       end=end>0?currentNumber:Math.round(end)+currentNumber;
        start=start>0?currentNumber:Math.round(start)+currentNumber;
      }
    let final = url +configaddress+"&startblock="+ start + "&endblock=" + end + "&sort=desc" + key;
    console.log(final);
    return fetch(final, {
        method: 'get'
    }).then((response) => {
        return response.json();
    }).catch((err) => {
        // Error :(
    });
};

const currentBlock = "https://api.etherscan.io/api?module=proxy&action=eth_blockNumber"

export const GetCurrentBlock = (address) => {
    let final = currentBlock + key;
    console.log(final);
   return axios.get(final).then(
   	(response) =>{  
       currentNumber=parseInt(response.data.result, 16);
      
   		return  GetdataFromApi(1,currentNumber,address,true);}
   	);
}
