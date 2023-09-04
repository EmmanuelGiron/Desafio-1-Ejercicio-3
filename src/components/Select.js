import React from "react";
import { useState } from "react";

function Select({ selectedDestino, onDestinoChange }) {
    const [destino, setDestino] = useState(selectedDestino || "panama");
    const handleDestino = (event) =>{
        const newDestino = event.target.value;
        setDestino(newDestino);
        if (onDestinoChange) {
        onDestinoChange(newDestino);
        }
    }
    console.log(destino)
    return(
        <div className="mb-5 p-3">
        <select name="select" className="rounded-lg w-full border border-black" onChange={handleDestino} value={destino}>
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