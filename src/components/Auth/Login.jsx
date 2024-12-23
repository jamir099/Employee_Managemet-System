import React, { useState } from "react";  

const Login = ({handleLogin}) =>{

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const submitHandler =(e)=>{
        e.preventDefault()
        handleLogin(email,password)
        // console.log(email);
        // console.log(password);

        setEmail('')
        setPassword('')
    }

    return(
        <div className='h-screen w-screen flex items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-20' >
                <form 
                onSubmit={(e) =>{
                    submitHandler(e)
                }}
                className='flex flex-col items-center justify-center'>
                    <input required
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder-gray-400' 
                    type="email" placeholder="Enter your email" />
                    <input required
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full m-3 placeholder-gray-400' 
                    type="password" placeholder="Your Password" />
                    <button className='mt-5 text-white outline-none border-none border-2 bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder-white'>
                        Login</button>
                </form>
            
            </div>        
        </div>
    )
}

export default Login