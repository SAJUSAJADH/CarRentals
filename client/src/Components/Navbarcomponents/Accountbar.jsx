import React, { useContext, useState } from 'react';
import logo from "../images/carlogo.png"
import Dropdown from './accountdropdown';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/Clientcontext';



export default function Accountbar(){

    const [isToggle, setIstoggle] = useState(false);
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);

    const menus = [
        {name: 'Home', href: "/account"},
        {name: 'About', href: "/about"},
        {name: 'Models', href: "/model"},
        {name: 'Testimaonials', href: "/testimonials"},
        {name: 'Team', href: "/team"},
        {name: 'Contact', href: "/contact"},
        {name: 'bookings', href: "/account/bookings"},
    ]



    

    const open =()=>{
        setIstoggle(!isToggle)
    }

    const handleOptionClick = async () => {
        await axios.post('/logout').then(()=>{
          setUser(null);
          navigate('/');
        })
      }

    return(
        <>
            <nav className="relative container mx-auto p-6 bg-transparent">
                <div className="flex items-center justify-around space-x-20">
                    <div className="pt-2">
                        <img style={{cursor:"pointer"}} className="w-40 h-12" src={logo} alt="c"/>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        {menus.map((menu,index)=>(
                            index != menus.length -1 && 
                            <a className="font-bold text-lg font-sans hover:text-orange" key={index} href={menu.href}>{menu.name}</a>
                        ))}
                    </div>
                    <div className="hidden md:flex space-x-4">
                            <Dropdown/>
                    </div>
                    <button onClick={open} id="menu-btn" className={isToggle ? 'open block hamburger md:hidden focus:outline-none' : 'block hamburger md:hidden focus:outline-none'}>
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div>
                <div className="md:hidden z-50">
                    <div onClick={open} id="menu" className={isToggle ? "absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md z-50" : "absolute hidden flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md" }>
                        {menus.map((menu,index)=>(
                            <a key={index} href={menu.href}>{menu.name}</a>
                        ))}
                        <p onClick={handleOptionClick}>Logout</p>
                     </div>
                </div>
            </nav>
        </>
    )
}