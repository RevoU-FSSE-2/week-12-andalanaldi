import {ChangeEvent, Dispatch, SetStateAction} from "react";

interface DataUser {
    name?: string;
    email?: string;
    // gender?: 'L' | 'P'
    // address?: string;
}

interface Props {
 form?: DataUser;
 setForm: Dispatch<SetStateAction<DataUser | undefined>>;
//  name?: string;
//  setName: Dispatch<SetStateAction<string | undefined>>;
//  email?: string;
//  setEmail?: Dispatch<SetStateAction<string | undefined>>;
}

const RegisterForm = ({form, setForm} : Props) => {
    console.log(form)

    const handleForm =  (type: 'name' | 'email' ) => (event : ChangeEvent<HTMLInputElement>) => { 
        const tempForm: DataUser= {
            ...form,
            [type] : event.target.value
        }
        setForm(tempForm)
    }

    //Best Practice
    // const handleForm =  (type: 'name' | 'email' | 'gender' | 'address' ) => (event : ChangeEvent<HTMLInputElement>) => { 
    //     const tempForm: DataUser= {
    //         ...form,
    //         [type] : event.target.value
    //     }
    //     setForm(tempForm)
    // }

    return (
        <form>
            <div>
                <label>Name</label>
                <input type="text" value={form?.name} name="name" onBlur={handleForm('name')}/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" value={form?.email} name="email" onBlur={handleForm('email')}/>
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
    )
}

export default RegisterForm

// interface
// form?
// setForm | undefined
// still error in register

//under handleForm
// setForm({
//     [type]: event
// })

// onBlur () => callback function is not used again if there is tempForm event.target.value