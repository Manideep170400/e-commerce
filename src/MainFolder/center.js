import React from "react";

class Center extends React.Component {
    render() {
        const items = [{
            
                label  : 'name',
                children : {
                    label : 'second name'
                }
        }]
        return (
            <div> 
                {items[0].label}
                {items[0].children.label}
               <p>center</p>
            </div>
        )
    }

}

export default Center