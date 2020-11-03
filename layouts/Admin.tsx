import React from "react";
import { useRouter } from "next/router";
import MainHeader from '~/components/Admin/Layout/Header';
import Breadcrumb from '~/components/Admin/Layout/Breadcrumb';
import Footer from '~/components/Admin/Layout/Footer';
import SideBar from '~/components/Admin/Layout/SideBar';

function Admin(props) {
  // used for checking current route
  const router = useRouter();
  return (
    <>
      <MainHeader />
        <div className="container-fluid">
          <div className="row">
            <SideBar />
            <main role="main" className={(props.children) ? 'content col-xl-10 col-lg-9 col-md-9 ml-sm-auto col-sm-9 col-xs-9 px-md-4 overflow-hidden': 'content col-md-12 ml-sm-auto col-lg-12 px-md-4 overflow-hidden'}>
              <Breadcrumb currentPage={router.pathname} />
              {props.children}
            </main>
          </div>
        </div>
      <Footer/>
    </>
  );
}

export default Admin;
