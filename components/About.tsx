import React, { useEffect} from "react";
import BreadcrumbComponent from '~/components/App/Breadcrumb';

class AboutComponent extends React.Component {

    render() {
        return (
            <>
                <BreadcrumbComponent title="About Us" name="About" link="about" />
            </>
        );
    }
}

export default AboutComponent;
