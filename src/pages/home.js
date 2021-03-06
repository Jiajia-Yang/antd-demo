import React from 'react';
import { connect } from 'react-redux';
import FilterForm from '@components/FilterForm';
import { Table, Spin } from 'antd';
import { requestTableList, requestpositionList, onFormChange } from '@actions';

const columns = [
  {
    title: '提交人',
    dataIndex: 'person',
    key: 'person',
  }, {
    title: '紧急度',
    dataIndex: 'urgent',
    key: 'urgent',
  }, {
    title: '位置信息',
    dataIndex: 'position',
    key: 'position',
  },
  {
    title: '单号',
    dataIndex: 'order',
    key: 'order',
  },
  {
    title: '审批状态',
    dataIndex: 'status',
    key: 'status',
  },
];

@connect((state) => {
  const { tableList, filterData, positionList } = state;
  return { tableList, filterData, positionList };
}, { requestTableList, requestpositionList, onFormChange })
class HomePage extends React.Component {
  componentDidMount() {
    this.getTableList();
    this.getPositionList();
  }

  handleFormChange(val) {
    this.props.onFormChange(val);
  }

  async handlReset() {
    await this.handleFormChange(false);
    this.getTableList();
  }

  getTableList() {
    const { filterData } = this.props;
    this.props.requestTableList(filterData);
  }

  getPositionList() {
    this.props.requestpositionList({});
  }

  render() {
    const { filterData, tableList, positionList } = this.props;
    return (
      <div>
        <FilterForm
          positionList={positionList.list}
          data={filterData}
          onReset={this.handlReset.bind(this)}
          onSearch={this.getTableList.bind(this)}
          onChange={this.handleFormChange.bind(this)} />
        <Spin spinning={tableList.loading}>
          <div className='table-wrap'>
            <Table pagination={false} rowKey={rowData => rowData.id} dataSource={tableList.list} columns={columns} />
          </div>
        </Spin>
      </div>
    );
  }
}
export default HomePage;
