import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/image/1.jpg";

const Card = (props) => {
    return (
        <>

            <div className="col m-auto my-2">
                    <div className="card ">
                        <img src={props.imgsrc} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                         </div>
                         </div>
                    
          
  

           
        </>
            );
};

            export default Card;
