import React from 'react';
import audi  from  "../images/realaudi.png";
import benz  from  "../images/realbenz.png";
import bmw from  "../images/realbmw.png";
import golf from  "../images/realgolf.png";
import passat from  "../images/realpassat.png";
import toyota from  "../images/realtoyota.png";
import CarCard from './Reactcard';



export default function Carmodel(){

    const cars = [
        {
            name: "Audi A1",
            model: "Audi",
            rent: "$ 45",
            image: audi
        },
        {
            name: "Golf 6",
            model: "VW",
            rent: "$ 37",
            image: golf
        },
        {
            name: "Toyota",
            model: "Camry",
            rent: "$ 30",
            image: toyota
        },
        {
            name: "BMW 320",
            model: "ModernLine",
            rent: "$ 35",
            image: bmw
        },
        {
            name: "Mercedes",
            model: "Benz GLK",
            rent: "$ 50",
            image: benz
        },
        {
            name: "NW Passat",
            model: "CC",
            rent: "$ 25",
            image: passat
        }
    ]
   

    return(
        <>
            <div className="container mx-auto md:p-6 mb-16">
                <div className="grid lg:grid-cols-3 gap-8 px-16">
                    {cars.map((car,index)=>(
                        <div key={index} className="">
                            <CarCard image={car.image} name={car.name} model={car.model} rent={car.rent} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}