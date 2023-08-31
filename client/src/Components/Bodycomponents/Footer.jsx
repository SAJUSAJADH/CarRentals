import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';


export default function Footer(){
    return(
        <>
            <div className="bg-[#f8f8f8] mt-10">
                <div className="container mx-auto p-6">
                    <div className="grid lg:grid-cols-4 gap-6">
                        <div className="">
                            <h1 className="font-sans font-bold text-3xl">CAR <span className='text-xl font-semibold font-sans'>RENTAL</span></h1>
                            <p className="font-sans text-base text-[#706f7b] my-2">We offers a big range of vehicles for all your driving needs. 
                            We have the perfect car to meet your needs.</p>
                            <h2 style={{cursor:"pointer"}} className="font-sans font-bold text-lg my-1 hover:text-orange"><PhoneIcon/> (123) -456-789</h2>
                            <h2 style={{cursor:"pointer"}} className="font-sans font-bold text-lg my-1 hover:text-orange"><EmailIcon/> carrentals@gmail.com</h2>
                            <h2 style={{cursor:"pointer"}} className="font-sans text-lg my-1 hover:text-orange">Design by XpeedStudio</h2>
                        </div>
                        <div className="">
                            <h2 className="font-sans font-bold text-2xl">COMPANY</h2>
                            <p style={{cursor:"pointer"}} className="font-sans text-lg mt-1 hover:text-orange">Kerala</p>
                            <p style={{cursor:"pointer"}} className="font-sans text-lg mt-1 hover:text-orange">Careers</p>
                            <p style={{cursor:"pointer"}} className="font-sans text-lg mt-1 hover:text-orange">Mobile</p>
                            <p style={{cursor:"pointer"}} className="font-sans text-lg mt-1 hover:text-orange">Blog</p>
                            <p style={{cursor:"pointer"}} className="font-sans text-lg mt-1 hover:text-orange">How we work</p>
                        </div>
                        <div className="">
                            <h2 className="font-sans font-bold text-2xl">WORKING HOURS</h2>
                            <p className="font-sans text-lg mt-1">Mon - Fri: 9:00AM - 9:00PM</p>
                            <p className="font-sans text-lg mt-1">Sat: 9:00AM - 19:00PM</p>
                            <p className="font-sans text-lg mt-1">Sun: Closed</p>
                        </div>
                        <div className="">
                            <h2 className="font-sans font-bold text-2xl">SUBSCRIPTION</h2>
                            <p className="font-sans text-lg mt-1">Subscribe your Email address for latest news & updates.</p>
                            <div className="grid grid-rows-2 gap-2 mt-2">
                                <input type="email" placeholder='Enter Email Address' className="focus:outline-none text-center  py-3 px-10 bg-[#ececec]"></input>
                                <button className="bg-orange text-white font-bold hover:shadow-2xl px-24 py-3 mt-1">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}