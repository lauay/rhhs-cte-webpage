import React from 'react';
import  '../../css/Card.css';

function Card({title,imageUrl,body,additional}) {
    return(       
<div className= 'card-container'>
        <div className= "image-container">
        <img src= {imageUrl} alt='' />
        </div>
    <div className= "card-content">
        <div className="card-title">
         <h3>{title}</h3>
        </div>
        <div className= "card-body">
            <p>{body}</p>
        </div>
        <div className= "card-body">
            <a href={additional} className="btn btn-primary">Click Here to View More</a>
        </div>
    </div>    
</div>

    )
}

export default Card;