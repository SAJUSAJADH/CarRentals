import { useContext, useEffect, useState } from 'react'
import Accountbar from '../Components/Navbarcomponents/Accountbar'
import axios from 'axios'
import audi from "../Components/images/audi.jpg";
import toyota from "../Components/images/toyota.jpg";
import bmw from "../Components/images/bmw.jpg";
import passat from "../Components/images/passat.jpg";
import benz from "../Components/images/benz.jpg";
import golf from "../Components/images/golf.jpg";
import Footer from "../Components/Bodycomponents/Footer"
import LinearColor from '../Components/Bodycomponents/linearprogress';
import { UserContext } from '../Context/Clientcontext';
import { useNavigate } from 'react-router-dom';
import Privateroute from '../middleware/privateroute';


export default function Booking(){

    Privateroute();
    const [checkUser, setCheckUser] = useState(false);
    const [bookings, setBookings] = useState([]);
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    

    useEffect(()=>{
        const timer = setTimeout(() => {
            setCheckUser(true)
        }, 1000);

        return () => {
            clearTimeout(timer);
          };
    },[user])


    useEffect(()=>{
        axios.get('/bookings').then((response)=>{
            //console.log(response.data)
            setBookings(response.data)
        })
    },[])

    const Cars = [
        {name: "Audi A1 S-Line", image: audi},
        {name: "VW Golf 6", image: golf},
        {name: "Toyota Camry", image:toyota},
        {name: "BMW 320 ModernLine", image: bmw},
        {name: "Mercedes-Benz GLK", image: benz},
        {name: "VW Passat CC", image: passat},
    ]

    
    const handleCancelBooking = (bookingId) => {
        axios.post('/cancel',{bookingId}).then((response) => {
          console.log('Booking canceled:', response.data);
          window.location.reload();
        });
      };
    

    return(
        <>
        {!checkUser && <LinearColor/>}
        {checkUser && 
            <div className="">
            <Accountbar/>
            <div className="container mx-auto py-4 flex justify-center md:justify-start">
                <h2 className="text-xl font-semibold italic">Booking History</h2>
            </div>
            <div className="flex flex-col min-h-screen">
            <div className="flex-grow container mx-auto">
            <div className="grid lg:grid-cols-3 space-x-3">
                {bookings?.map((booking,index)=>(
                    <div key={index} className="text-center z-30 shadow-xl py-4 px-2">
                        <p className="font-semibold italic text-base hover:text-orange cursor-pointer">{booking.firstname} {booking.lastname}</p>
                        <p className="font-semibold italic text-base hover:text-orange cursor-pointer">{booking.email}</p>
                        <p className="font-semibold italic text-base hover:text-orange cursor-pointer">{booking.phone}</p>
                        <div className="grid grid-cols-2 py-2">
                            <div>
                                <p className="font-semibold italic text-base hover:text-orange cursor-pointer">{booking.pickDate} - {booking.dropDate}</p>
                                <p className="font-semibold italic text-base hover:text-orange cursor-pointer">{booking.pickPlace} - {booking.dropPlace}</p>
                                <p className="font-semibold italic text-base hover:text-orange cursor-pointer">{booking.pickTime} - {booking.dropTime}</p>
                            </div>
                            <div>
                                {Cars.map((car,index)=>(
                                    <div key={index}>{booking.carType === car.name && 
                                        <img src={car.image} alt=''/>
                                    }</div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button onClick={() => handleCancelBooking(booking._id)} className="bg-orange rounded opacity-90 hover:opacity-100 px-4 py-2 text-white text-base font-bold"> Cancel</button>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            <Footer/>
            </div>
            </div>}
        </>
    )
}