import React from 'react';
import { Layout } from 'antd';
import { Route, Link, Switch, Redirect, HashRouter } from 'react-router-dom';

import HomePage from '@pages/home';
import XPage from '@pages/xPage';
import XXPage from '@pages/xxPage';

const { Header, Footer, Content } = Layout;

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Header>Header</Header>
        <Content className='content'>
          <HashRouter>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/xpage' component={XPage} />
              <Route path='/xpage/xxpage' component={XXPage} />
              <Redirect to='/' />
            </Switch>
          </HashRouter>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}
export default App;
