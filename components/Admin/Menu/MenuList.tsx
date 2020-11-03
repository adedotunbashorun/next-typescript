import React from "react";
import Link from 'next/link';
import baseLinks from "~/utils/menu/base.ts";
import MenuListItem from '~/components/Admin/Menu/MenuListItem';
import configurationLinks from "~/utils/menu/configuration.ts";
import {
    Nav
} from 'reactstrap';
function MenuListComponent() {

    return (
        <>
            <div className="sidebar-sticky pt-3">
                <Nav className="mb-3">
                    {baseLinks.map( (item, ind) => (
                        <MenuListItem item={item} key={ind} />
                    ))}
                </Nav>
                { configurationLinks.length > 0 &&
                    <h6
                    className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
                    >
                    <span>Configuration</span>
                    <a className="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
                        <span data-feather="plus-circle"></span>
                    </a>
                    </h6>

                }   
                <Nav className="mb-3">
                    {configurationLinks.map( (item, ind) => (
                        <MenuListItem item={item} key={ind} />
                    ))}
                </Nav>
            </div>
        </>
    );
}

export default MenuListComponent;
