import moment from 'moment';
import { DatePicker } from 'antd';
import React from 'react';
const {RangePicker } = DatePicker;
const timeDiff=16000;
class TimeRelatedForm extends React.Component {



 disabledDateTime=()=> {
  return {
    disabledHours: () => this.range(0, 24).splice(4, 20),
    disabledMinutes: () => this.range(30, 60),
    disabledSeconds: () => [55, 56],
  };
}
 onChange=(date, dateString)=> {
this.props.setTime(this.getTimDiff(date[0]),this.getTimDiff(date[1])); 
}

getTimDiff=(m)=>{
 return m.diff(Date.now())/timeDiff;

}
 disabledRangeTime=(_, type)=> {
  type === 'start'?{

      disabledHours: () => this.range(0, 60).splice(4, 20),
      disabledMinutes: () => this.range(30, 60),
      disabledSeconds: () => [55, 56],
    }:null;
  }


  range = (start, end)=> {
 const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

  render() {
    return(
    <div>
     <RangePicker
      disabledDate={this.disabledDate}
      disabledTime={this.disabledRangeTime}
      onChange={this.onChange}
      size={'large'}
      showTime={{
        hideDisabledOptions: true,
        defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
      }}
      format="YYYY-MM-DD HH:mm:ss"
    />
    </div>
    );
  }
}

export default TimeRelatedForm;