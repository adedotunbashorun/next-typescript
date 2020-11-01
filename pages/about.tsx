import React from "react";
import AboutComponent from "@/components/About";
// layout for this page
import App from "~/layouts/App";

class About extends React.Component {
  static layout: (props: any) => JSX.Element;
  render() {
    return (
      <>
        <AboutComponent />
      </>
    );
  }
}

About.layout = App;

export default About;
