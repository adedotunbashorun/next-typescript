import React from "react";
import DashboardComponent from "@/components/Admin/Dashboard";
// layout for this page
import App from "~/layouts/Admin";

class Dashboard extends React.Component {
  static layout: (props: any) => JSX.Element;
  render() {
    return (
      <>
        <DashboardComponent />
      </>
    );
  }
}

Dashboard.layout = App;

export default Dashboard;
