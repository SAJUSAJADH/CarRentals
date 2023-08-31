import React, { useContext, useState, useEffect} from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import fb from "../Components/images/fb.png";
import google from "../Components/images/google.png";
import axios from 'axios';
import Navbar from '../Components/Navbarcomponents/Navbar';
import { UserContext } from '../Context/Clientcontext';
import Publicroute from '../middleware/publicroute';
import LinearColor from '../Components/Bodycomponents/linearprogress';



export default function Login(){

   Publicroute();

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(UserContext);
    const [checkUser, setCheckUser] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const {user} = useContext(UserContext);

    useEffect(()=>{
        const timer = setTimeout(() => {
            setIsUser(true)
        }, 1000);

        return () => {
            clearTimeout(timer);
          };
    },[user])


    const Submit = async (event) => {
        event.preventDefault();

        try{
            const {data} = await axios.post('/login',{username: email, password: password});
            if(data?.username === email){
                console.log(data)
                setUser(data);
                navigate('/account')
            }else{
                console.log('unauthorized user')
                setCheckUser(true);
                setTimeout(() => {
                    setCheckUser(false)
                }, 2000);
            }

        }catch(e){
            console.log(e)
        }
        
    }

    return(
        <>
        {!isUser && <LinearColor/>}
        {isUser && 
            <div className="">
            <Navbar/>
            <div className="flex items-center justify-center ">
                <div className="max-w-screen-md p-4 mt-16">
                    <form method="POST">
                        <div className="">
                        <h2 className="text-xl font-bold font-sans my-6">Sign in </h2>
                        <label className="text-base font-semibold font-sans">Email address</label><br/>
                        <input value={email} onChange={ev=>setEmail(ev.target.value)} type='email' className="text-lg my-2 font-semibold focus:outline-none font-sans rounded py-2 px-11 bg-[#f2f2f2] " placeholder='youremail@example.com'></input><br/>
                        <label className="text-base font-semibold font-sans">Password</label><br/>
                        <input value={password} onChange={ev=>setPassword(ev.target.value)} type='password' className="text-lg my-2 font-semibold focus:outline-none font-sans rounded py-2 px-11 bg-[#f2f2f2] " placeholder='password'></input>
                        {checkUser && <p className='text-base text-orange italic'>Invalid username or password</p>}
                        <div className="my-4 w-full flex justify-center">
                            <Link onClick={Submit}  className="px-14 py-3 bg-orange opacity-95 text-white hover:opacity-100 rounded hover:shadow-xl font-bold z-0">Sign in</Link>
                        </div>
                        <div className="my-4 hidden">
                            <p className="text-base  text-[#777]">----------or use one of these options---------</p>
                            <div className="flex justify-center gap-6 my-4 ">
                                <div className=''>
                                    <img className="w-12 h-12 mb-4" src={fb} alt=""/>
                                </div>
                                <div className=''>
                                    <img className="w-12 h-12 mb-4" src={google} alt=""/>
                                </div>
                            </div>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>}
        </>
    )
}