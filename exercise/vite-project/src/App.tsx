// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { ChangeEvent, useState } from 'react'
import './App.css'
import { Register } from './containers'
//C:/Users/Aldi Andalan/Documents/revou/week-12-lectured1/vite-project/src/components/containers
//app css as main modular
// import { Biodata, Text } from './components'
// import { TextOnceMore } from './components'
// interface UserData {
//   id: number,
//   name: string,
//   address: string
// }
// interface Props<T> {
//   children: T
// }

const App = () => {
  return (
    <Register/>
  )
}

export default App

// day 3
// const App = () => {
//   const [input, setInput] = useState<string>();
//   const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
//     setInput(event.target.value)
//     console.log('on change',event.target.value)
//   }
//   const handleBlurInput = (event: ChangeEvent<HTMLInputElement>) => {
//     console.log('on blur',event.target.value)
//   }
//   const handleFocusInput = (event: ChangeEvent<HTMLInputElement>) => {
//     console.log('on focus',event.target.value)
//   }
//   return (
//     <>
//       <input 
//       type={'text'} 
//       value={input}
//       onChange={handleChangeInput} 
//       onBlur={handleBlurInput} 
//       onFocus={handleFocusInput}/>
//       <p>Testing</p>
//     </>
//   )
// }

// <form onSubmit={}>
// <input 
// type={'text'} 
// value={input}
// onChange={handleChangeInput} 
// onBlur={handleBlurInput} 
// onFocus={handleFocusInput}/>
// <p>Testing</p>
// </form> 

// day 1 day 2
// function App() {
  
//   const name = 'Aldi Andalan'

//   const [bootcamp, setBootcamp] = useState<string>();
//   const [address, setAddress] = useState<string>();
//   const [batch, setBatch] = useState<string>();
//   const [count, setCount] = useState<number>(0);
//   const [open, setOpen] = useState<boolean>(false);
//   const [users, setUsers] = useState<UserData[]>([])

//   const handleChangeBootcamp = () => {
//     setBootcamp((prevState) => `Kelas ${prevState}`)
//   }

//   const handleChangeCount = () => {
//     setCount((prevState) => prevState + 1)
//     // setCount(count + 1)
//   }

//   const handleOpen = () => {
//     setOpen((prevState) => !prevState)
//   }

//   const handleAddUser = () => {
//     setUsers((prevState) => [...prevState, {
//       id: prevState.length + 1,
//       name: 'Aldi',
//       address: 'Depok'
//     }])
//   }


//   return (
//     <> 
//       <div>
//       a
//       </div>
//       <div>
//       b
//       </div>
//       <div>
//         <p className={'text'}>Ini adalah sebuah contoh component created by {name}</p>
//         <p>ini adalah value dari state 1: {bootcamp}</p>
//         <p>ini adalah value dari state 2: {address}</p>
//         <p>ini adalah value dari state 3: {batch}</p>
//         <p>hitungan: {count}</p>
//         <p>Buka Terbuka {open}</p>
//         <Text content=''/>
//         <TextOnceMore/>

//         <button onClick={handleChangeBootcamp}>Ubah Isi State 1 </button>
//         <button onClick={()=> setAddress('Jakarta')}>Ubah Isi State 2 </button>
//         <button onClick={()=> setBatch('Barcelona')}>Ubah Isi State 3 </button>
//         <button onClick={handleChangeCount}>Naikan Hitungan</button>
//         <button onClick={handleOpen}>Buka Modal</button>
//         {open && (
//           <p>Buka Terbuka</p>
//         )}

//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Address</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id}>
//                 <td>{user.id}</td>
//                 <td>{user.name}</td>
//                 <td>{user.address}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <button onClick={handleAddUser}>Isi Data User</button>

//         <h1>Props</h1>
//         <Text content={'This is props example'}/>

//         <Biodata
//           name={'Aldi'}
//           age={21}
//           status={'single'}
//           child={<Text content={'This is another component'}/>}
//         />
//       </div>

//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1> 
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// day 1 original from react
          // <> </> is react fragment, coz react forbids multiple tag fragments 
          // react is client side only rendering, not good for SEO, js not found di browser, maka dari itu pakai NEXT.JS agar server side rendering
          // const App = () => {}

// day 2
  // expmple of react hook
  // const [count, setCount] = useState(0)

  //user handler handleAddUser (main)
    //, ...prevState
    //setUsers(users.push)

  // alternative user hadnler
  // const handleAddUser = () => {
  //   const newArray = [...users, {
  //     id: users.length + 1,
  //     name: 'Aldi',
  //     address: 'Depok'
  //   }]

  //   setUsers(newArray)
  // }

// day 4
// import { Button } from 'antd';

// const App = () => (
//   return (
//   <>
//     <Button type="primary">Primary Button</Button>
//     <Button>Default Button</Button>
//     <Button type="dashed">Dashed Button</Button>
//     <Button type="text">Text Button</Button>
//     <Button type="link">Link Button</Button>
//   </>
//   )
// );


