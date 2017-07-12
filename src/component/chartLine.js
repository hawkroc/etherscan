import createG2 from 'g2-react';
import { Stat } from 'g2';
import React, { Component } from 'react';
const dataTemp=[
  {
    "time": "9/1",
    "price": 10,
    "Acct": "Business "
  },
  {
    "time": "9/1",
    "price": 30,
    "Acct": "Foundation"
  },
  {
    "time": "9/2",
    "price": 12,
    "Acct": "Business "
  },
  {
    "time": "9/2",
    "price": -32,
    "Acct": "Foundation"
  },
  {
    "time": "9/3",
    "price": -11,
    "Acct": "Business "
  },
  {
    "time": "9/3",
    "price": -35,
    "Acct": "Foundation"
  },
  {
    "time": "9/4",
    "price": -15,
    "Acct": "Business "
  },
  {
    "time": "9/4",
    "price": -40,
    "Acct": "Foundation"
  },
  {
    "time": "9/5",
    "price": 20,
    "Acct": "Business "
  },
  {
    "time": "9/5",
    "price": 42,
    "Acct": "Foundation"
  },
  {
    "time": "9/6",
    "price": 22,
    "Acct": "Business "
  },
  {
    "time": "9/6",
    "price": 35,
    "Acct": "Foundation"
  },
  {
    "time": "9/7",
    "price": 21,
    "Acct": "Business "
  },
  {
    "time": "9/7",
    "price": 36,
    "Acct": "Foundation"
  },
  {
    "time": "9/8",
    "price": 25,
    "Acct": "Business "
  },
  {
    "time": "9/8",
    "price": 31,
    "Acct": "Foundation"
  },
  {
    "time": "9/9",
    "price": 31,
    "Acct": "Business "
  },
  {
    "time": "9/9",
    "price": 35,
    "Acct": "Foundation"
  },
  {
    "time": "9/10",
    "price": 32,
    "Acct": "Business "
  },
  {
    "time": "9/10",
    "price": 36,
    "Acct": "Foundation"
  },
  {
    "time": "9/11",
    "price": 28,
    "Acct": "Business "
  },
  {
    "time": "9/11",
    "price": 40,
    "Acct": "Foundation"
  },
  {
    "time": "9/12",
    "price": 29,
    "Acct": "Business "
  },
  {
    "time": "9/12",
    "price": 42,
    "Acct": "Foundation"
  },
  {
    "time": "9/13",
    "price": 40,
    "Acct": "Business "
  },
  {
    "time": "9/13",
    "price": 40,
    "Acct": "Foundation"
  },
  {
    "time": "9/14",
    "price": 41,
    "Acct": "Business "
  },
  {
    "time": "9/14",
    "price": 38,
    "Acct": "Foundation"
  },
  {
    "time": "9/15",
    "price": 45,
    "Acct": "Business "
  },
  {
    "time": "9/15",
    "price": 40,
    "Acct": "Foundation"
  },
  {
    "time": "9/16",
    "price": 50,
    "Acct": "Business "
  },
  {
    "time": "9/16",
    "price": 40,
    "Acct": "Foundation"
  },
  {
    "time": "9/17",
    "price": 65,
    "Acct": "Business "
  },
  {
    "time": "9/17",
    "price": 38,
    "Acct": "Foundation"
  },
  {
    "time": "9/18",
    "price": 45,
    "Acct": "Business "
  },
  {
    "time": "9/18",
    "price": 36,
    "Acct": "Foundation"
  },
  {
    "time": "9/19",
    "price": 50,
    "Acct": "Business "
  },
  {
    "time": "9/19",
    "price": 30,
    "Acct": "Foundation"
  },
  {
    "time": "9/20",
    "price": 51,
    "Acct": "Business "
  },
  {
    "time": "9/20",
    "price": 29,
    "Acct": "Foundation"
  },
  {
    "time": "9/21",
    "price": 65,
    "Acct": "Business "
  },
  {
    "time": "9/21",
    "price": 28,
    "Acct": "Foundation"
  },
  {
    "time": "9/22",
    "price": 60,
    "Acct": "Business "
  },
  {
    "time": "9/22",
    "price": 25,
    "Acct": "Foundation"
  },
  {
    "time": "9/23",
    "price": 62,
    "Acct": "Business "
  },
  {
    "time": "9/23",
    "price": 28,
    "Acct": "Foundation"
  },
  {
    "time": "9/24",
    "price": 65,
    "Acct": "Business "
  },
  {
    "time": "9/24",
    "price": 29,
    "Acct": "Foundation"
  },
  {
    "time": "9/25",
    "price": 45,
    "Acct": "Business "
  },
  {
    "time": "9/25",
    "price": 30,
    "Acct": "Foundation"
  },
  {
    "time": "9/26",
    "price": 55,
    "Acct": "Business "
  },
  {
    "time": "9/26",
    "price": 40,
    "Acct": "Foundation"
  },
  {
    "time": "9/27",
    "price": 59,
    "Acct": "Business "
  },
  {
    "time": "9/27",
    "price": 32,
    "Acct": "Foundation"
  },
  {
    "time": "9/28",
    "price": 52,
    "Acct": "Business "
  },
  {
    "time": "9/28",
    "price": 33,
    "Acct": "Foundation"
  },
  {
    "time": "9/29",
    "price": 53,
    "Acct": "Business "
  },
  {
    "time": "9/29",
    "price": 34,
    "Acct": "Foundation"
  },
  {
    "time": "9/30",
    "price": 40,
    "Acct": "Business "
  },
  {
    "time": "9/30",
    "price": 30,
    "Acct": "Foundation"
  },
  {
    "time": "9/31",
    "price": 45,
    "Acct": "Business "
  },
  {
    "time": "9/31",
    "price": 35,
    "Acct": "Foundation"
  }
];

const Line = createG2(chart => {
  chart.line().position('time*price').color('Acct').shape('spline').size(2);
  chart.render();
});

class LineChart extends Component {
  state = {
    data: [],
    width: 1200,
    height: 400,
    plotCfg: {
    margin: [10, 100, 50, 120],
    },
  }

  // changeHandler = () => {
  //   this.setState({
  //     data: data.slice(data.length / 2, data.length - 1),
  //   });
  // }
  // componentWillReceiveProps = (nextProps) => {
  //  // this.setPromise(nextProps.promise);
  // };

  // setPromise = (promise) => {
  //   promise.then((value) => {
    
  //    // this.setState({data: value.result, loading: false, show: !this.state.show});
  //     this.parseDataFromApi(value.result);
     
  //   }).catch((error) => {
  //     console.error(error);
  //   });

  // };

// parseDataFromApi=(array)=>{
//   let temp=array.map((item)=> { 
//     return {
//     Time:new Date(parseInt(item.timeStamp) * 1000).toISOString(),  
//     Tx: (item.gas * Math.pow(10, -15) * item.gasPrice).toFixed(8),
//     Txt:item.gasUsed,
//   }; 
// });
//   this.setState({data:temp});
//   console.log("this is data "+this.state.data);
// }


  render() {
    return (
      <div>
        <Line
          data={dataTemp}
          width={this.state.width}
          height={this.state.height}
          plotCfg={this.state.plotCfg}
        />
       
      </div>
    );
  }
}

export default LineChart;
