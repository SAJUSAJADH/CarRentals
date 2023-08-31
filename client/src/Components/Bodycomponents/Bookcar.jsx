import React,{useContext, useEffect, useState} from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import audi from "../images/audi.jpg";
import toyota from "../images/toyota.jpg";
import bmw from "../images/bmw.jpg";
import passat from "../images/passat.jpg";
import benz from "../images/benz.jpg";
import golf from "../images/golf.jpg";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { UserContext } from '../../Context/Clientcontext';






export default function Bookcar({isDivVisible, setDivVisible,  carType, pickPlace, dropPlace, pickDate, dropDate}){

    const {user} = useContext(UserContext);
    const [pickTime, setPickTime] = useState('');
    const [dropTime, setDropTime] = useState('');
    const [selectedImage, setSelectedimage] = useState();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [showWarning, setShowwarning] = useState(false);
    const navigate = useNavigate();


    const isReserveDesable = !pickTime || !dropTime || !firstname || !lastname || !age || !phone || !email || !address || !city || !zipcode

    const Cars = [
        {name: "Audi A1 S-Line", image: audi},
        {name: "VW Golf 6", image: golf},
        {name: "Toyota Camry", image:toyota},
        {name: "BMW 320 ModernLine", image: bmw},
        {name: "Mercedes-Benz GLK", image: benz},
        {name: "VW Passat CC", image: passat},
    ]

    useEffect(()=>{
        const CarImage = () =>{
            Cars.map(car=>{
                if(car.name === carType){
                    //console.log(carType)
                    setSelectedimage(car.image);
                }
            })
        }
        CarImage();
    },[carType])

    const ReserveCar = async () => {
        if(isReserveDesable){
            setShowwarning(true);
            const timer = setTimeout(() => {
                setShowwarning(false);
            }, 1500);
        }
        if(!user){
            console.log(user)
            navigate('/login')
        }
        else{
            try{const {data} = await axios.post('/reservation',{carType, pickPlace, dropPlace, pickDate, dropDate, pickTime,dropTime ,firstname,lastname ,age ,phone,email,address,city,zipcode})
            //console.log(data)
            navigate('/account/bookings')
        }catch(e){
                console.log(e)
            }
        }
    }

    return(
        <>
            {isDivVisible && <div className="container border-4 border-white shadow-2xl overflow-x-hidden mx-auto bg-white absolute z-50 w-3/5 flex flex-col justify-center items-center" style={{ top: '170%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <div className="flex justify-between px-4 py-2 bg-orange w-full">
                    <h2 className="font-bold font-sans text-3xl text-white">COMPLETE RESERVATION</h2>
                    <CloseIcon onClick={()=>{setDivVisible(false)}} className="text-white" style={{cursor:"pointer"}}/>
                </div>
                <div className="bg-[#ffeae6]  justify-start py-4 px-4 w-full">
                    <h2 className="font-bold font-sans text-2xl py-2 text-orange"> Upon completing this reservation enquiry, you will receive:</h2>
                    <p className="font-bold font-sans text-base py-2 text-[#777]">Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</p>
                </div>
                <div className="grid lg:grid-cols-2 w-full border-b">
                    <div className="justify-start py-4 px-4 w-full bg-white">
                        <h2 className="text-orange  font-bold font-sans text-xl">Location & Date</h2>
                        <h3 className="py-2 font-bold font-sans text-lg"><CalendarMonthOutlinedIcon className="text-[#000]"/> Pick up Date & Time</h3>
                        <p className="text-base px-2 text-[#777] font-sans">{pickDate} / </p><input value={pickTime} onChange={ev=>setPickTime(ev.target.value)} max={dropTime} className="border-4 focus:outline-none" type="time" id="time" name="time" />
                        <h3 className="py-2 font-bold font-sans text-lg"><CalendarMonthOutlinedIcon className="text-[#000]"/> Drop of Date & Time</h3>
                        <p className="text-base px-2 text-[#777] font-sans">{dropDate} /</p><input value={dropTime} onChange={ev=>setDropTime(ev.target.value)} min={pickTime} className="border-4 focus:outline-none" type="time" id="time" name="time" />
                        <h3 className="py-2 font-bold font-sans text-lg"><LocationOnOutlinedIcon className="text-[#000]"/> Pick up Location</h3>
                        <p className="text-base px-2 text-[#777] font-sans">{pickPlace}</p>
                        <h3 className="py-2 font-bold font-sans text-lg"><LocationOnOutlinedIcon className="text-[#000]"/> Drop of Location</h3>
                        <p className="text-base px-2 text-[#777] font-sans">{dropPlace}</p>
                    </div>
                    <div className="justify-center py-4 px-4 w-full bg-white">
                        <h2 className="font-bold font-sans text-lg">Car - <span className="text-orange font-bold font-sans text-lg" >{carType}</span></h2>
                        <img src={selectedImage} alt=""/>
                    </div>
                </div>
                <h2 className="text-orange py-4 font-bold font-sans text-xl">Personal Information</h2>
                <div className="grid lg:grid-cols-2 w-full bg-white">
                    <div className="py-2 px-4">
                        <label className="text-lg text-[#777] mx-2 font-semibold font-sans">First Name</label><br/>
                        <input value={firstname} onChange={ev=>setFirstname(ev.target.value)} type="text" className="focus:outline-none my-2 px-2 w-full py-3 text-[#777] bg-[#dbdbdb]" placeholder='First Name'></input>
                        <label className="text-lg text-[#777] mx-2 font-semibold font-sans">Last Name</label><br/>
                        <input value={lastname} onChange={ev=>setLastName(ev.target.value)} type="text" className="focus:outline-none my-2 px-2 w-full py-3 text-[#777] bg-[#dbdbdb]" placeholder='Last Name'></input>
                    </div>
                    <div className="py-2 px-4">
                        <label className="text-lg text-[#777] mx-2 font-semibold font-sans">Phone Number</label><br/>
                        <input value={phone} onChange={ev=>setPhone(ev.target.value)} type="text" className="focus:outline-none my-2 px-2 w-full py-3 text-[#777] bg-[#dbdbdb]" placeholder='Phone no'></input>
                        <label className="text-lg text-[#777] mx-2 font-semibold font-sans">Age</label><br/>
                        <input value={age} onChange={ev=>setAge(ev.target.value)} type="text" className="focus:outline-none my-2 px-2 w-full py-3 text-[#777] bg-[#dbdbdb]" placeholder='Age'></input>
                    </div>
                </div>
                <div className="grid grid-rows-2 w-full">
                    <div className=" px-4 ">
                        <label className="text-lg text-[#777] mx-2 font-semibold font-sans">Email</label><br/>
                        <input value={email} onChange={ev=>setEmail(ev.target.value)} type="text" className="focus:outline-none my-2 px-2 w-full py-3 text-[#777] bg-[#dbdbdb]" placeholder='Email'></input>
                    </div>
                    <div className="px-4">
                        <label className="text-lg text-[#777] mx-2 font-semibold font-sans">Address</label><br/>
                        <input value={address} onChange={ev=>setAddress(ev.target.value)} type="text" className="focus:outline-none my-2 px-2 w-full py-3 text-[#777] bg-[#dbdbdb]" placeholder='Address'></input>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 w-full border-b">
                    <div className='px-4'>
                        <label className="text-lg text-[#777] mx-2 font-semibold font-sans">City</label><br/>
                        <input value={city} onChange={ev=>setCity(ev.target.value)} type="text" className="focus:outline-none my-2 px-2 w-full py-3 text-[#777] bg-[#dbdbdb]" placeholder='City'></input>
                    </div>
                    <div className='px-4'>
                        <label className="text-lg text-[#777] mx-2 font-semibold font-sans">Zip Code</label><br/>
                        <input value={zipcode} onChange={ev=>setZipcode(ev.target.value)} type="text" className="focus:outline-none my-2 px-2 w-full py-3 text-[#777] bg-[#dbdbdb]" placeholder='Zip Code'></input>
                    </div>
                </div>
                <div className="px-4 py-4 w-full">
                    <input type="checkbox" className=""></input><label className="text-lg px-2 text-[#777] font-sans font-semibold">Please send me latest news and updates</label>
                </div>
                {showWarning && <div className="px-4 py-2 bg-[#dbdbdb] w-full flex justify-center">
                    <h2 className="text-orange">Please fill all the required fields.</h2>
                </div>}
                <div className="px-4 py-8 bg-[#dbdbdb] w-full flex justify-center">
                    <Link to={!user && '/login'} onClick={ReserveCar} className="bg-orange px-6 py-3 text-white font-sans font-semibold rounded">Reserve now</Link>
                </div>
            </div>}
        </>
    )
}