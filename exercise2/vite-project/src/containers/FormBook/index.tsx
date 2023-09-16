import { Card, Text } from '../../components';
import { Input, Button } from 'antd';
import { Formik, Form} from 'formik';

interface Book {
    name: string;
    price: string;
    decription?: string;
}

// C:/Users/Aldi Andalan/Documents/revou/week-12-lectured1/vite-project/src/components
//../../components

const initialValues = {
    name: '',
    price: '',
    description: ''
}

const FormBook = () => {

    const handleSubmit = (values: Book) => {
        console.log(values)
    }

    return (
        <Card title={'Book Form'}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} >
                <Form>
                    <div>
                        <Text>Book Name:</Text>
                        <Input name={'name'} id={'name'}/>
                    </div>
                    <div>
                        <Text>Book Price:</Text>
                        <Input name={'price'} id={'price'}/>
                    </div>
                    <div>
                        <Text>Book Description:</Text>
                        <Input.TextArea rows={5} name={'description'} id={'description'}/>
                    </div>
                    <Button type={'primary'} htmlType={"submit"}>Submit</Button>
                </Form>
            </Formik>

        </Card>
    )
}

export default FormBook

// formik
// onSubmit={ () => console.log('submitted')}