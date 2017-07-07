// import { Input, Icon } from 'antd';
import { Row, Col,Affix } from 'antd';
import { Form, Input, Button, Icon } from 'antd';
import React, { Component } from 'react';
const FormItem = Form.Item;
class InputAccount extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }
  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  }
  onChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
  }
  render() {
    const { userName } = this.state;
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return (
      <div>  
   <Row>
    <Col offset={5} span={6}>
      <Input
        placeholder="account"
        prefix={<Icon type="check" />}
        suffix={suffix}
        value={userName}
        onChange={this.onChangeUserName}
        ref={node => this.userNameInput = node}
         size="large"
      />
      </Col>
      </Row>
          </div>
    );
  }
	}


	export default InputAccount;