import React from 'react';
import Sdata from './Sdata';
import Card from "./Card";



const Service = () => {
  return (
    <>
    
      {/* <div className="row row-cols-1 row-cols-md-3 g-4" >
        <div className="col"> */}
          
            <div className="text-center row " >
                <h1>Our Services</h1><br/>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
                
              {
                Sdata.map((val, ind) =>
                {
                  return <Card key={ind} imgsrc={val.imgsrc} title={val.title}
                  />
                })
                }
            {/* </div>
          </div> */}
        </div>
        
    </>
  );
};

export default Service;

