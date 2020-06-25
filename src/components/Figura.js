import React, { useState } from 'react';
import equis from '../img/equis.jpg';
import circle from '../img/circle.jpg';
const Figura = ({ posiciones, indexs,imagen,cambiarImagen}) => {
    const [img, guardarimg] = useState();
    
     const handleChange = () =>{
        if(indexs >= 0){
            if(imagen === "x"){
                guardarimg(equis)
            }else if(imagen === "o"){
                guardarimg(circle)
            }
                posiciones[indexs]=imagen
                cambiarImagen(true)
        }
      }
      
      console.log((posiciones[indexs]))
      


    return ( 
        <>
        <button className=" w-1/4 mx-1  cursor-pointer" value={indexs} onClick={handleChange}>
        {/* <img src={circle} className=" "  alt=""  /> */}
        {/* {indexs} */}
        

            {
                (indexs === "x" || indexs === "o" ) ? (indexs === "x") ? <img src={equis} className=" h-24 w-full "  alt=""  /> 
                : 
                <img src={circle} className=" h-24 w-full "  alt=""  />
                :
                <p className="h-24 border-2"></p>
            }
            </button>
        </>
     );
}
 
export default Figura;