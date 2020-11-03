import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { capitalizeFirstLetter } from '~/utils/capitalize';
import {
    Breadcrumb,
    BreadcrumbItem
} from 'reactstrap';

function BreadcrumbComponent({currentPage}) {
    const [items, setItems] = useState([]);

    useEffect(() => {   
        pages();
    }, []);

    const pages = () => {
        const items = currentPage.split('-');
        const data= [
          {
            text: 'Home',
            href: '#'
          }
        ]
        items.forEach((element: any) => {
          data.push({ text: capitalizeFirstLetter(element) , href: '#'});
        });
        setItems(data);
    }
    
    return (
        <>
            <Breadcrumb>
            {items.map((item, index) => {
                return(
                    <BreadcrumbItem><Link href={item.href}>{item.text}</Link></BreadcrumbItem>
                );
            })}
            </Breadcrumb>
        </>
    );
}

export default BreadcrumbComponent;
