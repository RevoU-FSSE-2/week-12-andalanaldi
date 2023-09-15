import { useState } from 'react';
import { Table, RegisterForm } from '../../components'
//C:/Users/Aldi Andalan/Documents/revou/week-12-lectured1/vite-project/src/components

interface DataUser {
    name?: string;
    email?: string;
    gender?: 'L' | 'P';
    address?: string;
}

const Register = () => {

    const [form, setForm] = useState<DataUser>();

    const data: DataUser[] = [{
        name: 'Aldi',
        email: 'andalanaldi@gmail.com',
        gender: 'L',
        address: 'Depok'
    },{
        name: 'Aldi',
        email: 'aldi.andalan@gmail.com',
        gender: 'L',
        address: 'Depok'
    }];
    const renderTableBody = () => {
        return (
            <>
                {data.map((v, index) => (
                    <tr key={index}>
                        <td>{v.name}</td>
                        <td>{v.email}</td>
                        <td>{v.gender}</td>
                        <td>{v.address}</td>
                    </tr>
                ))}
            </>
        )
    }

    return (
    <>
        <RegisterForm form={form} setForm={setForm}/>
        <Table headers={['Nama','Email','Gender','Address']} children={renderTableBody()}/>
    </>

    )
}

export default Register



// in return
// this is just form input, submit is not yet coded