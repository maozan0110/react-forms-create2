import React from 'react';
import'./company-table.style.css';
import TypeVideogame from './subcategory/subcategory.comp';
import Videogame from './motor-parts/motor-parts.comp';


const CompanyTable = (props) => {
    
 return (
             <table className="company-table-container">
      
                 <div>
             {props.videogameList.map((typevideogames,index) =>{
               return(
                <div key={(typevideogames.id)}>
                
              <TypeVideogame categoryName={typevideogames.name}/>
     <div className="lis1">PART    PRICE    COMPANY</div>
           {(typevideogames.videogames).map((datos, indexProduct)=>{
                   return(
                      <div>
                    <Videogame
                    key={datos.id} 
                    datos={datos}/>
                  </div>
                 );
                })}
                </div>
                );
              })}
              </div>
            </table>
         );

}
export default CompanyTable;