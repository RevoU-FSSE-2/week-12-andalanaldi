import {ChangeEvent, FormEvent, useState } from 'react';
import { Table } from '../../components'
//, RegisterForm
//C:/Users/Aldi Andalan/Documents/revou/week-12-lectured1/vite-project/src/components

interface DataUser {
    name?: string;
    email?: string;
    gender?: 'L' | 'P';
    address?: string;
}

const Register = () => {

    // const [form, setForm] = useState<DataUser>();
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [users, setUsers] = useState<DataUser[]>([]);
    // const [userBests, setUserBests] = useState<DataUser[]>([]);

    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setUsers((prevState) => [...prevState, {
            name,
            email
        }])

        // setUserBests((prevState) => [...prevState, {
        //     name: form?.name,
        //     email: form?.email
        // }])
    }

    // const data: DataUser[] = [{
    //     name: 'Aldi',
    //     email: 'andalanaldi@gmail.com',
    //     // gender: 'L',
    //     // address: 'Depok'
    // },{
    //     name: 'Aldi',
    //     email: 'aldi.andalan@gmail.com',
    //     // gender: 'L',
    //     // address: 'Depok'
    // }];
    const renderTableBody = () => {
        return (
            <>
                {users.map((v, index) => (
                    <tr key={index}>
                        <td>{v.name}</td>
                        <td>{v.email}</td>
                        {/* <td>{v.gender}</td>
                        <td>{v.address}</td> */}
                    </tr>
                ))}
            </>
        )
    }

    return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" value={name} name="name" onBlur={handleChangeName}/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" value={email} name="email" onBlur={handleChangeEmail}/>
            </div>
            {/* <div>
                <label>Gender</label>
                <input type="text" value={form?.gender} name="gender" onBlur={handleForm('gender')}/>
            </div>
            <div>
                <label>Address</label>
                <input type="text" value={form?.address} name="address" onBlur={handleForm('address')}/>
            </div> */}
            <button type="submit">Submit Form</button>
        </form>
        {/* <RegisterForm form={form} setForm={setForm}/> */}
        <Table headers={['Nama','Email']} children={renderTableBody()}/>
        <hr/>
        <h4>Best Practice</h4>
    </>

    )
}

export default Register



// in return
// this is just form input, submit is not yet coded

// under const render
// {data.map((v, index) => (
//     <tr key={index}>
//         <td>{v.name}</td>
//         <td>{v.email}</td>
//         {/* <td>{v.gender}</td>
//         <td>{v.address}</td> */}
//     </tr>
// ))}