import axios from 'axios';
//98158&endblock=9999999&sort=asc&apikey=E9MYVKUN5TNUBH6P4E5IWEUHAXGZCXQSNV
const blockNumber=16;//blockNumber every house
const url = "http://api.etherscan.io/api?module=account&action=txlist&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&startblock=";
const key = "&apikey=E9MYVKUN5TNUBH6P4E5IWEUHAXGZCXQSNV";
export const GetdataFromApi = (start, end) => {
    let final = url + start + "&endblock=" + end + "&sort=asc" + key;
    console.log(final);
    return fetch(final, {
        method: 'get'
    }).then((response) => {
        return response.json();
    }).catch((err) => {
        // Error :(
    });

    // return promise;
    //return fetch(final);
};

const currentBlock = "https://api.etherscan.io/api?module=proxy&action=eth_blockNumber"

export const GetCurrentBlock = () => {
    let final = currentBlock + key;
    console.log(final);
   return axios.get(final).then(
   	(response) =>{  
        let temp=parseInt(response.data.result, 16);
          // console.log(temp);
          //GetdataFromApi("98158",temp);
   		return  GetdataFromApi(temp-150000,temp);}
   	);
}
