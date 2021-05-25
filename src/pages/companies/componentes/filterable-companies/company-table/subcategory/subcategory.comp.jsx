import React from 'react';
import'./subcategory.style.css';


const Subcategory = (props) => {
    return (
       <div className="subcategory-container">
          {props.categoryName}
       </div> 
           
    );
}
export default Subcategory;     
