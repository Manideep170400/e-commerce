import React from "react";
import { useNavigate } from "react-router-dom";

const Center  = () => 
     {
        const navigate = useNavigate();
        const handleToggle = () => {
            navigate("/center/sidebar")
        }
        const items = [{
                title  : 'name',
                children : {
                    label : 'second name'
                }
        }]
        return (
            <div> 
                {items[0].title}
              <p onClick={handleToggle}>{items[0].children.label}  <span class="material-symbols-outlined">
arrow_forward_ios
</span></p>
               <p>center</p>
            </div>
        )
    }


export default Center