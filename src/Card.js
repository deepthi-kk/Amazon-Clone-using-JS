import React from 'react'
import "./Card.css";
function Card({rate,description}) {
    return (
        <div className="card-container">
            <div className="rate-container">
                 <h3> {rate}  </h3>
                 <p>  {description}  </p>
            </div>

            <div className="description-container">
                
            </div>
            
                      
        </div>
    )
}

export default Card
