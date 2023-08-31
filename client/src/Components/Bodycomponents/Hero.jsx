import React,{useRef} from 'react';
import car from "../images/car.png"
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


export default function Hero({handleBookRideClick}){
    return(
        <>
            <section id="hero">
                <div className="container flex flex-col-reverse md:flex-row items-center  px-6 mx-auto mt-10 space-x-0 md:space-y-0">
                    <div className='flex flex-col mb-32 space-y-12  md:w-1/2'>
                    <div className="lg:px-16">
                        <h2 className="mb-4 max-w-md text-3xl font-bold text-center md:text-left lg:mt-24">Plan your trip now</h2>
                        <h1 className="mb-10 max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                            Save <span className="text-orange">big</span> with our car rental
                        </h1>
                        <p className="mb-16 font-sans text-[gray] text-xl text-center md:text-left">Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
                        <div className='flex flex-col-reverse md:flex-row items-center gap-4'>
                            <Link onClick={handleBookRideClick} className="text-white bg-orange font-bold px-14 py-5 rounded opacity-95 hover:opacity-100 hover:shadow-lg">Book Ride <CheckCircleIcon/></Link>
                            <Link to={'/about'} className="text-white border border-black bg-black font-bold px-12 py-5 rounded hover:bg-white hover:text-black">Learn More <ChevronRightIcon/></Link>
                        </div>
                    </div> 
                    </div>
                    <div className='hidden md:flex flex-col mb-32 space-y-12  md:w-1/2 '>
                        <img className="" src={car} alt=""/>
                    </div>
                </div>
            </section>
        </>
    )
}