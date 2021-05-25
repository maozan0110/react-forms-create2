import React, { useState } from 'react';
import './formcompany.style.css'

const  Formmotorparts = (props) => {
  
    const [subcategory, setsubcategory] = useState('');
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [average, setAverage] = useState(0);
    const addMotorparts = (event) => {
        event.preventDefault();


        const newMotorpart = {
            id: name,
            name: name,
            company: company,
            average: Number(average),
           };
           props.onAddMotorpart(newMotorpart,subcategory);
       
     
        console.log('subcategory ' + subcategory);
        console.log('name ' + name);
        console.log('company ' + company);
        console.log('average ' + average);
    }
    return (
        <table className="form-company-container">
        <div >
       <th> NEW CAR PART </th>
        <form>
     
      
       <tr>
               <td>
             Insert part <select value={subcategory} onChange={(event)=>{
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
                  Part
    
                   <input type="text" required 
                   placeholder="Video Game Name"
                    value={name}
                    onChange={(event)=>{
                      setName(event.target.value); 
                    }}
                    required minlength="0" maxlength="20"/>
               </td>
       </tr>

       <tr>
               <td>
                  Company <input type="text" required
                  placeholder="Company Name"
                    value={company}
                    onChange={(event)=>{
                      setCompany(event.target.value);
                    }}
                    required minlength="0" maxlength="20"/>
               </td>
       </tr>


           
 <tr>
       <td>
            Price <input type="number" min="0" max="5" pattern="^[0-9]+"  value={average} onChange={(event)=>{
                      setAverage(event.target.value);
                    }}
                    />
               </td>
       </tr>
           
          
     
          
           <tr>
                <td>
                     <button
                     onClick={addMotorparts}
                     >
                         Add Part Car
                     </button>

                     
               </td>
           </tr>
           </form>
    </div>
    </table>
);
    
}
export default Formmotorparts;