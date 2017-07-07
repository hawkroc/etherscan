import axios from 'axios';
//98158&endblock=9999999&sort=asc&apikey=E9MYVKUN5TNUBH6P4E5IWEUHAXGZCXQSNV

const url="http://api.etherscan.io/api?module=account&action=txlist&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&startblock=";
// const start1="98158";
// const end2="&endblock=9999999";
const key="&apikey=E9MYVKUN5TNUBH6P4E5IWEUHAXGZCXQSNV";
const Fetchjson = (start,end) => {
  let final=url+start+"&endblock="+end+"&sort=asc"+key;
  console.log(final);
 return fetch(final, {
	method: 'get'
}).then((response) => {
	  let json = response.json(); // there's always a body
	 
	return json;
}).catch((err)=> {
	// Error :(
});

 // return promise;
 //return fetch(final);
};

const currentBlock="https://api.etherscan.io/api?module=proxy&action=eth_blockNumber"

const getCurrentBlock = () => {
  let final=currentBlock+key;
  console.log(final);
 return fetch(final, {
	method: 'get'
}).then((response) => {
	  let json = response.json(); // there's always a body
	// console.log('status: ', response.status);
	 console.log("this currentBlock :"+json.value);

	return json;
}).catch((err)=> {
	// Error :(
});

 // return promise;
 //return fetch(final);
};

export default Fetchjson;