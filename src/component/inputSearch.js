// import { Input, Icon } from 'antd';
import { Row, Col,Affix } from 'antd';
import { Form, Input, Button, Icon } from 'antd';
import React, { Component } from 'react';
import TimeRelatedForm from './searchTime';
import {GetdataFromApi,GetCurrentBlock} from './Fetchjson';
// import getCurrentBlock from  './Fetchjson';
// import GetdataFromApi from  './Fetchjson';

import axios from 'axios';
const currentBlock="https://api.etherscan.io/api?module=proxy&action=eth_blockNumber"
const FormItem = Form.Item;
class InputSearch extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      userName: '',
       start: '',
        end: '',
    };
  }


componentDidMount =()=>{
//  GetCurrentBlock().then(value=> this.setState({end: value.result}));
// console.log("end  "+this.state.end);
this.props.changeItem(GetCurrentBlock());


}


  emitEmpty = () => {
    // this.userNameInput.focus();
    this.setState({ userName: '' });
  }

 onChangeStart = (e) => {
    this.setState({ start: e.target.value });
  }
   onChangeEnd = (e) => {
    this.setState({ end: e.target.value });
  }



  onclickButton = () => {
    this.props.changeItem(GetdataFromApi(this.state.start,this.state.end));
 
  };


  render() {
    const { userName } = this.state;
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return (
      <div>
      <div className="inputSearch">

    <Row>
 <Col offset={1}  span={2}>
 <h1 className="">
  BlockKeeper
 </h1>

    </Col>
      <Col offset={6} span={6}>
       <TimeRelatedForm/>
   
      </Col>
 <Col offset={1} span={3}>
       <Button onClick={this.onclickButton} type="primary" shape="circle" icon="search" />
       </Col>
       </Row>
      
      </div>
   
          </div>
         
    );
  }
	}


	export default InputSearch;