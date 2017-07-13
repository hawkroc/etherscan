import createG2 from 'g2-react';
import { Stat } from 'g2';
import React, { Component } from 'react';
const dataTemp=[
  {
    "Time": "9/1",
    "Cash Flow": 10,
    "Account": "Business "
  },
  {
    "Time": "9/1",
    "Cash Flow": 30,
    "Account": "Foundation"
  },
  {
    "Time": "9/2",
    "Cash Flow": 12,
    "Account": "Business "
  },
  {
    "Time": "9/2",
    "Cash Flow": -32,
    "Account": "Foundation"
  },
  {
    "Time": "9/3",
    "Cash Flow": -11,
    "Account": "Business "
  },
  {
    "Time": "9/3",
    "Cash Flow": -35,
    "Account": "Foundation"
  },
  {
    "Time": "9/4",
    "Cash Flow": -15,
    "Account": "Business "
  },
  {
    "Time": "9/4",
    "Cash Flow": -40,
    "Account": "Foundation"
  },
  {
    "Time": "9/5",
    "Cash Flow": 20,
    "Account": "Business "
  },
  {
    "Time": "9/5",
    "Cash Flow": 42,
    "Account": "Foundation"
  },
  {
    "Time": "9/6",
    "Cash Flow": 22,
    "Account": "Business "
  },
  {
    "Time": "9/6",
    "Cash Flow": 35,
    "Account": "Foundation"
  },
  {
    "Time": "9/7",
    "Cash Flow": 21,
    "Account": "Business "
  },
  {
    "Time": "9/7",
    "Cash Flow": 36,
    "Account": "Foundation"
  },
  {
    "Time": "9/8",
    "Cash Flow": 25,
    "Account": "Business "
  },
  {
    "Time": "9/8",
    "Cash Flow": 31,
    "Account": "Foundation"
  },
  {
    "Time": "9/9",
    "Cash Flow": 31,
    "Account": "Business "
  },
  {
    "Time": "9/9",
    "Cash Flow": 35,
    "Account": "Foundation"
  },
  {
    "Time": "9/10",
    "Cash Flow": 32,
    "Account": "Business "
  },
  {
    "Time": "9/10",
    "Cash Flow": 36,
    "Account": "Foundation"
  },
  {
    "Time": "9/11",
    "Cash Flow": 28,
    "Account": "Business "
  },
  {
    "Time": "9/11",
    "Cash Flow": 40,
    "Account": "Foundation"
  },
  {
    "Time": "9/12",
    "Cash Flow": 29,
    "Account": "Business "
  },
  {
    "Time": "9/12",
    "Cash Flow": 42,
    "Account": "Foundation"
  },
  {
    "Time": "9/13",
    "Cash Flow": 40,
    "Account": "Business "
  },
  {
    "Time": "9/13",
    "Cash Flow": 40,
    "Account": "Foundation"
  },
  {
    "Time": "9/14",
    "Cash Flow": 41,
    "Account": "Business "
  },
  {
    "Time": "9/14",
    "Cash Flow": 38,
    "Account": "Foundation"
  },
  {
    "Time": "9/15",
    "Cash Flow": 45,
    "Account": "Business "
  },
  {
    "Time": "9/15",
    "Cash Flow": 40,
    "Account": "Foundation"
  },
  {
    "Time": "9/16",
    "Cash Flow": 50,
    "Account": "Business "
  },
  {
    "Time": "9/16",
    "Cash Flow": 40,
    "Account": "Foundation"
  },
  {
    "Time": "9/17",
    "Cash Flow": 65,
    "Account": "Business "
  },
  {
    "Time": "9/17",
    "Cash Flow": 38,
    "Account": "Foundation"
  },
  {
    "Time": "9/18",
    "Cash Flow": 45,
    "Account": "Business "
  },
  {
    "Time": "9/18",
    "Cash Flow": 36,
    "Account": "Foundation"
  },
  {
    "Time": "9/19",
    "Cash Flow": 50,
    "Account": "Business "
  },
  {
    "Time": "9/19",
    "Cash Flow": 30,
    "Account": "Foundation"
  },
  {
    "Time": "9/20",
    "Cash Flow": 51,
    "Account": "Business "
  },
  {
    "Time": "9/20",
    "Cash Flow": 29,
    "Account": "Foundation"
  },
  {
    "Time": "9/21",
    "Cash Flow": 65,
    "Account": "Business "
  },
  {
    "Time": "9/21",
    "Cash Flow": 28,
    "Account": "Foundation"
  },
  {
    "Time": "9/22",
    "Cash Flow": 60,
    "Account": "Business "
  },
  {
    "Time": "9/22",
    "Cash Flow": 25,
    "Account": "Foundation"
  },
  {
    "Time": "9/23",
    "Cash Flow": 62,
    "Account": "Business "
  },
  {
    "Time": "9/23",
    "Cash Flow": 28,
    "Account": "Foundation"
  },
  {
    "Time": "9/24",
    "Cash Flow": 65,
    "Account": "Business "
  },
  {
    "Time": "9/24",
    "Cash Flow": 29,
    "Account": "Foundation"
  },
  {
    "Time": "9/25",
    "Cash Flow": 45,
    "Account": "Business "
  },
  {
    "Time": "9/25",
    "Cash Flow": 30,
    "Account": "Foundation"
  },
  {
    "Time": "9/26",
    "Cash Flow": 55,
    "Account": "Business "
  },
  {
    "Time": "9/26",
    "Cash Flow": 40,
    "Account": "Foundation"
  },
  {
    "Time": "9/27",
    "Cash Flow": 59,
    "Account": "Business "
  },
  {
    "Time": "9/27",
    "Cash Flow": 32,
    "Account": "Foundation"
  },
  {
    "Time": "9/28",
    "Cash Flow": 52,
    "Account": "Business "
  },
  {
    "Time": "9/28",
    "Cash Flow": 33,
    "Account": "Foundation"
  },
  {
    "Time": "9/29",
    "Cash Flow": 53,
    "Account": "Business "
  },
  {
    "Time": "9/29",
    "Cash Flow": 34,
    "Account": "Foundation"
  },
  {
    "Time": "9/30",
    "Cash Flow": 40,
    "Account": "Business "
  },
  {
    "Time": "9/30",
    "Cash Flow": 30,
    "Account": "Foundation"
  },
  {
    "Time": "9/31",
    "Cash Flow": 45,
    "Account": "Business "
  },
  {
    "Time": "9/31",
    "Cash Flow": 35,
    "Account": "Foundation"
  }
];

const Line = createG2(chart => {
  chart.line().position('Time*Cash Flow').color('Account').shape('spline').size(2);
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
//     Time:new Date(parseInt(item.TimeStamp) * 1000).toISOString(),  
//     Tx: (item.gas * Math.pow(10, -15) * item.gasCash Flow).toFixed(8),
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
