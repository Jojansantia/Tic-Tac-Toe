import React, { useState } from 'react';
import equis from '../img/equis.jpg';
import circle from '../img/circle.png';
const Figura = ({ posiciones, indexs,pos,letra,imagen, cambiarImagen, guardarPos, guardarCrearDatos}) => {
    const [img, guardarimg] = useState();
    
     const handleChange = e =>{
                
        if(e.target.value){
            
            cambiarImagen(true)
            guardarCrearDatos(true)
            let valor =""
            if(imagen === "1"){
                guardarimg(equis)
                valor = "x"
            }else if(imagen === "2"){
                guardarimg(circle)
                  valor = "o"
            }
            let a =e.target.value
            guardarPos({
                a, valor
            })
        }
      }

    return ( 
        <>
        <button className=" w-1/4 mx-5 my-2 flex justify-center border cursor-pointer" value={letra} onClick={handleChange}>
        {/* <img src={circle} className=" "  alt=""  /> */}
        {!parseInt(posiciones[indexs])  ? <img src={img} className="h-24 w-full "  alt=""  /> : <p className="h-24"></p> }
            </button>
        </>
     );
}
 
export default Figura;