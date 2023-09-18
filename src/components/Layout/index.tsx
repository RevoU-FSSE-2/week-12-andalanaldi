import { Text } from '../../components';
import React, { ReactNode } from 'react';
import { Layout, Space } from 'antd';

const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 120,
  paddingInline: 400,
  lineHeight: '64px',
  backgroundColor: '#FCE2CF',
  borderTopLeftRadius: '24px', 
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  paddingInline: 500,
  color: '#fff',
  backgroundColor: '#E96B10',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#FCE2CF',
  borderBottomRightRadius: '24px',
};

interface AppLayoutProps {
    children: ReactNode; 
  }
  
  const AppLayout = ({ children }: AppLayoutProps) => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout>
      <Header style={headerStyle}>
        <Text>Registration Form</Text>
      </Header>
      <Content style={contentStyle}>{ children }</Content>
      <Footer style={footerStyle}>
        <Text>Thank you for your registration</Text>
      </Footer>
    </Layout>
  </Space>
);

export default AppLayout