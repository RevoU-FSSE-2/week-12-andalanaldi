import { Card, Text, TextAlert, AppLayout, Responsive } from '../../components';
import { Input, Button, DatePicker } from 'antd';
import { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import dayjs from "dayjs"

//Field replaced by useFormik
interface Reg {
    name: string;
    email: string;
    date: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    user: string;
    password: string
}

const initialValues = {
    name: '',
    email: '',
    date: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    user: '',
    password: ''
}

const birthDate = dayjs().subtract(5, "year").format("YYYY-MM-DD")

const validationSchema = yup.object().shape({
    name: yup.string().required('Full name required'),
    email: yup.string().email('email is invalid').required('email required'),
    date: yup.date()
             .max(birthDate,"You must be at least 5 years old to register")
             .required('date of birth is necessary'),
    address: yup.string().required('address required'),
    city: yup.string().required('city required'),
    state: yup.string().required('state/province required'),
    zip: yup.string()
            .required('zip code is necessary')
            .matches(/(^\d{5}$)|(^\d{5}-\d{4}$)/, 'Zip code must be in 5 digits format'),
    user: yup.string().required('username required'),
    password: yup.string()
                 .required('password required')
                 .min(8, 'Password is too short - should be 8 chars minimum.')
                 .matches(/^(?=.*\d)(?=.*[a-zA-Z]).+$/, 'Password can only contain latin letters & numbers.')
})

const FormRegis = () => {

    const handleSubmit = (values: Reg) => {
        console.log(values)
    }

    const FormMik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })

    const [step, setStep] = useState<number>(1);

    const handleNextAddress = () => {
        if(step === 1) {
            setStep((prevStep) => prevStep+1)
        }

        return
    }

    const handlePrevPersonal = () => {
        if(step === 2) {
            setStep((prevStep) => prevStep-1)
        }

        return
    }

    
    const handleNextAccount = () => {
        if(step === 2) {
            setStep((prevStep) => prevStep+1)
        }

        return
    }

    const handlePrevAddress = () => {
        if(step === 3) {
            setStep((prevStep) => prevStep-1)
        }

        return
    }

    // const isError = !!FormMik.errors.name
    // Responsive children={undefined}

    return (
        <>
        <Responsive>
        <AppLayout>
        {step === 1 && (
        <Card title={'Personal Information'}>
            <form onSubmit={FormMik.handleSubmit}>
                <div>
                    <Text>Full Name:</Text>
                    <Input name={'name'} id={'name'} 
                        value={FormMik.values.name} 
                        onChange={FormMik.handleChange('name')}
                        status={FormMik.errors.name && 'error'}
                    />
                    {FormMik.errors.name && (
                        <TextAlert>{FormMik.errors.name}</TextAlert>
                    )}
                </div>
                <div>
                    <Text>Email Address:</Text>
                    <Input name={'email'} id={'email'} 
                        value={FormMik.values.email} 
                        onChange={FormMik.handleChange('email')}
                        status={FormMik.errors.email && 'error'}
                    />
                    {FormMik.errors.email && (
                        <TextAlert>{FormMik.errors.email}</TextAlert>
                    )}
                </div>
                <div>
                    <Text>Date of Birth:</Text>
                    <DatePicker name={'date'} id={'date'} 
                    format={"YYYY-MM-DD"}
                    value={FormMik.values.date ? dayjs(FormMik.values.date) : null}
                    defaultValue={FormMik.values.date ? dayjs(FormMik.values.date) : undefined}
                    onChange={(_, dateString) => 
                        FormMik.setFieldValue('date', dateString)
                    }
                    status={FormMik.errors.date && 'error'}
                    />
                    {FormMik.errors.date && (
                        <TextAlert>{FormMik.errors.date}</TextAlert>
                    )}
                </div>
            </form>
        </Card>
        )}
        {step === 2 && (
        <Card title={'Address Information'}>
            <form>
                <div>
                    <Text>Street Address:</Text>
                    <Input.TextArea rows={5} name={'address'} id={'address'} 
                    value={FormMik.values.address} 
                    onChange={FormMik.handleChange('address')}
                    status={FormMik.errors.address && 'error'}
                    />
                    {FormMik.errors.address && (
                        <TextAlert>{FormMik.errors.address}</TextAlert>
                    )}            
                </div>
                <div>
                    <Text>City:</Text>
                    <Input name={'city'} id={'city'} 
                        value={FormMik.values.city} 
                        onChange={FormMik.handleChange('city')}
                        status={FormMik.errors.city && 'error'}
                    />
                    {FormMik.errors.city && (
                        <TextAlert>{FormMik.errors.city}</TextAlert>
                    )}
                </div>
                <div>
                    <Text>State:</Text>
                    <Input name={'state'} id={'state'} 
                        value={FormMik.values.state} 
                        onChange={FormMik.handleChange('state')}
                        status={FormMik.errors.state && 'error'}
                    />
                    {FormMik.errors.state && (
                        <TextAlert>{FormMik.errors.state}</TextAlert>
                    )}
                </div>
                <div>
                    <Text>Zip Code:</Text>
                    <Input name={'zip'} id={'zip'} 
                    value={FormMik.values.zip}
                    onChange={FormMik.handleChange('zip')}
                    status={FormMik.errors.zip && 'error'}
                    />
                    {FormMik.errors.zip && (
                        <TextAlert>{FormMik.errors.zip}</TextAlert>
                    )}
                </div>
            </form>
        </Card> 
        )}
        {step === 3 && (
        <Card title={'Account Information'}>
            <form onSubmit={FormMik.handleSubmit}>
                <div>
                    <Text>Username:</Text>
                    <Input name={'user'} id={'user'} 
                        value={FormMik.values.user} 
                        onChange={FormMik.handleChange('user')}
                        status={FormMik.errors.user && 'error'}
                    />
                    {FormMik.errors.user && (
                        <TextAlert>{FormMik.errors.user}</TextAlert>
                    )}
                </div>
                <div>
                    <Text>Password:</Text>
                    <Input name={'password'} id={'password'} 
                        value={FormMik.values.password} 
                        onChange={FormMik.handleChange('password')}
                        status={FormMik.errors.password && 'error'}
                    />
                    {FormMik.errors.password && (
                        <TextAlert>{FormMik.errors.password}</TextAlert>
                    )}
                </div>
                <Button type={'primary'} htmlType={"submit"}>Submit</Button>
            </form>           
        </Card>
        )}
        <div>
            {step === 1 && (
                <Button type={'primary'} onClick={handleNextAddress}>Next</Button>
            )}
            {step === 2 && (
                <Button onClick={handlePrevPersonal}>Back</Button>
            )}
            {step === 2 && (
                <Button type={'primary'} onClick={handleNextAccount}>Next</Button>
            )}
            {step === 3 && (
                <Button onClick={handlePrevAddress}>Back</Button>
            )}
        </div>
        </AppLayout>
        </Responsive> 
        </>        
    )
}

export default FormRegis