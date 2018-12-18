import React from 'react'
import { connect } from 'react-redux'
import { FilterForm } from '@components'
import { message, Layout, Table } from 'antd'
// import { bindActionCreators } from 'redux'

const { Header, Footer, Content } = Layout;


@connect((state, props) => {
    const { tableList, filterData } = state
    return { tableList, filterData }
})
class App extends React.Component {

    componentDidMount() {

    }

    render() {
        const { filterData, tableList } = this.props
        return (
            <Layout>
                <Header>Header</Header>
                <Content>
                    <FilterForm data={filterData} />
                    <Table />
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
}


export default App 





