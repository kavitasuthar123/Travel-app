// import React from 'react'
// import { Card } from 'react-bootstrap'
// import { destinationsData } from '../../utils/data'
// const Cards = ({destinations}) => {
//   return (
//     <div className='img-box' >

//                       <Card>
//                         <Card.Img
//                           variant="top"
//                           src={destinationsData.image}
//                           className="img-fluid"
//                           alt={destinations.name}
//                         />
//                         <Card.Title>{destinations.name}</Card.Title>
//                         <span className='tours'>{destinations.tours}</span>
//                       </Card>

//                     </div>
//   )
// }

// export default Cards














import React from "react";
import { Card } from "react-bootstrap";
import "../Cards/cards.css";
import { NavLink } from "react-router-dom";

const Cards = ({destination}) => {
  return (
    <>
      <div className="img-box">
      <NavLink className="body-text text-dark text-decoration-none" > 
        <Card>
          <Card.Img
            variant="top"
            src={destination.image}
            className="img-fluid"
            alt={destination.name}
          />
          <Card.Title>

          {destination.name}
          </Card.Title>

          <span className="tours">{destination.tours}</span>
        </Card>
        </NavLink>
      </div>
    </>
  );
};

export default Cards;