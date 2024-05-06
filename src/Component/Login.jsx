import React, { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../Context/UserContext';

function Login() {

    const [userName,setUsername]=useState("");
    const[password, setPassword] = useState("");

    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName,password})
        console.log(userName);
    }
    console.log(userName)
    
  return (
    <div>
        <h1>Login field</h1>
        <input 
        type="text"
        value={userName}
        onChange={(e)=>{setUsername(e.target.value)}}
        placeholder='username'
          />

          <input 
          type="password"
          value={password} 
          onChange={(e)=>{setPassword(e.target.value)}}
          placeholder='password'
          />
          <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login