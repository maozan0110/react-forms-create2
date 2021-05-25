import React from 'react';
import './filterable-companies.style.css';
import CompanyTable from './company-table/company-table.com';
import Formcompany from './forms/formcompany.comp';
import Formmotorparts from './forms/formmotorparts.comp';
const FilterableCompanies = (props) => {
  
    return (
        
        <div className="filterable-companies-container">
  
            <CompanyTable videogameList={props.videogameList}/>
            <Formmotorparts  onAddVideogame={props.onAddVideogame}/>
            <Formcompany onAddVideogame={props.onAddVideogame}/>
      </div>
     
    );
}
export default FilterableCompanies;