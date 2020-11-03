import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { NavItem, NavLink } from 'reactstrap';
import { useRouter } from "next/router";
type Props = {
    item: {
        icon?: string,
        title?: string,
        url?: string,
        children?: any[]
    },
    key: number,
}
function MenuListItemComponent({item, key}: Props) {
    const router = useRouter();
    const [hasDropdown, setHasDropdown] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);
    const [show, setShow] = useState(false);
    const activeRoute = (routeName) => {
        return router.route.indexOf(routeName) > -1;
    };
    useEffect(() => {
        setHasDropdown((item.children.length > 0) ? true : false)
        setShowDropDown(show);
    },[show]);

    const itemMenu = (item) => {
        return (
            <div>
                <li onClick={() => (hasDropdown) ? setShow(!show) : ''} className={hasDropdown ? 'nav-item nav-dropdown' : 'nav-item'}>
                    <span onClick={() => (hasDropdown) ? '#' : router.push('/'+item.url)} className={(hasDropdown) ?'nav-link  nav-dropdown-toggle': 'nav-link'}>
                        <div className="d-flex justify-content-start align-items-center">
                            <i className={item.icon}></i>
                            <span className="menu-collapsed">{ item.title }</span>
                            <span
                            className={
                                (hasDropdown && !showDropDown) ? 'fa fa-angle-left ml-auto' :
                                ((showDropDown && hasDropdown && item.children.length > 0) ? 'fa fa-angle-down ml-auto': '') 
                            }>
                            </span>
                        </div>
                    </span>
                </li>
                <ul>
                    {(hasDropdown && showDropDown) && item.children.map((child, ind) => itemMenu(child))}
                </ul>
            </div>
        )
        
    }
    return (
        <>
            {itemMenu(item)}
        </>
    );
}

export default MenuListItemComponent;
