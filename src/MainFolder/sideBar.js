import React from "react";
import { useNavigate } from "react-router-dom";

const SideBar = ()=> {
  const   navigate = useNavigate();
    const handleToggle = ()=> {
       navigate("/center/sidebar/home")
    }
        return (
            <div>
                <p onClick={handleToggle} >SideBar  <span class="material-symbols-outlined">
arrow_forward_ios
</span></p>
            </div>
        )
    }

export default SideBar