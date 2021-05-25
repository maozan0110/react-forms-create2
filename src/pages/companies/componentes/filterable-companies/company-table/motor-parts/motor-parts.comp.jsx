import React from 'react';
import'./motor-parts.style.css';

const Motorparts = (props) => {
    return (
        <table className="motor-parts-container">
            
            <tr>
       <td className="izq">{props.datos.name}</td>
       <td className="center">{props.datos.average}</td>
       <td className="derecha">{props.datos.company}</td>
   </tr> 
         
        
         
        </table>
    
 );
}
export default Motorparts ;  