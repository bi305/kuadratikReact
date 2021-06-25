import {

    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,

} from 'reactstrap';
import { Link } from 'react-router-dom';
const BottomFooter = () => {
    return (
        <>

            < Navbar className="pt-4" color="success" expand="md" style={{ backgroundImage: 'linear-gradient(15deg, #13547a 0%, #80d0c7 100%)' }}>

                <div >
                    <span>Copyright © 2021 kuadratik </span>
                </div>



                <Nav className="ml-auto" navbar>


                    <NavItem>
                        <NavLink href="/" >

                            Home

                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/who-we-are">

                            Who We Are
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/Products">
                            Our Products
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href=" ">
                            Contact Us
                        </NavLink>
                    </NavItem>


                </Nav>




            </Navbar >


        </>




    )
}

export default BottomFooter
