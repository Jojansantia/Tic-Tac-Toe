import React, { useState } from 'react';
import equis from '../img/equis.jpg';
import circle from '../img/circle.jpg';

const Figura = ({posiciones, letra, turno, cambiarImagen}) => {

    const [img, guardarimg] = useState();
    
     const handleClick = () =>{
        if(letra >= 0){
            if(turno === "x"){
                guardarimg(equis)
            }else if(turno === "o"){
                guardarimg(circle)
            }
            posiciones[letra]=turno
            cambiarImagen(true)
        }
      }
      
    return ( 
        <>
            <button className=" w-1/4 m-2  cursor-pointer focus:outline-none" value={letra} onClick={handleClick}>
                {
                    (letra === "x" || letra === "o" ) ? 
                        (letra === "x") ? 
                            <img src={equis} className=" h-24 w-full "  alt=""  /> 
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