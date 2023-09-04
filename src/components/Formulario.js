import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Select from "./Select";
import userEvent from "@testing-library/user-event";

function Formulario(){
  const [destinyIsVisible,setDestinyIsVisible] = useState(false);
  const [selectedDestino, setSelectedDestino] = useState("panama");
  const [pasajeros,setPasajeros] =useState(1);
  const[costoUnidad,setCostoUnidad]=useState(0);
  const[impuesto,setImpuesto]=useState(0);
  const[total,setTotal]=useState(0);




  const handlePersonChange = (event) =>{
    setDestinyIsVisible(true)
    setPasajeros(event.target.value)
  }
  const handleDestinoChange = (newDestino) => {
    setSelectedDestino(newDestino);}
 
  const handleCostoUnitorio = () =>{
    if(pasajeros === 1 && selectedDestino==="panama")
    {
        setCostoUnidad(197)
    }else if(pasajeros === 1 && selectedDestino==="cancun")
    {
        setCostoUnidad(485)
    }else if(pasajeros === 1 && selectedDestino==="chile")
    {
        setCostoUnidad(198)
    }else if(pasajeros === 1 && selectedDestino==="peru")
    {
        setCostoUnidad(754)
    }else if(pasajeros === 1 && selectedDestino==="honduras")
    {
        setCostoUnidad(565)
    }else if(pasajeros === 2 && selectedDestino==="panama")
    {
        setCostoUnidad(165)
    }else if(pasajeros === 2 && selectedDestino==="cancun")
    {
        setCostoUnidad(439)
    }else if(pasajeros === 2 && selectedDestino==="chile")
    {
        setCostoUnidad(178)
    }else if(pasajeros === 2 && selectedDestino==="peru")
    {
        setCostoUnidad(699)
    }else if(pasajeros === 2 && selectedDestino==="honduras")
    {
        setCostoUnidad(499)
    }else if((pasajeros === 3 || pasajeros === 4) && selectedDestino==="panama")
    {
        setCostoUnidad(149)
    }else if((pasajeros === 3 || pasajeros === 4) && selectedDestino==="cancun")
    {
        setCostoUnidad(400)
    }else if((pasajeros === 3 || pasajeros === 4) && selectedDestino==="chile")
    {
        setCostoUnidad(158)
    }else if((pasajeros === 3 || pasajeros === 4) && selectedDestino==="peru")
    {
        setCostoUnidad(649)
    }else if((pasajeros === 3 || pasajeros === 4) && selectedDestino==="honduras")
    {
        setCostoUnidad(459)
    }else if(pasajeros === 5 && selectedDestino==="panama")
    {
        setCostoUnidad(129)
    }else if(pasajeros === 5 && selectedDestino==="cancun")
    {
        setCostoUnidad(380)
    }else if(pasajeros === 5 && selectedDestino==="chile")
    {
        setCostoUnidad(138)
    }else if(pasajeros === 5 && selectedDestino==="peru")
    {
        setCostoUnidad(629)
    }else if(pasajeros >= 5 && selectedDestino==="honduras")
    {
        setCostoUnidad(449)
    }
  }
  console.log(costoUnidad)
    return (
        <div>
            <Nav/>
            <div className="md:flex mt-10 bg-sky-500 md:justify-center md:gap-10 md:items-center">
            <div className="md:w-4/12 p-6" >
              <div className="md:w-10/12 p-4 rounded-lg shadow-xl bg-stone-50">
              <div className="mb-5">
                  <legend className="font-bold uppercase ml-1 mb-1 text-center font-serif underline">Elección de paquete</legend>
                  <p className="font-serif p-1 text-center">Arma tu paquete a tu manera</p>
              </div>
                <form>
                  <fieldset className="mb-5 border border-black rounded-lg">
                      <div className="mb-5">
                        <legend className="font-bold uppercase ml-2">Número de Pasajeros</legend>
                      </div>
                  <div className="mb-5">
                      <input type="number" id="cantidad" name="cantidad" min="1" max="10" className="ml-5 mt-2 mb-2 border border-black rounded-lg text-center" 
                      /**checked={selectedOption === "individual"}*/ onChange={handlePersonChange} />
                  </div>
                  </fieldset>
                  
                    { destinyIsVisible && (
                    <fieldset className="mb-5 border border-black rounded-lg">
                      <div className="mb-5">
                            <legend className="font-bold uppercase ml-2">Selección de destino</legend>
                      </div>
                      <Select
                        selectedDestino={selectedDestino}
                        onDestinoChange={(newDestino) => {
                          handleDestinoChange(newDestino);
                          handleCostoUnitorio();
                        }}
                      />
                    </fieldset>
                    )
                    }
                    <fieldset className="mb-5 border border-black rounded-lg">
                    <div className="mb-2 flex">
                        <legend className="font-bold uppercase mr-2 ml-1">Total:</legend>
                        <h1 className="font-bold">$</h1>
                    </div>
                    </fieldset>
                  <input type="submit" value="Enviar" className="bg-sky-600 hover:bg-zinc-600 transition-colors cursor-pointer uppercase font-bold w-full p-3 text-white rounded-lg"/>
                </form>
              </div>   
            </div>
            <div className="md:w-4/12 p-5">
                <img src={require('../img/avion.png')} class="w-400"/>
            </div>
          </div>
            <Footer/>
        </div>
    );
};

export default Formulario;