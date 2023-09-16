import { Card, Text } from '../../components';
import { Input, Button } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup'

//Field replaced by useFormik
interface Book {
    name: string;
    price?: number;
    description?: string;
}

// C:/Users/Aldi Andalan/Documents/revou/week-12-lectured1/vite-project/src/components
//../../components

const initialValues = {
    name: '',
    price: undefined,
    description: ''
}

const validationSchema = yup.object({
    name: yup.string().required('this is a must... guys'),
    price: yup.number().required('this is a must too guys'),
    description: yup.string()
})
// yup.number().email(
// 'cannot').required('this is a must too guys'), custom message
const FormBook = () => {

    const handleSubmit = (values: Book) => {
        console.log(values)
    }

    const FormMik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })

    // const isError = !!FormMik.errors.name

    return (
        <Card title={'Book Form'}>
            <form onSubmit={FormMik.handleSubmit}>
            <div>
                <Text>Book Name:</Text>
                <Input name={'name'} id={'name'} 
                    value={FormMik.values.name} 
                    onChange={FormMik.handleChange('name')}
                    status={FormMik.errors.name && 'error'}
                />
                {FormMik.errors.name && (
                    <Text>{FormMik.errors.name}</Text>
                )}
            </div>
            <div>
                <Text>Book Price:</Text>
                <Input name={'price'} id={'price'} 
                value={FormMik.values.price}
                onChange={FormMik.handleChange('price')}
                status={FormMik.errors.price && 'error'}
                />
                {FormMik.errors.price && (
                    <Text>{FormMik.errors.price}</Text>
                )}
            </div>
            <div>
                <Text>Book Description:</Text>
                <Input.TextArea rows={5} name={'description'} id={'description'} 
                value={FormMik.values.description} 
                onChange={FormMik.handleChange('description')}
                status={FormMik.errors.description && 'error'}
                />
                {FormMik.errors.description && (
                    <Text>{FormMik.errors.description}</Text>
                )}            
            </div>
            <Button type={'primary'} htmlType={"submit"}>Submit</Button>
            </form>
        </Card>
    )
}

export default FormBook

// formik
// onSubmit={ () => console.log('submitted')}

//input html tag is replaced by Field

// formik replaced by formMik
{/* <Formik initialValues={initialValues} onSubmit={handleSubmit} >
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
</Formik> */}