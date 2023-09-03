import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Select from "./Select";

function Formulario(){
  const [destinyIsVisible,setDestinyIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handlePersonChange = (event) =>{
    setDestinyIsVisible(true)
  }
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
                        <legend className="font-bold uppercase ml-2">Número de personas</legend>
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
                      <Select/>
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