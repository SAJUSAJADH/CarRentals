import React,{useEffect, useRef, useState} from 'react'
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

export default function Form({reservationFormRef, toggleDiv, carType, setCarType, pickPlace, setPickPlace, dropPlace, setDropPlace, pickDate, setPickDate, dropDate, setDropDate}){

  
  const [checkFields, setCheckfields] = useState(false);


  const isSearchDisabled = !carType || !pickPlace || !dropPlace || !pickDate || !dropDate;


    const cars = [
        'Select Car','Audi A1 S-Line','VW Golf 6','Toyota Camry','BMW 320 ModernLine','Mercedes-Benz GLK','VW Passat CC'
    ]

    const places = [
        'Select Place','Kochi','Trivandrum','Chennai','Calicut','Alappy','Kasargod'
    ]

    const Search = (ev) => {
        ev.preventDefault();
        if (isSearchDisabled) {
            setCheckfields(true);
            setTimeout(() => {
              setCheckfields(false);
            }, 1000);
          }else{
            toggleDiv();
        }

    }

    

    return(
        <>
            <form  ref={reservationFormRef}>
            <div className="container justify-center mx-auto mb-40">
                <div id="formbg" className="lg:mx-16 py-10 z-30 shadow-2xl">
                {checkFields && <h2 className="font-sans font-bold text-xl px-12 mb-8 text-orange">Please fill all the fields.</h2>}
                <h4 className="mt-6 font-sans font-bold text-xl px-12 mb-8">Book a car</h4>
                <div className='grid lg:grid-cols-3 px-12 gap-4'>
                <div className="mb-8">
                    <label className="font-semibold text-lg"><span className="text-orange"><DirectionsCarOutlinedIcon/> </span> Select Your Car Type</label><br/>
                    <select value={carType} onChange={ev=>setCarType(ev.target.value)} id="cartype" className="mt-4 border border-[#ccd7e6] rounded text-[#ababab] text-xl py-2 w-full focus:outline-none">
                        {cars.map((car,index)=>(
                            <option key={index} value={car}>{car}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-8">
                    <label className="font-semibold text-lg"><span className='text-orange'><LocationOnOutlinedIcon/> </span> Pick-up</label><br/>
                    <select value={pickPlace} onChange={ev=>setPickPlace(ev.target.value)} id="pickplace" className="mt-4 border border-[#ccd7e6] rounded text-[#ababab] text-xl py-2 w-full focus:outline-none">
                        {places.map((place,index)=>(
                            <option key={index} value={place}>{place}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-8">
                    <label className="font-semibold text-lg"><span className='text-orange'><LocationOnOutlinedIcon/> </span> Drop-of</label><br/>
                    <select value={dropPlace} onChange={ev=>setDropPlace(ev.target.value)} id="dropplace" className="mt-4 border border-[#ccd7e6] rounded text-[#ababab] text-xl py-2 w-full focus:outline-none">
                        {places.map((place,index)=>(
                            <option key={index} value={place}>{place}</option>
                        ))}
                    </select>
                </div>
                        <div  className="mb-8">
                        <label className="font-semibold text-lg"><span className='text-orange'><CalendarMonthOutlinedIcon/></span> Pick-up</label><br/>
                        <input value={pickDate} onChange={ev=>setPickDate(ev.target.value)} max={dropDate} className="mt-4 border border-[#ccd7e6] rounded text-[#ababab] text-xl py-2 w-full focus:outline-none" type='date' name='Pick-up'/>
                        </div>
                        <div className="mb-8">
                        <label className="font-semibold text-lg"><span className='text-orange'><CalendarMonthOutlinedIcon/></span> Drop-of</label><br/>
                        <input value={dropDate} onChange={ev=>setDropDate(ev.target.value)} min={pickDate} className="mt-4 border border-[#ccd7e6] rounded text-[#ababab] text-xl py-2 w-full focus:outline-none" type='date' name='Drop-of'/>
                        </div>
                    <div className="">
                        <button onClick={Search} className=" border border-[#ccd7e6] mt-11 font-semibold font-sans rounded text-xl bg-orange text-white py-2 w-full">Search</button>
                    </div>
                </div>
                </div>
                </div>
            </form>
        </>
    )
}