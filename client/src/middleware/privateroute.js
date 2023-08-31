import { useContext } from "react";
import { UserContext } from "../Context/Clientcontext";
import { useNavigate } from "react-router-dom";



export default function Privateroute(){
    const {user} = useContext(UserContext);
    const navigate = useNavigate();
    if(!user){
        navigate('/login')
    }
}