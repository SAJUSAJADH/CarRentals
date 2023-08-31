import React from 'react';
import car from "../images/selectcar.png";
import operator from "../images/operator.png";
import drive from "../images/drive.png";


export default function Cards(){
    return(
        <>
            <div className="container justify-center mx-auto mb-40">
            <div className="text-center mb-32">
                <h2 className="font-bold text-2xl my-6">
                    Plan your trip now
                </h2>
                <h1 className="font-bold text-5xl font-[poppins,sans-serif] my-6">
                    Quick & easy car rental
                </h1>
            </div>
            <div className="grid lg:grid-cols-3 gap-4">
                <div className="bg-white w-full flex flex-col justify-center items-center">
                    <img src={car} alt=""/>
                    <div className="text-center w-3/5">
                        <h2 className="text-3xl font-bold mb-6">Select car</h2>
                        <p className="font-[Rubik,sans-serif] text-[#706f7b]">WE offers abig range of vehicles for all
                        your driving needs. We have the perfect car to meet your needs</p>
                    </div>              
                </div>
                <div className="bg-white w-full flex flex-col justify-center items-center">
                    <img src={operator} alt=""/>
                    <h2 className="text-3xl font-bold mb-6">Contact operator</h2>
                    <div className="text-center w-3/5 ">
                        <p className="font-[Rubik,sans-serif] text-[#706f7b]">Our knowledgeable and friendly operators are always 
                        ready to help with any questions or concerns</p>
                    </div>     
                </div>
                <div className="bg-white w-full flex flex-col justify-center items-center">
                    <img src={drive} alt=""/>
                    <div className="text-center w-3/5 ">
                        <h2 className="text-3xl font-bold mb-6">Let's drive</h2>
                        <p className="font-[Rubik,sans-serif] text-[#706f7b]">Whether you're hitting the open road, we've 
                        got you covered with our wide range of cars</p>
                    </div>
                    
                </div>
            </div>
            </div>
        </>
    )
}