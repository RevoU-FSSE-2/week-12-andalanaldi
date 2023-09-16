import { ReactNode } from "react";

interface Props {
    name: string;
    age: number;
    status: string;
    child: ReactNode;
}

const Biodata = ({name, age, status, child} : Props) => {

    return (
        <>
            <h3>User Biodata</h3>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Status: {status}</p>
            {/* Render HTML*/}
            {child}
        </>
    )
}

export default Biodata