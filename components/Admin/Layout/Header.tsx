import React, { useEffect, useState} from "react";
import Link from 'next/link';
import {
    Navbar,
    NavbarBrand,
    Nav,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';
import { useRouter } from "next/dist/client/router";

function HeaderComponent() {
    const router = useRouter();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
        
    return (
        <>
        <Navbar color="dark" dark fixed="top" className="navbar fixed-top navbar-light bg-light">
            <NavbarBrand className="col-md-3 col-lg-2 mr-0 px-3 ml-3"><img  src={''} className="mr-3" />Setting</NavbarBrand>
            
            <i className="fa fa-bars text-white"></i>
            {/* <Collapse id="nav-collapse" isNav> */}
            <Nav color="dark" dark className="ml-auto d-none d-sm-block" navbar>
                <Dropdown isOpen={dropdownOpen} toggle={toggle} right>
                    <DropdownToggle caret>
                        Name
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                        Account
                        </DropdownItem>
                        <DropdownItem>
                        Settings
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        Sign Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </Nav>
            {/* </Collapse> */}
            </Navbar>
            <Navbar className="d-block d-sm-none mt" fixed="top" type="dark" variant="light" align="right">
                <Nav right className="d-block">
                    <Dropdown isOpen={dropdownOpen} toggle={toggle} right>
                        <DropdownToggle caret>
                            Name
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Account
                            </DropdownItem>
                            <DropdownItem>
                            Settings
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                            Sign Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Nav>
            </Navbar>
        </>
    );
}

export default HeaderComponent;
