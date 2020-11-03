import React, { useEffect, useState} from "react";
import Link from 'next/link';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
  } from 'reactstrap';
import { useRouter } from "next/dist/client/router";

function HeaderComponent() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
        
    return (
        <>
        <div>
            <div className="topbar">
                <div className="container">
                <div className="row flex">
                    <div className="col-lg-8 col-12">
                    <div className="top-contact">
                        <div className="single-contact"><i className="fa fa-phone"></i>Phone: </div>
                        <div className="single-contact"><i className="fa fa-envelope-open"></i>Email: </div>
                        <div className="single-contact"><i className="fa fa-clock-o"></i>Opening: 08AM - 09PM</div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-12">
                    <div className="topbar-right">
                        <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                        </ul>
                        <div className="a"><Link href="login" passHref>Login</Link></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <Navbar color="faded" light expand="md">
                <NavbarBrand onClick={() => router.push('/')}>NextStarter</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link href="/" passHref>Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/about" passHref>About</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/about" passHref>Our Service</Link>
                    </NavItem>
                    {/* <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Options
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                        Option 1
                        </DropdownItem>
                        <DropdownItem>
                        Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        Reset
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown> */}
                </Nav>
                </Collapse>
            </Navbar>
        </div>
        </>
    );
}

export default HeaderComponent;
