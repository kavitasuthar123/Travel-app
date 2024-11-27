// // import React from 'react'
// // import { Row } from 'react-bootstrap'

// // const Header = () => {
// //   return (
// //     // <section className='header-section'>
// //     //     <container>
// //     //         <Row>
// import React, { useState } from 'react';
// import { Navbar, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
// import { Row } from 'react-bootstrap'
// const Header = () => {
//     const [showOffCanvas, setShowOffCanvas] = useState(false);

//     const toggleOffCanvas = () => {
//         setShowOffCanvas(!showOffCanvas);
//     };

//     return (
//         // <>
//         <section className='header-section'>
//         <container>
//             <Row>
//             <Navbar bg="light" expand='lg' className="px-3">
//                 <Navbar.Brand>
//                     <Link to="/" className="nav-link">
//                         WeekMonks
//                     </Link>
//                 </Navbar.Brand>

//                 {/* Toggle button for the Offcanvas */}
//                 <Navbar.Toggle aria-controls="off-canvasNavbar-expand-lg" onClick={toggleOffCanvas} />

//                 {/* Conditionally render Navbar items based on Offcanvas state */}
//                 {!showOffCanvas && (
//                     <Navbar.Collapse className="justify-content-end">
//                         <Nav>
//                             <Nav.Link href="#home">Home</Nav.Link>
//                             <Nav.Link href="#link">Link</Nav.Link>
//                             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                                 <NavDropdown.Item href="#action1">Action 1</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action2">Action 2</NavDropdown.Item>
//                                 <NavDropdown.Divider />
//                                 <NavDropdown.Item href="#anotherAction">Another Action</NavDropdown.Item>
//                             </NavDropdown>
//                         </Nav>
//                     </Navbar.Collapse>
//                 )}
//             </Navbar>

//             <Offcanvas show={showOffCanvas} onHide={toggleOffCanvas}>
//                 <Offcanvas.Header closeButton>
//                     <Offcanvas.Title>Off Canvas Menu</Offcanvas.Title>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body>
//                     <Nav className="flex-column">
//                         {/* Only Home and Dropdown will be displayed here */}
//                         <Nav.Link href="#home">Home</Nav.Link>
//                         <Nav.Link href="#link">Link</Nav.Link>
//                         <NavDropdown title="Dropdown" id="offcanvas-nav-dropdown">
//                             <NavDropdown.Item href="#action1">Action 1</NavDropdown.Item>
//                             <NavDropdown.Item href="#action2">Action 2</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#anotherAction">Another Action</NavDropdown.Item>
//                         </NavDropdown>
//                     </Nav>
//                 </Offcanvas.Body>
//             </Offcanvas>
//             </Row>
//         </container>
//     </section>


//     );
// };

// export default Header;











// import React, { useState } from 'react';
// import { Navbar, Nav, NavDropdown, Offcanvas, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';


// const Header = () => {
//   const [showOffCanvas, setShowOffCanvas] = useState(false);

//   const toggleOffCanvas = () => {
//     setShowOffCanvas(!showOffCanvas);
//   }; 

//   return (
//     <>
//       <Navbar bg="light" expand="lg" className="px-3">


//       <Navbar.Brand>
//           <Link to="/" className="nav-link">
//             WeekMonks
//           </Link>
//       </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleOffCanvas} />
//         <Navbar.Collapse className="justify-content-end" >
//           <Nav >
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action1">Action 1</NavDropdown.Item>
//               <NavDropdown.Item href="#action2">Action 2</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#anotherAction">Another Action</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       <Offcanvas show={showOffCanvas} onHide={toggleOffCanvas}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Off Canvas Menu</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <Nav className="flex-column">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="offcanvas-nav-dropdown">
//               <NavDropdown.Item href="#action1">Action 1</NavDropdown.Item>
//               <NavDropdown.Item href="#action2">Action 2</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// };

// export default Header;

















// import React, { useState } from 'react';
// import { Navbar, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';

// const Header = () => {
//     const [showOffCanvas, setShowOffCanvas] = useState(false);

//     const toggleOffCanvas = () => {
//         setShowOffCanvas(!showOffCanvas);
//     };

//     return (
//         <>
//             <Navbar bg="light" expand="lg" className="px-3">


//                 <Navbar.Brand>
//                     <Link to="/" className="nav-link">
//                         WeekMonks
//                     </Link>
//                 </Navbar.Brand>

//                 {/* for opn in the mobile use toggle */}
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleOffCanvas} />

//                 <Navbar.Collapse className="justify-content-end">
//                     <Nav>
//                         <Nav.Link href="#home">Home</Nav.Link>
//                         <Nav.Link href="#link">Link</Nav.Link>
//                         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                             <NavDropdown.Item href="#action1">Action 1</NavDropdown.Item>
//                             <NavDropdown.Item href="#action2">Action 2</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#anotherAction">Another Action</NavDropdown.Item>
//                         </NavDropdown>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar>

//             <Offcanvas show={showOffCanvas} onHide={toggleOffCanvas}>

//                 <Offcanvas.Header closeButton>
//                     <Offcanvas.Title>Off Canvas Menu</Offcanvas.Title>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body>
//                     <Nav className="flex-column">
//                         {/* Only Home and Dropdown will be displayed here */}
//                         <Nav.Link href="#home">Home</Nav.Link>
//                         <Nav.Link href="#link">Link</Nav.Link>
//                         <NavDropdown title="Dropdown" id="offcanvas-nav-dropdown">
//                             <NavDropdown.Item href="#action1">Action 1</NavDropdown.Item>
//                             <NavDropdown.Item href="#action2">Action 2</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#anotherAction">Another Action</NavDropdown.Item>
//                         </NavDropdown>
//                     </Nav>
//                 </Offcanvas.Body>
//             </Offcanvas>
//         </>
//     );
// };

// export default Header;

















// import React, { useState } from 'react';
// import { Navbar, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';

// const Header = () => {
//     const [showOffCanvas, setShowOffCanvas] = useState(false);

//     // Function to toggle the Offcanvas menu
//     const toggleOffCanvas = () => {
//         setShowOffCanvas(!showOffCanvas);
//     };

//     return (
//         <>
//             <Navbar bg="light" expand="lg" className="px-3">
//                 <Navbar.Brand>
//                     <Link to="/" className="nav-link">
//                         WeekMonks
//                     </Link>
//                 </Navbar.Brand>

//                 {/* Toggle button for the Offcanvas */}
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleOffCanvas} />

//                 {/* Conditionally render Navbar items based on Offcanvas state */}
//                 {!showOffCanvas && (
//                     <Navbar.Collapse className="justify-content-end">
//                         <Nav>
//                             <Nav.Link href="#home">Home</Nav.Link>
//                             <Nav.Link href="#link">Link</Nav.Link>
//                             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                                 <NavDropdown.Item href="#action1">Action 1</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action2">Action 2</NavDropdown.Item>
//                                 <NavDropdown.Divider />
//                                 <NavDropdown.Item href="#anotherAction">Another Action</NavDropdown.Item>
//                             </NavDropdown>
//                         </Nav>
//                     </Navbar.Collapse>
//                 )}
//             </Navbar>

//             <Offcanvas show={showOffCanvas} onHide={toggleOffCanvas}>
//                 <Offcanvas.Header closeButton>
//                     <Offcanvas.Title>Off Canvas Menu</Offcanvas.Title>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body>
//                     <Nav className="flex-column">
//                         {/* Only Home and Dropdown will be displayed here */}
//                         <Nav.Link href="#home">Home</Nav.Link>
//                         <Nav.Link href="#link">Link</Nav.Link>
//                         <NavDropdown title="Dropdown" id="offcanvas-nav-dropdown">
//                             <NavDropdown.Item href="#action1">Action 1</NavDropdown.Item>
//                             <NavDropdown.Item href="#action2">Action 2</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#anotherAction">Another Action</NavDropdown.Item>
//                         </NavDropdown>
//                     </Nav>
//                 </Offcanvas.Body>
//             </Offcanvas>
//         </>
//     );
// };

// export default Header;











// import React, { useEffect, useState } from "react";
// import {
//   Container,
//   Navbar,
//   Offcanvas,
//   Nav,
//   NavDropdown,
// } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
// import "../Header/header.css";

// const Header = () => {
//   const [open, setOpen] = useState(false);

//   const toggleMenu = () => {
//     setOpen(!open);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", isSticky);
//     return () => {
//       window.removeEventListener("scroll", isSticky)
//     }
//   })

//   // sticky Header 
//   const isSticky = (e) => {
//     const header = document.querySelector('.header-section');
//     const scrollTop = window.scrollY;
//     scrollTop >= 120 ? header.classList.add('is-sticky') :
//       header.classList.remove('is-sticky')
//   }




//   return (

//     <header className="header-section">
//       <Container>

//         <Navbar expand="lg" className="p-0">
//           {/* Logo Section  */}
//           <Navbar.Brand>
//             <NavLink to="/"> Weekendmonks</NavLink>
//           </Navbar.Brand>
//           {/* End Logo Section  */}

//           <Navbar.Offcanvas
//             id={`offcanvasNavbar-expand-lg`}
//             aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
//             placement="start"
//             show={open}
//           >
//             {/*mobile Logo Section  */}
//             <Offcanvas.Header>
//               <h1 className="logo">Weekendmonks</h1>
//               <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
//                 <i className="bi bi-x-lg"></i>
//               </span>
//             </Offcanvas.Header>
//             {/*end mobile Logo Section  */}

//             <Offcanvas.Body>
//               <Nav className="justify-content-end flex-grow-1 pe-3">
//                 <NavLink className="nav-link" to="/" >
//                   HOME
//                 </NavLink>
//                 <NavLink className="nav-link" to="about-us" >
//                   ABOUT US
//                 </NavLink>
//                 <NavLink className="nav-link" to="tours" >
//                   TOURS
//                 </NavLink>

//                 <NavDropdown
//                   title="DESTINATION"
//                   id={`offcanvasNavbarDropdown-expand-lg`}
//                 >


//                   <NavLink className="nav-link text-dark" to="/" >
//                     SPAIN TOURS
//                   </NavLink>


//                 </NavDropdown>
//                 <NavLink className="nav-link" to="gallery" >
//                   GALLERY
//                 </NavLink>
//                 <NavLink className="nav-link" to="contact-us" >
//                   CONTACT
//                 </NavLink>
//               </Nav>
//             </Offcanvas.Body>
//           </Navbar.Offcanvas>
//           <div className="ms-md-4 ms-2">
//             <NavLink className="primaryBtn d-none d-sm-inline-block">
//               Book Now
//             </NavLink>
//             <li className="d-inline-block d-lg-none ms-3 toggle_btn">
//               <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={toggleMenu}></i>
//             </li>
//           </div>
//         </Navbar>

//       </Container>
//     </header>
//   );
// };

// export default Header;
























import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Header/header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky)
    }
  })

  // sticky Header 
  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 120 ? header.classList.add('is-sticky') :
      header.classList.remove('is-sticky')
  }

  const closeMenu = () => {
    if (window.innerWidth <= 991) {
      setOpen(false)
    }
  }


  return (

    <header className="header-section">
      <Container>

        <Navbar expand="lg" className="p-0">
          {/* Logo Section  */}
          <Navbar.Brand>
            <NavLink to="/"> Weekendmonks</NavLink>
          </Navbar.Brand>
          {/* End Logo Section  */}

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
            show={open}
          >
            {/*mobile Logo Section  */}
            <Offcanvas.Header>
              <h1 className="logo">Weekendmonks</h1>
              <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
                <i className="bi bi-x-lg"></i>
              </span>
            </Offcanvas.Header>
            {/*end mobile Logo Section  */}

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink className="nav-link" to="/" onClick={closeMenu}>
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/about-us" onClick={closeMenu}>
                  ABOUT US
                </NavLink>
                <NavLink className="nav-link" to="/tours" onClick={closeMenu}>
                  TOURS
                </NavLink>

                <NavDropdown
                  title="DESTINATION"
                  id={`offcanvasNavbarDropdown-expand-lg`}
                >


                  <NavLink className="nav-link text-dark" to="/destinations" onClick={closeMenu}>
                    SPAIN TOURS
                  </NavLink>


                </NavDropdown>
                <NavLink className="nav-link" to="/gallery" onClick={closeMenu}>
                  GALLERY
                </NavLink>
                <NavLink className="nav-link" to="/contact-us" onClick={closeMenu}>
                  CONTACT
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className="ms-md-4 ms-2">
            <NavLink className="primaryBtn d-none d-sm-inline-block">
              Book Now
            </NavLink>
            <li className="d-inline-block d-lg-none ms-3 toggle_btn">
              <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={toggleMenu}></i>
            </li>
          </div>
        </Navbar>

      </Container>
    </header>
  );
};

export default Header;





























