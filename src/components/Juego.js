import React, {useState, useEffect} from 'react';
import Figura from './Figura';
import Swal from 'sweetalert2';


const Juego = () => {
    const [img, cambiarImagen] = useState(false);
    const [pos, guardarPos] = useState({});
    const [imagen, cambiarimg] = useState("1");
    const [ posiciones, guardarPosiciones ] = useState([0,1,2,3,4,5,6,7,8,9]);
    const [ creardatos, guardarCrearDatos ] = useState(false);
    if(img){
        if(imagen === "1"){
            cambiarimg("2")
        }else if(imagen === "2"){
            cambiarimg("1")
        }
        cambiarImagen(false)
    }

   
      useEffect(() => {
        if(creardatos) {
            // agrega el nuevo alumno
              posiciones[pos.a]=pos.valor
            // Resetear a false
            guardarCrearDatos(false);
        }
      }, [posiciones, creardatos, pos]);

        
        if((posiciones[1] === posiciones[2] && posiciones[2] === posiciones[3]) ||
            (posiciones[1] === posiciones[4] && posiciones[4] === posiciones[7]) || 
            (posiciones[1] === posiciones[5] && posiciones[5] === posiciones[9]) ||
            (posiciones[2] === posiciones[5] && posiciones[5] === posiciones[8]) || 
            (posiciones[3] === posiciones[5] && posiciones[5] === posiciones[7]) || 
            (posiciones[3] === posiciones[6] && posiciones[6] === posiciones[9]) || 
            (posiciones[4] === posiciones[5] && posiciones[5] === posiciones[6]) || 
            (posiciones[7] === posiciones[8] && posiciones[8] === posiciones[9]) ){
                Swal.fire(
                    'Ganaste',
                    'Has logrado hacer 3 en raya!',
                    'success'
                );
                guardarPosiciones([0,1,2,3,4,5,6,7,8,9])
                cambiarimg("1")
        }
        

    return ( 
        <>

        <div className="justify-center py-1  flex  border ml-1">
        <Figura  imagen={imagen} posiciones={posiciones} indexs={1}   guardarCrearDatos={guardarCrearDatos} pos={pos} guardarPos={guardarPos} cambiarImagen={cambiarImagen} letra={"1"}/>
        <Figura  imagen={imagen} posiciones={posiciones} indexs={2}  guardarCrearDatos={guardarCrearDatos} pos={pos} guardarPos={guardarPos} cambiarImagen={cambiarImagen} letra={"2"}/>
        <Figura  imagen={imagen} posiciones={posiciones} indexs={3}  guardarCrearDatos={guardarCrearDatos} pos={pos} guardarPos={guardarPos} cambiarImagen={cambiarImagen} letra={"3"}/>
        
        </div>
        <div className="justify-center py-1  flex border ml-1">
        <Figura  imagen={imagen} posiciones={posiciones} indexs={4}  guardarCrearDatos={guardarCrearDatos} pos={pos} guardarPos={guardarPos} cambiarImagen={cambiarImagen} letra={"4"}/>
        <Figura  imagen={imagen} posiciones={posiciones} indexs={5}  guardarCrearDatos={guardarCrearDatos} pos={pos} guardarPos={guardarPos} cambiarImagen={cambiarImagen} letra={"5"}/>
        <Figura  imagen={imagen} posiciones={posiciones} indexs={6}  guardarCrearDatos={guardarCrearDatos} pos={pos} guardarPos={guardarPos} cambiarImagen={cambiarImagen} letra={"6"}/>
        
        </div>
        
        <div className="justify-center py-1  flex border ml-1">
        <Figura  imagen={imagen} posiciones={posiciones} indexs={7}  guardarCrearDatos={guardarCrearDatos} pos={pos} guardarPos={guardarPos} cambiarImagen={cambiarImagen} letra={"7"}/>
        <Figura  imagen={imagen} posiciones={posiciones} indexs={8}  guardarCrearDatos={guardarCrearDatos} pos={pos} guardarPos={guardarPos} cambiarImagen={cambiarImagen} letra={"8"}/>
        <Figura  imagen={imagen} posiciones={posiciones} indexs={9}  guardarCrearDatos={guardarCrearDatos} pos={pos} guardarPos={guardarPos} cambiarImagen={cambiarImagen} letra={"9"}/>
        
        </div>
        
        
        </>
     );
}
 
export default Juego;