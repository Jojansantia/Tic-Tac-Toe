import React, {useState, useEffect} from 'react';
import Figura from './Figura';
import Swal from 'sweetalert2';
import fondo from '../img/fondo.png';
const Juego = () => {

    const [img, cambiarImagen] = useState(false);
    const [imagen, cambiarimg] = useState("x");
    const [posiciones, guardarPosiciones] = useState([0,1,2,3,4,5,6,7,8]);
    console.log(posiciones);
    
    useEffect(() => {
        if(img){
            if(imagen === "x"){
                cambiarimg("o")
            }else if(imagen === "o"){
                cambiarimg("x")
            }
            cambiarImagen(false)
        }
    }, [img, imagen])

    const reiniciar = () =>{
        
            guardarPosiciones([0,1,2,3,4,5,6,7,8])
            cambiarimg("x")
            cambiarImagen(false)
        
    }

      let empate= !posiciones.every(elem => !parseInt(posiciones[elem]))
        if((posiciones[0] === posiciones[1] && posiciones[1] === posiciones[2]) ||
            (posiciones[0] === posiciones[3] && posiciones[3] === posiciones[6]) || 
            (posiciones[0] === posiciones[4] && posiciones[4] === posiciones[8]) ||
            (posiciones[1] === posiciones[4] && posiciones[4] === posiciones[7]) || 
            (posiciones[2] === posiciones[4] && posiciones[4] === posiciones[6]) || 
            (posiciones[2] === posiciones[5] && posiciones[5] === posiciones[8]) || 
            (posiciones[3] === posiciones[4] && posiciones[4] === posiciones[5]) || 
            (posiciones[6] === posiciones[7] && posiciones[7] === posiciones[8]) ){
                setTimeout(() => {
                Swal.fire(
                    'Ganaste',
                    'Has logrado hacer 3 en raya!',
                    'success'
                );
                reiniciar()
            }, 1000);
        }else if(!empate){
            setTimeout(() => {
            Swal.fire(
                'Oops...',
                'Parece que ha habido un empate',
                'error'
            );
            reiniciar()
        }, 1000);
        }

    return ( 
        <>
        
        <div className="text-center py-1     ml-1">
            {
              posiciones.map( (indexs,i) => (
                <Figura key={i} imagen={imagen} posiciones={posiciones} indexs={indexs}  cambiarImagen={cambiarImagen}   />
                ))
            }
        </div>
        </>
     );
}
 
export default Juego;