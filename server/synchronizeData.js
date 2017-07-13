const address="0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae";
const base="http://api.etherscan.io/api?"
const accountUrl="module=account&action=txlist&address=";
const currentBlock="module=proxy&action=eth_blockNumber";
const start="";
const end="";
const key="&apikey=E9MYVKUN5TNUBH6P4E5IWEUHAXGZCXQSNV";
const  axios = require('axios');
//"&startblock=11063&endblock=4009538&sort=asc"

  GetCurrentBlock = () => {
    let final = base+currentBlock + key;
    console.log(final);
   return axios.get(final).then(
   	(response) =>{  
       let currentNumber=parseInt(response.data.result, 16);
       console.log("currentNumber"+currentNumber);
   		return  currentNumber;
   	}
   	);
}

