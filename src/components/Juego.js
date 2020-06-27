import React, {useState, useEffect} from 'react';
import Figura from './Figura';
import Swal from 'sweetalert2';

const Juego = () => {

    const [imagen, cambiarImagen] = useState(false);
    const [turno, cambiarTurno] = useState("x");
    const [posiciones, guardarPosiciones] = useState([0,1,2,3,4,5,6,7,8]);

    useEffect(() => {
        if(imagen){
            if(turno === "x"){
                cambiarTurno("o")
            }else if(turno === "o"){
                cambiarTurno("x")
            }
            cambiarImagen(false)
        }
    }, [imagen, turno])

    const reiniciar = () =>{
        guardarPosiciones([0,1,2,3,4,5,6,7,8])
        cambiarTurno("x")
        cambiarImagen(false)
    }

    let empate = posiciones.every(elem => elem === "x" || elem === "o") 

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
            }, 200);
    }else if(empate){
        setTimeout(() => {
            Swal.fire(
                'Oops...',
                'No se ha logrado el objetivo.',
                'error'
            );
            reiniciar()
        }, 200);
    }

    return ( 
        <>
            <div className="bg-black grid grid-rows-3 grid-flow-col gap-4">
                {
                    posiciones.map( (letra,i) => (
                        <Figura 
                            key={i} 
                            turno={turno} 
                            letra={letra} 
                            posiciones={posiciones} 
                            cambiarImagen={cambiarImagen} 
                        />
                    ))
                }
            </div>
        </>
     );
     
}
 
export default Juego;