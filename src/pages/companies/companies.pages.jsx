import React, {useState} from 'react';
 import FilterableCompanies from './componentes/filterable-companies/filterable-companies.comp';
 
const CompaniesPages = () => {
  let MotorpartsList = [
    {   
        
        id:"t1",
        name:'IMPORTS',
      
        videogames:[
            {              
                id:"t1v1",
                name:"Rodamients",
                average:'32',
                company: 'Renault',
              
            },
            {
                id:"t1v2",
                name:"Cylinder",
                average:'39',
                company : 'Chevrolet',
            },
            {
                id:"t1v3",
                name:"Valvule",
                average:'12',
                company : 'Hyundai',
            },
            {
                id:"t1v4",
                name:"Carter",
                average:'93',
                company : 'Mazda',
            },
            {
                id:"t1v5",
                name:"Pistons",
                average:'63',
                company : 'SangYong',
            }
        ]
    },
    {
     
        id:"t2",
        name:'Luxury',

        videogames:[
            {
                id:"t2v1",
                name:"Stereo",
                average:'200',
                company : 'Pioneer',
            },
            {
                id:"t2v2",
                name:"Electricmirror",
                average:'31',
                company : 'Nemesis',
            },
            {
                id:"t2v3",
                name:"Alarm Control",
                average:'100',
                company : 'Nemesis',
            },
            {
                id:"t2v4",
                name:"Polarized",
                average:'19',
                company : 'MasterMirror',
            },
            {
                id:"t2v5",
                name:"Subwoofer",
                average:'79',
                company : 'Pioneer',
            }
        ]
    },
    {
      
        id:"t3",
        name:'Outside',

        videogames:[
            {
                id:"t3v1",
                name:"WindowFront",
                average:'127',
                company : 'MirrorSky',
            },
            {
                id:"t3v2",
                name:"WindowBack",
                average:'89',
                company : 'MirrorSky',
            },
            {
                id:"t3v3",
                name:"Tires",
                average:'90',
                company : 'Michelin',
            },
            {
                id:"t3v4",
                name:"streetlight",
                average:'130',
                company : 'Renault',
            },
            {
                id:"t3v5",
                name:"SecurityBelt",
                average:'44',
                company : 'Nemesis',
            }
        ]
    }
   
];
const [videogames, setVideogames] = useState (MotorpartsList);  
return (
    
    <div>
         <> 
         <FilterableCompanies
           videogameList={videogames}

           onAddVideogame={(newVideogamesObj, TypeId)=>{
     
               const newVideogames = [];
               for(let i=0; i<videogames.length; i++){
                   if(videogames[i].id !== TypeId){
                      newVideogames.push(videogames[i]);
                   }
                   else{
                      newVideogames.push(
                          {
                              ...videogames[i],
                              videogames:[...videogames[i].videogames, newVideogamesObj]
                          }
                          );
                   }
               }
             
               setVideogames(newVideogames);
               console.log(newVideogames);
            
           }}
       
        
         /> 
         </>
   <div />
       
    </div>
      );
}
export default CompaniesPages;