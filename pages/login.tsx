import React from "react";
import LoginComponent from "@/components/login";
// layout for this page
import Auth from "@/layouts/Auth";

class Login extends React.Component {
  static layout: (props: any) => JSX.Element;
  render() {
    return (
      <>
        <LoginComponent/>
      </>
    );
  }
}

Login.layout = Auth;

export default Login;
