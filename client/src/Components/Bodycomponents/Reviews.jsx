import React from 'react';
import potter from "../images/potter.jpg";
import weisley from "../images/weisley.jpg";





export default function Reviews(){
    return(
        <>
            <div className=" bg-[#f8f8f8] w-full z-10  mt-4">
                <div className="container mx-auto p-6  text-center my-4">
                        <h2 className='font-sans text-3xl font-semibold mb-2'>Reviewed by People</h2>
                        <h1 className="font-sans text-5xl font-bold mb-4">Client's Testimonials</h1>
                        <div className='flex justify-center mb-4'>
                            <p className="font-sans text-base font-semibold text-[#706f7b]  w-2/4">
                            Discover the positive impact we've made on the our clients by reading through their testimonials. 
                            Our clients have experienced our service and results, and they're eager to share their positive 
                            experiences with you.
                            </p>
                        </div> 
                </div>
                <div className="container mx-auto justify-between w-3/4 pb-16">
                    <div className="grid lg:grid-cols-2 gap-8 ">
                            <div className="bg-white font-sans p-16 text-center z-30 shadow-xl">
                                <h2 className="text-2xl font-semibold mb-10">"We rented a car from this website and had an amazing experience! 
                                The booking was easy and the rental rates were very affordable. "</h2>
                                <div className="flex items-center">
                                    <img src={potter} alt="Your Image" className="w-16 h-16 rounded-full"/>
                                    <span className="ml-4 font-bold text-xl">Parry Potter</span>
                                    <span className="ms-auto text-6xl font-mono text-orange">"</span>
                                </div>
                            </div>
                            <div className="bg-white font-sans p-16 text-center z-30 shadow-xl">
                                <h2 className="text-2xl font-semibold mb-10">"The car was in great condition and made our trip even better. 
                                Highly recommend for this car rental website!"</h2>
                                <div className="flex items-center">
                                    <img src={weisley} alt="Your Image" className="w-16 h-16 rounded-full"/>
                                    <span className="ml-4 font-bold text-xl">Ron Reizley</span>
                                    <span className="ms-auto text-6xl font-mono text-orange">"</span>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}