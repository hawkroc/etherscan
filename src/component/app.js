import {BackTop} from 'antd';
import React, {Component} from 'react';
import InputSearch from './inputSearch';
// import TransactionList from './transactionList';
import PageTabs from './pageTabs';
// import enUS from 'antd/lib/locale-provider/en_US';
// import {LocaleProvider,locales  } from 'antd';
export default class App extends Component {

    state={
        searchText: '',
        promise: {},
    };

    constructor(props, context) {
        super(props, context);
    };


    changeItem=(item) => {
        console.log("this is promise " + item);
        this.setState({
            promise: item
        });
    };

    render() {
        return (

          <div>
    
            <div>  <InputSearch changeItem={ this.changeItem }/></div> 
            <div>  <PageTabs promise={this.state.promise}/></div>
            <BackTop>
            <div className="ant-back-top-inner"> UP </div>
            </BackTop>
      
          </div>

    )
        ;
    }
}


//   <div>
//           <div>  <InputSearch changeItem={ this.changeItem }/></div> 
//             <hr/>

//           <div>  <PageTabs promise = {this.state.promise}/></div>
// <div>
//     <BackTop>
//         <div
//         className = "ant-back-top-inner"> UP </div> </
//         BackTop>

//         </div>

//         </div>