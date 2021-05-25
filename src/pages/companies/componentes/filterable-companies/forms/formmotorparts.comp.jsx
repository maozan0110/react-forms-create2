import React, { useState } from 'react';
import './formmotorparts.style.css'

const Formmotorparts = (props) => {
  
    const [subcategory, setsubcategory] = useState('');
    const [name, setName] = useState('');
    const [average, setAverage] = useState(0);
    const addmotorparts = (event) => {
        event.preventDefault();


        const newMotorparts = {
            id: name,
            name: name,
            average: Number(average),
           };
           props.onAddmotorparts(newMotorparts,subcategory);
       
     
        console.log('subcategory ' + subcategory);
        console.log('name ' + name);
        console.log('average ' + average);
    }
    return (
        <table className="form-motorparts-container">
        <div >
       <th> INSERT CATEGORY PART </th>
        <form>
     
      
       <tr>
               <td>
                 <select value={subcategory} onChange={(event)=>{
                   setsubcategory(event.target.value);
                    }}
       >
              <option value="t1">IMPORTS</option>
              <option value="t2">Luxury</option> 
              <option value="t3">Outside</option> 
       </select>
               </td>

       </tr>
                 
       <tr>
               <td>
                  Name Part <input type="text"
                    value={name}
                    onChange={(event)=>{
                      setName(event.target.value);
                    }}
                   />
               </td>
       </tr>

           
 <tr>
       <td>
            Price <input type="number"  value={average} onChange={(event)=>{
                      setAverage(event.target.value);
                    }}
                   />
               </td>
       </tr>
           
          
     
          
           <tr>
                <td>
                     <button
                     onClick={addmotorparts}
                     >
                         Insert category
                     </button>
               </td>
           </tr>
           </form>
    </div>
    </table>
);
    
}
export default Formmotorparts;