import React, { useContext, useEffect, useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Banner from '../Components/Bodycomponents/Banner';
import Footer from '../Components/Bodycomponents/Footer';
import Navbar from '../Components/Navbarcomponents/Navbar';
import { UserContext } from '../Context/Clientcontext';
import Accountbar from '../Components/Navbarcomponents/Accountbar';
import LinearColor from '../Components/Bodycomponents/linearprogress';

export default function Contact(){

    const {user} = useContext(UserContext)
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState(user?.username);
    const [Feedback, setFeedBack] = useState('');
    const [checkUser, setCheckUser] = useState(false);
    const [message, setMessage] = useState(false);
    const [doneFeedback, setDoneFeedback] = useState(false);

    
    useEffect(()=>{
        setEmail(user?.username)
        const timer = setTimeout(() => {
            setCheckUser(true)
        }, 1000);

        return () => {
            clearTimeout(timer);
          };
    },[user])

    const Handlesubmit = async (ev)=> {
        ev.preventDefault();
        try{
            if(!fullname || !email || !Feedback){
                setMessage(true);
                setTimeout(() => {
                    setMessage(false)
                }, 2000);        
            }else{
                setDoneFeedback(true);
                setTimeout(() => {
                    setDoneFeedback(false)
                }, 2000);
                setFullname('');
                setEmail('');
                setFeedBack('');
            }
        }catch(e){
            console.log(e)
        }
    }


    return(
        <>
            {!checkUser && <LinearColor/>}
            {checkUser && 
            <div className="">
                {!user ? <Navbar/> : <Accountbar/>}
            <div className="container mx-auto p-6 my-24">
                <div className="grid lg:grid-cols-2 gap-10 z-20">
                    <div className="md:w-2/3 text-center">
                        <h2 className="font-sans font-bold text-5xl py-2">Need additional information?</h2>
                        <h3 className="font-sans font-semibold text-base text-[#777] py-2">A multifaceted professional skilled in multiple fields of research, 
                        development as well as a learning specialist. Over 15 years of experience.</h3>
                        <h4 style={{cursor:"pointer"}} className="text-lg font-sans font-bold py-2 hover:text-orange"><PhoneIcon/> (123)- 456 789</h4>
                        <h4 style={{cursor:"pointer"}} className="text-lg font-sans font-bold  hover:text-orange"><EmailIcon/> carrentals@gmail.com</h4>
                        <h4 style={{cursor:"pointer"}} className="text-lg font-sans font-bold py-2 hover:text-orange"><LocationOnIcon/> Kerala, India</h4>
                    </div>
                    <div className="flex flex-col justify-center">                   
                            <label className="text-lg font-bold pt-3 font-sans">Full Name</label>
                                <input value={fullname} onChange={(ev)=>{setFullname(ev.target.value)}} className="md:w-3/4 focus:outline-none rounded bg-[#f2f2f2] h-1/3 py-2 px-4" type="text" placeholder='E.g: &quot;Joe Shmoe&quot;'/>
                            <label className="text-lg font-bold pt-3 font-sans">Email</label>
                                <input value={email} onChange={(ev)=>{setEmail(ev.target.value)}} className="md:w-3/4 focus:outline-none rounded bg-[#f2f2f2] h-1/3 py-2 px-4" type="email" placeholder='youremail@example.com' />
                            <label className="text-lg font-bold pt-3 font-sans">Tell us about it</label>
                                <textarea value={Feedback} onChange={(ev)=>{setFeedBack(ev.target.value)}} className="md:w-3/4 focus:outline-none rounded bg-[#f2f2f2] h-2/3 px-6 " rows={7} type="text" placeholder='Write Here..' id="myTextarea"/>                            
                            {message && <p className="text-orange text-base italic">Please fill all fields</p>}
                            {doneFeedback && <p className="text-green-600 text-base italic">Thanks for you feedback</p>}
                            <button onClick={Handlesubmit} className="bg-orange w-3/4 opacity-95 hover:opacity-100 hover:shadow-2xl text-white text-xl font-bold font-sans my-4 py-4 rounded"><ChatBubbleIcon/> Send message</button>
                    </div>
                </div>
            </div>
            <Banner/>
            <Footer/>
            </div>}
        </>
    )
}