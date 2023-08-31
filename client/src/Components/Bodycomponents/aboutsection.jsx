import React from 'react';
import About from '../images/about.jpg';
import Truck from "../images/truck.png";
import garrage from "../images/garrage.png";
import outlet from "../images/outlet.png";


export default function AboutSection(){
    return(
        <>
            <div className="container mx-auto p-6 my-20">
                <div className="grid lg:grid-cols-2 ">
                    <div className="flex justify-center">
                        <img className="z-20 shadow-lg rounded" src={About} alt=""/>
                    </div>
                    <div className="w-full md:w-3/4 text-center md:text-start">
                        <h2 className="font-sans font-bold my-4 text-2xl">About Company</h2>
                        <h1 className="font-sans font-bold my-6 text-4xl">You start the engine and your adventure begins</h1>
                        <p className="text-base my-6 text-[#706f7b] font-sans">Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. 
                        Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. 
                        Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
                        <div className="flex justify-center md:justify-start gap-6 mt-10">
                            <img src={Truck} alt="" className=""/>
                            <img src={garrage} alt="" className=""/>
                            <img src={outlet} alt="" className=""/>                                               
                        </div>
                        <p className="text-xl font-bold mt-10 text-[#706f7b]">We are at your service. Feel free to contact.</p>
                    </div>
                </div>
            </div>
        </>
    )
}