import React, { useContext, useEffect, useState } from 'react';
import diaz from  '../Components/images/diaz.png';
import hunt from  '../Components/images/hunt.png';
import lauren from  '../Components/images/lauren.png';
import martin from  '../Components/images/martin.png';
import ross from  '../Components/images/ross.png';
import luke from  '../Components/images/luke.png';
import Banner from '../Components/Bodycomponents/Banner';
import Footer from '../Components/Bodycomponents/Footer';
import Navbar from '../Components/Navbarcomponents/Navbar';
import { UserContext } from '../Context/Clientcontext';
import Accountbar from '../Components/Navbarcomponents/Accountbar';
import LinearColor from '../Components/Bodycomponents/linearprogress';




export default function Team(){

    const members = [
        {name: "Michael Diaz", role: "Salesman", image: diaz},
        {name: "Caitlyn Hunt", role: "Business Owner", image: hunt},        
        {name: "Lauren Rivera", role: "Photographer", image: lauren},
        {name: "Martin Rizz", role: "Car Detailist", image: martin},
        {name: "Brianna Ross", role: "Manager", image: ross},
        {name: "Luke Miller", role: "Mechanic", image: luke}        
    ]

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
            <div className="container mx-auto my-24">
                <div className="grid lg:grid-cols-3 gap-6">
                    {members.map((member,index)=>(
                        <div key={index} className="bg-white flex flex-col  shadow-2xl rounded">
                        <div className=" flex justify-center">
                            <img src={member.image} alt="" />
                        </div>
                        <div className="text-center">
                            <h2 className='font-sans font-bold text-xl py-2'>{member.name}</h2>
                        </div>
                        <div className="text-center">
                            <h3 className="text-base font-bold text-[#777] pb-2">{member.role}</h3>
                        </div>  
                        </div>
                    ))}
                </div>
            </div>
            <Banner/>
            <Footer/>
            </div>}
        </>
    )
}