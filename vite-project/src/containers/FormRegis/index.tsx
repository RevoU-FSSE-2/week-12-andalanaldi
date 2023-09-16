import { Card, Text } from '../../components';
import { Input, Button } from 'antd';
import { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup'

//Field replaced by useFormik
interface Reg {
    name: string;
    email: string;
    date?: number;
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
    date: undefined,
    address: '',
    city: '',
    state: '',
    zip: '',
    user: '',
    password: ''
}

const validationSchema = yup.object().shape({
    name: yup.string().required('Full name required'),
    email: yup.string().email('email is invalid').required('email required'),
    date: yup.date()
             .required('date of birth is necessary'),
            //  .nullable()
            //  .test('Date of Birth', 'Should be greather than 18', function(value) {
            //    return moment().diff(moment(value), 'years') >= 18;
            //  }),
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

    return (
        <>
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
                        <Text>{FormMik.errors.name}</Text>
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
                        <Text>{FormMik.errors.email}</Text>
                    )}
                </div>
                <div>
                    <Text>Date of Birth:</Text>
                    <Input name={'date'} id={'date'} 
                    value={FormMik.values.date}
                    onChange={FormMik.handleChange('date')}
                    status={FormMik.errors.date && 'error'}
                    />
                    {FormMik.errors.date && (
                        <Text>{FormMik.errors.date}</Text>
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
                        <Text>{FormMik.errors.address}</Text>
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
                        <Text>{FormMik.errors.city}</Text>
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
                        <Text>{FormMik.errors.state}</Text>
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
                        <Text>{FormMik.errors.zip}</Text>
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
                        <Text>{FormMik.errors.user}</Text>
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
                        <Text>{FormMik.errors.password}</Text>
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
        </>        
    )
}

export default FormRegis


