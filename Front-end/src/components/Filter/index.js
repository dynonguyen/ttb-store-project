import React from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
import './index.scss';
function Filter() {
  return (
    <div className="filter">
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider style={{ background: 'red' }}>Sider</Sider>
        </Layout>
      </Layout>
    </div>
  );
}
export default Filter;
