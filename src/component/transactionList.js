import {Table, Button, notification} from 'antd';
import {Menu, Dropdown} from 'antd';
import React from 'react';
import {CSVLink} from 'react-csv';
import {Select, Popover} from 'antd';
const {Option, OptGroup} = Select;

// const config = {size: 'large',};
// const fields = ['BlockNumber', 'Time'];
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/">Monthly</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/">Quarterly</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/">Yearly</a>
    </Menu.Item>
  </Menu>
);

const menuType = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/">GST</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/">Non-GST</a>
    </Menu.Item>
  </Menu>
);

class TransactionList extends React.Component {
  state = {
    show: true,
    data: null,
    loading: true,
    error: null,
    filteredInfo: null,
    sortedInfo: null,
    csvData: [],
  };
  handleChange = (pagination, filters, sorter) => {
    // console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  handleChangeSelect = (value) => {
    console.log(`selected ${value}`);

  };

  openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Notification',
      description: 'This record type be changed',
      duration: 2,
    });
  };

//  openNotificationWithIcon = (type) => {
//   notification[type]({
//     message: 'the type be changed',
//     description: 'the type be changed',
//   });
// };

// var a1 = ['a', 'b', 'c'];
// var a2 = a1.map(function(item) { 
//     return item.toUpperCase(); 
// });
// console.log(a2); // logs A,B,C

  parseDataFromApi = () => {
    let temp = this.state.data.map((item) => {
      return {
        Time: new Date(parseInt(item.timeStamp) * 1000).toLocaleDateString(),
        From: item.from,
        To: item.to,
        Tx: (item.gas * Math.pow(10, -18) * item.gasPrice).toFixed(8),
        Success: item.isError,
        Note: null,
        Txtype: null,

      };
    });
    this.setState({csvData: temp});
  }

  setPromise = (promise) => {
    promise.then((value) => {
     console.log("this is value :"+value.result);
      this.setState({data: value.result, loading: false, show: !this.state.show});
      this.parseDataFromApi();

    }).catch((error) => {
      console.error(error);
    });

  };
  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };


  componentWillReceiveProps = (nextProps) => {
    this.setPromise(nextProps.promise);
  };
  // exportCsv = () => {
  //     let csv = json2csv({ data: data, fields: fields });

  //     fs.writeFile('file.csv', csv, (err) => {
  //         if (err) throw err;
  //         console.log('file saved');
  //     });
  // }

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  }

  render() {
    let {sortedInfo, filteredInfo} = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'Time',
        dataIndex: 'timeStamp',
        key: 'timeStamp',
        width: "10%",
        render: (text) => {
          return new Date(parseInt(text) * 1000).toLocaleDateString();
        },
        sorter: (a, b) => a.timeStamp - b.timeStamp,
        sortOrder: sortedInfo.columnKey === 'timeStamp' && sortedInfo.order,
      },
      //    {
      //   title: 'Amount(ETH) ',
      //   dataIndex: 'value',
      //   key: 'value',
      //   width: "6%",
      //   render: (text, record) => {
      //     return (text * Math.pow(10, -18)).toFixed(8);
      //   },
      // },
      {
        title: 'From',
        dataIndex: 'from',
        key: 'from',
        width: "15%",
        render: (text, record) => (
          <Popover content={record.from} title="from" trigger="hover">
            <Button>Centrality Business Account</Button>
          </Popover>
        ),
      },

      {
        title: 'To',
        dataIndex: 'to',
        key: 'to',
        width: "15%",
        render: (text, record) => (
          <Popover content={record.to} title="to" trigger="hover">
            <Button>Blockhaus Swiss Account</Button>
          </Popover>
        ),


      },


      {
        title: 'Spent',
        dataIndex: 'gas',
        key: 'gas',
        width: "6%",
        render: (text, record) => {
          return (text * Math.pow(10, -18) * record.gasPrice).toFixed(8);
        },
      },


      // {
      //   title: 'Success',
      //   dataIndex: 'isError',
      //   key: 'isError',
      //   width: "6%",
      //   render: (text) => {
      //     return text === '0' ? 'true' : 'false';
      //   },
      //   filters: [
      //     {text: 'true', value: '0'},
      //     {text: 'false', value: '1'},
      //   ],
      //   filteredValue: filteredInfo.isError || null,
      //   onFilter: (value, record) => record.isError.includes(value),
      // },

      {
        title: 'Note',
        dataIndex: 'contractAddress',
        key: 'contractAddress',
        width: "6%",
        render: (text) => {
          return text === "" ? '' : 'with internal tx';
        },
        filters: [
          {text: 'No', value: 'No'},
          {text: 'Yes', value: 'Yes'},
        ],
        filteredValue: filteredInfo.contractAddress || null,
        onFilter: (value, record) => record.contractAddress.includes(value),
      },

      {
        title: ' Tx type',
        key: 'blockNumber',
        width: "18%",
        render: (text, record) => (
          <div>

            <Select
              defaultValue="3"
              style={{width: 150}}
              onChange={() => this.openNotificationWithIcon('success')}
            >

              <OptGroup label="GST">
                <Option value="1">Legal Fees</Option>
                <Option value="2">Computer Expenses</Option>
                <Option value="3">General Expenses</Option>
                <Option value="4">Rent</Option>
                <Option value="5"> Staff Expenses</Option>


              </OptGroup>

              <OptGroup label="Non-GST">
                <Option value="6">Payroll</Option>
              </OptGroup>
            </Select>
          </div>
        ),
      },

    ];
    return (
      <div>

        <div className="tableList">
          <div className="table-operations">


            <Dropdown overlay={menuType} placement="bottomLeft">
              <Button >Type</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="bottomLeft">
              <Button >Summary</Button>
            </Dropdown>


            <Button icon="download">
              <CSVLink filename={"export.csv"} data={(this.state.csvData) ? (this.state.csvData) : []}>Xero
                feed(csv)</CSVLink>
            </Button>
          </div>
          <Table
            loading={this.state.loading}
            columns={ columns }
            dataSource={this.state.data }
            onChange={ this.handleChange }
            pagination={{pageSize: 500}}
            scroll={{y: 500}}
          />
        </div >

      </div>
    );
  }
}
export default TransactionList;



