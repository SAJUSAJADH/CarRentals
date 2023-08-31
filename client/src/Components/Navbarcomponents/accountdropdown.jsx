import React, { useState,useEffect,useRef, useContext } from 'react';
import { UserContext } from '../../Context/Clientcontext';
import { useNavigate } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import axios from 'axios';



export default function Dropdown(){

    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const options = [{name: 'bookings',href:"/account/bookings"},];

    useEffect(() => {
        function handleClickOutside(event) {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        }
    
      
        document.addEventListener('mousedown', handleClickOutside);
    
        
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
     
    
      const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

      const handleOptionClick = async () => {
        await axios.post('/logout').then(()=>{
          setUser(null);
          navigate('/');
        })
      }


    return(
        <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <p
          onClick={toggleDropdown}
          className="inline-flex rounded-full justify-center w-7 h-7 mt-2 cursor-pointer"
          aria-expanded={isOpen}
          aria-haspopup="true"
        ><AccountCircleOutlinedIcon className="hover:text-orange" style={{cursor:"pointer"}}/></p>
      </div>

      {isOpen && (
        <div
          className="origin-top absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
        >
          <div className="py-1 text-center" role="none">
            {options.map((option, index) => (
              <a
                key={index}
                href={option.href}
                className="block px-4 py-2 text-base font-semibold text-gray-700 hover:bg-cyan-200 hover:text-gray-900 cursor-pointer"
                role="menuitem"
              >
                {option.name}
              </a>
            ))}
            <p onClick={handleOptionClick} className="block px-4 py-2 text-base font-semibold text-gray-700 hover:bg-cyan-200 hover:text-gray-900 cursor-pointer"
                role="menuitem">
                  Logout
            </p>
          </div>
        </div>
      )}
    </div>
    )
}