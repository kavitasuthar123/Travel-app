// import React from 'react'
// import { Carousel } from 'react-bootstrap';
// import sliderimg from "../../assets/image/slider/1.png"
// import sliderimg1 from "../../assets/image/slider/1.jpg"
// import "../Banner/banner.css"

// const Banner = () => {
//   return (

//     <section className='slider'>
//       <Carousel varient="dark">
//         <Carousel.Item>
//           <img src={sliderimg} className='d-black w-100' alt="First slide" />
//           <Carousel.Caption className='text-black'>
//             <div className="slider_des">
//               <h5 className='heading'>JOURNEY TO <span>EXPLORE WORLD</span> </h5>
//               <p className="sub_text">Nulla vitae elit libero, a pharetra augue mollis interdum.
//                 Nulla vitae elit libero, a pharetra augue mollis interdum.
//               </p>
//             </div>
//           </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//           <img src={sliderimg1} className='d-black w-100' alt="First slide" />
//           <Carousel.Caption>
//             <div className="slider_des">
//               <h5 className='heading'>BEAUTIFUL PLACE <span>TO VISITE</span> </h5>
//               <p className="sub_text">Nulla vitae elit libero, a pharetra augue mollis interdum.
//                 Nulla vitae elit libero, a pharetra augue mollis interdum.
//               </p>
//             </div>
//           </Carousel.Caption>
//         </Carousel.Item>


//       </Carousel>
//     </section>

//   )
// }

// export default Banner























import React from "react";
import { Carousel } from "react-bootstrap";
import sliderimg from "../../assets/images/slider/1.png"
import sliderimg1 from "../../assets/images/slider/2.png"
import "../Banner/banner.css"

const Banner = () => {
  return (
    <>
      <section className="slider">
        <Carousel variant="dark">
          <Carousel.Item>
            <img src={sliderimg} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  JOURNEY TO <span>EXPLORE WORLD</span>
                </h5>
                <p className="sub_text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderimg1} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  BEAUTIFUL PLACE <span>TO VISIT</span>
                </h5>
                <p className="sub_text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Banner;