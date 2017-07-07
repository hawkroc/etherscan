import {Table, Button, Icon, notification} from 'antd';
import React from 'react';
import json2csv from 'json2csv';
import axios from 'axios';
import {CSVLink} from 'react-csv';
import {Select, Popover} from 'antd';
const {Option, OptGroup} = Select;

const config = {size: 'large',};
const fields = ['BlockNumber', 'Time'];

class TransactionList extends React.Component {
  state = {
    show: true,
    data: null,
    loading: true,
    error: null,
    filteredInfo: null,
    sortedInfo: null,
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


  setPromise = (promise) => {
    promise.then((value) => {
      //  axios.post('http://localhost:3001/api/record', {
      //   record: value.result,
      // })
      // .then( (response)=> {
      //   console.log(response);
      // })
      // .catch( (error)=> {
      //   console.log(error);
      // });
      this.setState({data: value.result, loading: false, show: !this.state.show});
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
        width: "12%",
        render: (text) => {
          return new Date(parseInt(text) * 1000).toISOString();
        },
        sorter: (a, b) => a.timeStamp - b.timeStamp,
        sortOrder: sortedInfo.columnKey === 'timeStamp' && sortedInfo.order,
      }, {
        title: 'From',
        dataIndex: 'from',
        key: 'from',
        width: "15%",
        render: (text, record) => (
          <Popover content={record.from} title="from" trigger="hover">
            <Button>Centrality Visa Account</Button>
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


      }, {
        title: 'Success',
        dataIndex: 'isError',
        key: 'isError',
        width: "6%",
        render: (text) => {
          return text === '0' ? 'true' : 'false';
        },
        filters: [
          {text: 'true', value: '0'},
          {text: 'false', value: '1'},
        ],
        filteredValue: filteredInfo.isError || null,
        onFilter: (value, record) => record.isError.includes(value),
      },

      {
        title: 'Has internal TX',
        dataIndex: 'contractAddress',
        key: 'contractAddress',
        width: "8%",
        render: (text) => {
          return text === "" ? 'No' : 'Yes';
        },
        filters: [
          {text: 'No', value: 'No'},
          {text: 'Yes', value: 'Yes'},
        ],
        filteredValue: filteredInfo.contractAddress || null,
        onFilter: (value, record) => record.contractAddress.includes(value),
      },


      {
        title: 'Amount (ETH)',
        dataIndex: 'gas',
        key: 'gas',
        width: "8%",
        render: (text, record) => {
          return (text * Math.pow(10, -18) * record.gasPrice).toFixed(8);
        },
      },

      {
        title: ' Rule types',
        key: 'blockNumber',
        width: "20%",
        render: (text, record) => (
          <div>

            <Select
              defaultValue="2"
              style={{width: 150}}
              onChange={() => this.openNotificationWithIcon('success')}
            >

              <OptGroup label="GST">
                <Option value="1">office purchase</Option>
                <Option value="2">computer purchase</Option>
              </OptGroup>

              <OptGroup label="Non-GST">
                <Option value="3">Payroll</Option>
              </OptGroup>
            </Select>
          </div>
        ),
      },

    ];
    return (
      <div>

        <div className="tableList">
          <div size={ config.size } className="table-operations">
            <Button size={ config.size } onClick={ this.setAgeSort }> Monthly </Button>
            <Button onClick={ this.clearFilters }> Quarterly </Button >
            <Button onClick={ this.setAgeSort }> Yearly </Button>
            < Button onClick={ this.clearFilters }> By type </Button>
            <Button size={ config.size } onClick={ this.clearAll }> Clear filters and sorters </Button>
            <Button icon="download" size={ config.size }>
              <CSVLink filename={"export.csv"} data={(this.state.data) ? (this.state.data) : []}>Xero
                feed(csv)</CSVLink>
            </Button>
          </div>
          <Table
            loading={this.state.loading}
            columns={ columns }
            dataSource={this.state.data }
            onChange={ this.handleChange }
            pagination={{pageSize: 50}}
            scroll={{y: 500}}
          />
        </div >

      </div>
    );
  }
}
export default TransactionList;

