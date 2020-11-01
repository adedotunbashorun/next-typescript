import React from "react";
import Link from 'next/link';

function BreadcrumbComponent({link, name, title}) {
        
    return (
        <>
            <div className="breadcrumbs overlay">
                <div className="container">
                <div className="row">
                    <div className="col-12">
                    <div className="bread-inner">
                        <div className="bread-menu">
                        <ul>
                            <li><Link href="'/'">Home</Link></li>
                            <li><Link  href={link}>{ name }</Link></li>
                        </ul>
                        </div>
                        <div className="bread-title"><h2>{ title }</h2></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default BreadcrumbComponent;
