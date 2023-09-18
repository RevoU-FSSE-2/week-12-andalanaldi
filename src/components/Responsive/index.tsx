import { ReactNode } from 'react';
import { Col, Row } from 'antd';

interface ResponsiveProps {
    children: ReactNode; 
  }

const Responsive = ({ children }: ResponsiveProps) => (
  <> 
  <Row>
    <Col xs={19} sm={19} md={19} lg={24} xl={30} xxl={60}>
        { children }
    </Col>
  </Row>
  </>
);

export default Responsive

{/*
   Default grid responsive setting from antd <Col xs={2} sm={4} md={6} lg={8} xl={10}>
*/}