import React from 'react'
import { connect } from 'react-redux'
import FilterForm from './components/FilterForm'
import { message, Layout, Table } from 'antd'

const { Header, Footer, Content } = Layout;
const columns = [{
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
  }
];



@connect((state, props) => {
    const { tableList, filterData } = state
    return { tableList, filterData }
})
class App extends React.Component {

    componentDidMount() {

    }

    handleFormChange(val) {
        console.log(val)
    }

    render() {
        const { filterData, tableList } = this.props
        console.log(this.props)
        return (
            <Layout>
                <Header>Header</Header>
                <Content className='content'>
                    <FilterForm data={filterData} onChange={this.handleFormChange.bind(this)} />
                    <Table dataSource={tableList.list} columns={columns} />
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
}


export default App 





