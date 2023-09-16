
import './App.css'
import { FormRegis } from './containers'
// BookInformation, FormBook,
// import { Register } from './containers'
// import { Card } from './components';
// import { Button, Checkbox, Form, Input } from 'antd'

// interface UserData {
//   id: number,
//   name: string,
//   address: string
// }
// interface Props<T> {
//   children: T
// }

// type FieldType = {
//   username?: string;
//   password?: string;
//   remember?: string;
// }

const App = () => {
  
  // const onFinish = (values: any) => {
  //   console.log('Success:', values);
  // };
  // // any should be replaced by formik not only just ant design
  // const onFinishFailed = (errorInfo: any) => {
  //   console.log('Failed:', errorInfo);
  // };
  
  return (
    <>
    {/* <Register/> */}
    {/* <Card title='card title'>
      <p>This is children props</p>
      <Card title='this is 2nd card'>
        <p>this is 2nd card children</p>
      </Card>
    </Card> */}
    {/* <FormBook/>
    <BookInformation/> */}
    <FormRegis/>
    {/* <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    <Button type={'primary'}>This is Button</Button> */}
    </>
  )
}

export default App