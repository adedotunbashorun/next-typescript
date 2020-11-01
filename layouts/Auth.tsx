import React, { useEffect} from "react";

function Auth(props) {

  return (
    <>
      <div className="contain">
        <div className="row">
            <div className="col-lg-7 col-sm-12 login-base d-none d-lg-block">
              <div className="pt-5 pl-5 m-auto">
                <h4 className="text-white">Welcome Back!</h4>
              </div>
            </div>
            <div className="col-lg-5 col-sm-12 col-xs-12 mt-5 px-3">
              {props.children}
            </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
