// import { Input, Icon } from 'antd';
import { Row, Col,Affix } from 'antd';
import { Form, Input, Button, Icon } from 'antd';
import React, { Component } from 'react';
import Fetchjson from './Fetchjson';
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
  //console.log('this test'+getCurrentBlock());
 axios.get("https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=E9MYVKUN5TNUBH6P4E5IWEUHAXGZCXQSNV")
      .then((res) => {
        console.log('this is test'+ res.result);
      })
this.props.changeItem(Fetchjson('98158','9999999'));


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
    this.props.changeItem(Fetchjson(this.state.start,this.state.end));
 
  };


  render() {
    const { userName } = this.state;
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return (
      <div>
      <div className="inputSearch">

    <Row>
 <Col  span={2}>
 <h1 className="">
  BlockKeep
 </h1>

    </Col>
      <Col offset={3} span={6}>
     
   
      <Input
        placeholder="startblock"
        prefix={<Icon type="compass" />}
        suffix={suffix}
        // value={userName}
        onChange={this.onChangeStart}
        ref={node => this.userNameInput = node}
         size="large"
      />
</Col>
 <Col offset={1} span={6}>
       <Input
        placeholder="endblock"
        prefix={<Icon type="compass" />}
        // suffix={suffix}
        // value={userName}
        onChange={this.onChangeEnd}
        ref={node => this.userNameInput = node}
         size="large"
      />
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