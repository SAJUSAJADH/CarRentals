import React, { useContext, useEffect, useState } from 'react';
import AboutSection from '../Components/Bodycomponents/aboutsection';
import Cards from '../Components/Bodycomponents/cards';
import Banner from '../Components/Bodycomponents/Banner';
import Footer from "../Components/Bodycomponents/Footer";
import Navbar from '../Components/Navbarcomponents/Navbar';
import { UserContext } from '../Context/Clientcontext';
import Accountbar from '../Components/Navbarcomponents/Accountbar';
import LinearColor from '../Components/Bodycomponents/linearprogress';



export default function About(){

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

    return(<>
        {!checkUser && <LinearColor/>}
        {checkUser && 
            <div className="">
                {!user ? <Navbar/> : <Accountbar/>}
                <AboutSection/>
                <Cards/>
                <Banner/>
                <Footer/>
        </div>}
        </>
    )
}