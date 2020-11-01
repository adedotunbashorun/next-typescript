import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import App from '~/layouts/App';

class Home extends React.Component {
  static layout: (props: any) => JSX.Element;
  render() {
    return (
      <div>
      <Jumbotron>
          <h1 className="display-3">CoinBase</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary">Get Started</Button>
          </p>
        </Jumbotron>
        <section className="features-area section-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-feature">
                  <div className="icon-head"><i className="fa fa-podcast"></i></div>
                  <h4><a href="service-single.html">Creative Design</a></h4>
                  <p>Aenean aliquet rutrum enimn scelerisque. Nam dictumanpo, antequis laoreet ullamcorper, velitsd odio scelerisque tod</p>
                  <div className="button">
                    <a href="service-single.html" className="bizwheel-btn"><i className="fa fa-arrow-circle-o-right"></i>Learn More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-feature">
                  <div className="icon-head"><i className="fa fa-podcast"></i></div>
                  <h4><a href="service-single.html">Quality Service</a></h4>
                  <p>Aenean aliquet rutrum enimn scelerisque. Nam dictumanpo, antequis laoreet ullamcorper, velitsd odio scelerisque tod</p>
                  <div className="button">
                    <a href="service-single.html" className="bizwheel-btn"><i className="fa fa-arrow-circle-o-right"></i>Learn More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                
                <div className="single-feature active">
                  <div className="icon-head"><i className="fa fa-podcast"></i></div>
                  <h4><a href="service-single.html">On-time Delivery</a></h4>
                  <p>Aenean aliquet rutrum enimn scelerisque. Nam dictumanpo, antequis laoreet ullamcorper, velitsd odio scelerisque tod</p>
                  <div className="button">
                    <a href="service-single.html" className="bizwheel-btn"><i className="fa fa-arrow-circle-o-right"></i>Learn More</a>
                  </div>
                </div>
                
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                
                <div className="single-feature">
                  <div className="icon-head"><i className="fa fa-podcast"></i></div>
                  <h4><a href="service-single.html">24/7 Live support</a></h4>
                  <p>Aenean aliquet rutrum enimn scelerisque. Nam dictumanpo, antequis laoreet ullamcorper, velitsd odio scelerisque tod</p>
                  <div className="button">
                    <a href="service-single.html" className="bizwheel-btn"><i className="fa fa-arrow-circle-o-right"></i>Learn More</a>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>
        <section className="call-action overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-12">
                <div className="call-inner">
                  <h2>Brand Products &amp; Creativity is our Fashion</h2>
                  <p>ehicula maximus velit. Morbi non tincidunt purus, a hendrerit nisi. Vivamus elementum</p>
                </div>
              </div>
              <div className="col-lg-3 col-12">
                <div className="button">
                  <a href="portfolio.html" className="btn bizwheel-btn">Our Portfolio</a>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
    )
  }
}
Home.layout = App;
export default Home;
