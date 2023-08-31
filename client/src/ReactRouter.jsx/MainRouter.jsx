import React from 'react';
import { Routes,Route } from 'react-router';
import Home from "../pages/Home";
import About from '../pages/About';
import Model from '../pages/Model';
import Testimonials from '../pages/Testimonials';
import Team from '../pages/Team';
import Contact from '../pages/Contact';
import RegistrationForm from '../pages/Register';
import Login from '../pages/Login';
import Account from '../pages/Account';
import axios from 'axios';
import { UserContextProvider } from '../Context/Clientcontext';
import Booking from '../pages/bookinghistory';



axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.withCredentials = true;



export default function MainRouter(){

    return(
        <> 
            <UserContextProvider>
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/about'} element={<About />} />
                    <Route path={'/model'} element={<Model />} />
                    <Route path={'/Testimonials'} element={<Testimonials />} />
                    <Route path={'/team'} element={<Team />} />
                    <Route path={'/contact'} element={<Contact />} />
                    <Route path={'/register'} element={<RegistrationForm />} />
                    <Route path={'/login'} element={<Login />} />
                    <Route path={'/account'} element={<Account />} />
                    <Route path={'/account/bookings'} element={<Booking/>}/>
                </Routes> 
            </UserContextProvider>
        </>
    )
}