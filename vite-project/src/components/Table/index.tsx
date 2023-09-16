import { ReactNode } from "react";

interface Props {
    headers: string[];
    children: ReactNode;
}

const Table = ({ headers, children } : Props) => {

    return (
        <table border={1}>
            <thead>
                <tr>
                {headers.map((header, index) => (
                    <th key={index}>{header}</th>
                ))}
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}

export default Table

/* 
tbody part
                /{data.map((v, index) => (
                    <tr key={index}>
                        <td>{v.name}</td>
                    </tr>
                ))} why it is not in tbody ? to make it more neat and no type conflict? + dynamic agar bisa lempar children isi data langsung ke table tbody

Interface and data : <T,> ... Props<T>
interface only: data: T[];
{children} */