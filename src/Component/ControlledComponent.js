import React, { useState } from "react";

const ControlledComponent = () =>{
    
    const [YourName, setYourName] = useState('');
    const [TextO, setTextO] = useState('');
    const [TextT, setTextT] = useState('');
    const [BoolF, setBoolF] = useState(false);





     function Change (e){
        setTextO(`Hi ${e.target.value} How Are You`);
        setYourName(e.target.value)
        
    }
    function ClickF (e){
        setTextT(`Hay ${TextO} Keep Going`);
        setBoolF(true)
        
    }

    return (
        <div>
        <div>
    
         <label htmlFor="#YourName">Your Name</label>
        <input  id ={"YourName"} type="text" value={YourName} onChange={Change} />
        <button onClick={ClickF}>Motivate</button> 
        </div>
        <div>
            <p>{BoolF? TextT:TextO }</p>
        </div>

        </div>


        
    )
}

export default ControlledComponent;

 