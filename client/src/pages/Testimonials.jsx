import React, { useContext, useEffect, useState } from 'react';
import Banner from '../Components/Bodycomponents/Banner';
import Footer from '../Components/Bodycomponents/Footer';
import Reviews from '../Components/Bodycomponents/Reviews';
import Navbar from '../Components/Navbarcomponents/Navbar';
import { UserContext } from '../Context/Clientcontext';
import Accountbar from '../Components/Navbarcomponents/Accountbar';
import LinearColor from '../Components/Bodycomponents/linearprogress';



export default function Testimonials(){

    const {user} = useContext(UserContext);
    const [checkUser, setCheckUser] = useState(false);

    useEffect(()=>{
        const timer = setTimeout(() => {
            setCheckUser(true)
        }, 1000);

        return () => {
            clearTimeout(timer);
          };
    },[user])


    return(
        <>
           {!checkUser && <LinearColor/>}
            {checkUser && 
            <div className="">
                {!user ? <Navbar/> : <Accountbar/>}
            <div className="mt-32">
                <Reviews/>
            </div>
            <div className="mt-32">
                <Banner/>
            </div>
            <div className="mt-32">
                <Footer/>
            </div>
            </div>}
        </>
    )
}