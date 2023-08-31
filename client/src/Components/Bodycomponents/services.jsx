import React from 'react';
import { Link } from 'react-router-dom';
import country from "../images/country.png";
import dollar from "../images/dollar.png";
import drive from "../images/drive.png";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



export default function Services(){
    return(
        <>
            <div className='container mx-auto p-6 mt-32'>
                <div className="grid lg:grid-cols-2 justify-start gap-7 px-16">
                    <div className="">
                        <h2 className="font-sans font-bold text-2xl mb-2">Why choose us</h2>
                        <h1 className="font-sans font-bold text-5xl mb-6">Best valued deals you will ever find</h1>
                        <p className="text-base font-semibold text-[#706f7b] font-sans mb-10">Discover the best 
                        deals you'll ever find with our unbeatable offers. We're dedicated to providing you 
                        with the best value for your money, so you can enjoy top-quality services and products without 
                        breaking the bank. Our deals are designed to give you the ultimate renting experience, 
                        so don't miss out on your chance to save big.</p>
                        <Link to={'/contact'} className="px-8 py-4 font-sans mb-10 font-bold rounded bg-orange text-white opacity-95 hover:opacity-100 hover:shadow-lg">
                            Get Details <ChevronRightIcon/>
                        </Link>
                    </div>
                    <div className="grid grid-rows-3 gap-4">
                        <div className="grid lg:grid-cols-3">
                            <div className="flex justify-center">
                                <img src={country} alt=""/>
                            </div>
                            <div className="col-span-2 mt-4">
                                <h3 className="font-bold fot-sans text-2xl">Cross Country Drive</h3>
                                <p className="text-[#706f7b] font-sans font-semibold">Take your driving experience to the next level with our top-notch 
                                vehicles for your cross-country adventures.</p>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-3">
                            <div className="flex justify-center">
                                <img src={dollar} alt=""/>
                            </div>
                            <div className="col-span-2 mt-4">
                                <h3 className="font-bold fot-sans text-2xl">All Inclusive Pricing</h3>
                                <p className="text-[#706f7b] font-sans font-semibold">Get everything you need in one convenient, transparent 
                                price with our all-inclusive pricing policy.</p>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-3">
                            <div className="flex justify-center">
                                <img src={drive} alt=""/>
                            </div>
                            <div className="col-span-2 mt-4">
                                <h3 className="font-bold fot-sans text-2xl">No Hidden Charges</h3>
                                <p className="text-[#706f7b] font-sans font-semibold">Enjoy peace of mind with our no hidden charges policy. 
                                We believe in transparent and honest pricing.</p>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </>
    )
}