import React, { useState } from 'react';
import equis from '../img/equis.png';
import circle from '../img/circle.png';

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
            <button className="" value={letra} onClick={handleClick}>
                {
                    (letra === "x" || letra === "o" ) ? 
                        (letra === "x") ? 
                            <img src={equis} className="h-40 w-full"  alt=""  /> 
                        : 
                            <img src={circle} className="h-40 w-full"  alt=""  />
                    :
                        <p className="h-40  bg-white border-black"></p>
                }
            </button>
        </>
     );

}
 
export default Figura;