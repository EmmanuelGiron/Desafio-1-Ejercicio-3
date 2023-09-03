import React from "react";


function Select(){
 

    return(
        <div className="mb-5 p-3">
        <select name="select" className="rounded-lg w-full border border-black ">
            <option value="panama">Ciudad de Pánama</option>
            <option value="cancun">Cancún México</option>
            <option value="chile">Santiago de chile</option>
            <option value="peru">Machu Picchu Perú</option>
            <option value="honduras">Roatán Honduras</option>
        </select>  
        </div>
      
    );
}
export default Select;