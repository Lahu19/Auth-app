import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Registration = () => {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('')
    let [date, setDate]= useState('')
    let [password, setPassword] = useState('')
    let [cnfPassword, setCnfPassword] = useState('')
    let navigate = useNavigate()

    let submitForm =()=>{
        let payload = {
            name,date,email,cnfPassword
        }
        if(!name ||!date || !email || !cnfPassword){
            alert("To register Fill all the fields..!")
        }
        else{
            if(password === cnfPassword ){
                axios.post('http://localhost:4001/register', payload)
            .then((e)=>{
                alert(e.data);
                navigate("/")
            })
            .catch((e)=>{
                alert("problem in sending data to the Backend.!");
            })
            }
            else{
                alert("both password should be matched..")
            }
            
        }
    }

    return (
        <div className="flex justify-center py-10">
    <div className='max-w-[800px] h-auto   mx-auto shadow-xl rounded-lg p-10 bg-slate-900 backdrop-blur-md scale-100'>
        <h1 className='text-center font-bold text-3xl mb-6 text-white'>Registration</h1>
        
        <div className='border max-w-[500px] mx-auto p-8 rounded-md bg-white shadow-md'>
        <label for="name">Enter Full Name</label>
            <input
                className='w-full bg-slate-200 border-2  text-black placeholder-black rounded-md px-4 py-2 mb-5 focus:outline-none focus:border-violet-500'
                
                type='text'
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <label for="date">Choose DOB</label>
            <input
                className='w-full bg-slate-200 border-2  text-black placeholder-black rounded-md px-4 py-2 mb-5 focus:outline-none focus:border-violet-500'
                type='date'
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <label for="email">Entern Your Email</label>
            <input
                className='w-full bg-slate-200 border-2  text-black placeholder-black rounded-md px-4 py-2 mb-5 focus:outline-none focus:border-violet-500'
                type='email'
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <label for="pass">Enter your Password</label>
            <input
                className='w-full bg-slate-200 border-2  text-black placeholder-black rounded-md px-4 py-2 mb-5 focus:outline-none focus:border-violet-500'
                type='password'
                id="pass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <label for="cpass">Retype Password</label>
            <input
                className='w-full bg-slate-200 border-2  text-black placeholder-black rounded-md px-4 py-2 mb-5 focus:outline-none focus:border-violet-500'
                type='password'
                value={cnfPassword}
                onChange={(e) => setCnfPassword(e.target.value)}
                required
            />
            
            <button
                className='bg-green-500 text-white font-semibold px-6 py-2 rounded-md w-full hover:bg-green-800 transition duration-200'
                onClick={submitForm}
            >
                Register Me
            </button>

            <p className='mt-5 text-center text-gray-700'>
                Already have an account?{' '}
                <Button variant='outlined' className='text-blue-500 hover:text-blue-700'>
                    <Link to='/' className='hover:underline'>Sign In</Link>
                </Button>
            </p>
        </div>
    </div>
</div>





    )
}

export default Registration