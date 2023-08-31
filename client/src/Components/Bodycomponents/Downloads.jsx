import React from 'react';
import gplay from "../images/gplay.svg";
import appstore from "../images/appstore.svg";
import benz from "../images/benz.jpg";

export default function Downloads(){

 


    return(
        <>
            <div className="container mx-auto p-6 justify-center mt-28 mb-20">
                <div className="grid lg:grid-cols-2 gap-4 px-16">
                    <div className="">
                        <img className="" src={benz} alt="" />
                    </div>
                    <div className="w-3/4 text-center">
                        <h1 className='text-4xl font-bold font-sans mb-4'>Download our app to get most out of it</h1>
                        <p className="text-base text-[#706f7b]  font-sans">
                        Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. 
                        Incommode so intention defective at convinced. Led income months itself and houses you.
                        </p>
                        <div className="grid lg:grid-cols-2 gap-4 my-6">
                            <a target='_blank' href="https://play.google.com/store/search?q=carrental&c=apps"><img className="transform hover:-translate-x-2 hover:-translate-y-2 transition duration-300 hover:shadow-xl" style={{cursor:"pointer"}} src={gplay} alt=""/></a>
                            <a target='_blank' href="https://www.apple.com/in/search/carrental?src=globalnav"><img className="transform hover:-translate-x-2 hover:-translate-y-2 transition duration-300 hover:shadow-xl" style={{cursor:"pointer"}} src={appstore} alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}