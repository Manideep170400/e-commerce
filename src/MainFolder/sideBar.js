import React from "react";
import { useNavigate } from "react-router-dom";

const SideBar = ()=> {
  const   navigate = useNavigate();
    const handleToggle = ()=> {
       navigate("/center/sidebar/home")
    }
        return (
            <div>
                <p onClick={handleToggle}>SideBar</p>
            </div>
        )
    }

export default SideBar