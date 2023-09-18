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