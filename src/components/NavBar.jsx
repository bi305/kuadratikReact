import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, } from 'reactstrap';
import WhoWeAre from '../WhoWeAre';
import Home from '../Home';
import Products from '../Products';
import About from '../About';
import ContactsUs from '../ContactsUs';
import "../css/NavBar.css"



const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Router>


            <Navbar light expand="md" className="py-3 " style={{ backgroundImage: 'linear-gradient(15deg, #13547a 0%, #80d0c7 100%)' }}>
                {/*
            its  for  purple gradient  
            linear-gradient(40deg,#ff6ec4,#7873f5)!important */}
                <NavbarBrand href="/"><h1>

                    <img src="http://kuadratik.com/wp-content/uploads/2020/10/km-logo-black.svg" width="200px" />
                </h1>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/" >
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/who-we-are">
                                Who We Are
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/products">
                                Products
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact-us">
                                Contact Us
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>



            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about" >
                    <About />
                </Route>
                <Route path="/Who-we-are">
                    <WhoWeAre />
                </Route>
                <Route path="/products">
                    < Products />
                </Route>
                <Route path="/contact-us">
                    < ContactsUs />
                </Route>
            </Switch>

        </Router >

    )
}

export default NavBar