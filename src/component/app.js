import { QueueAnim,BackTop } from 'antd';
import React, { Component } from 'react';
import InputSearch from './inputSearch';
import TransactionList from './transactionList';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {

 state = {
    searchText: '',
    promise:{},
  };
 constructor(props, context) {
    super(props, context);
  };


 changeItem = (item)=> {
		this.setState({
			promise: item
		});	
	};

 render() {
   return (

   	<div>
     <InputSearch changeItem={this.changeItem}/>
      <hr/>
      <TransactionList promise={this.state.promise}/>
       
   <div>
    <BackTop>
      <div className="ant-back-top-inner">UP</div>
    </BackTop>
    
  </div>
    
 

   
</div>
    );
  }
}