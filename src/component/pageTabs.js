import {Tabs} from 'antd';
import React from 'react';
import TransactionList from './transactionList';
import LineChart from './chartLine';
const TabPane = Tabs.TabPane;

class PageTabs extends React.Component {
  state = {
    promise: {},
    data: [],
  };
  callback = (key) => {

  }

  constructor(props, context) {
    super(props, context);
  };


  componentWillReceiveProps = (nextProps) => {
    this.setPromise(nextProps.promise);
  };

  setPromise = (promise) => {
    this.setState({promise: promise});

  };


  render() {
    return (
      <Tabs defaultActiveKey="1" onChange={this.callback}>
        <TabPane tab="Busines Account" key="1">
          <TransactionList promise={this.state.promise}/>
        </TabPane>
        <TabPane tab="Dashboard" key="2">
          <LineChart />
        </TabPane>
        <TabPane tab="Setting" key="3">
          <LineChart />
        </TabPane>
      </Tabs>
    );
  }

}


export default PageTabs;

// ReactDOM.render(
//   <Tabs defaultActiveKey="1" onChange={callback}>
//     <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
//     <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
//     <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
//   </Tabs>
// , mountNode);