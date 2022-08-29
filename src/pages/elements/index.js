import {Fragment} from "react";
import breadcumb5 from '../../assets/img/bg-img/breadcumb5.jpg'
import salad from '../../assets/img/core-img/salad.png'
import hamburger from '../../assets/img/core-img/hamburger.png'
import hamburger2 from '../../assets/img/core-img/hamburger2.png'
import pizza from '../../assets/img/core-img/pizza.png'
import cake2 from '../../assets/img/core-img/cake2.png'
import rib from '../../assets/img/core-img/rib.png'
import pancakes from '../../assets/img/core-img/pancake.png'
import Instagram from "../Instagram";
import Footer from "../Footer";
const Elements = () => {
  return (
    <Fragment>
      <div>
        {/*<Navbar/>*/}
        {/* ##### Breadcumb Area Start ##### */}
        <div className="breadcumb-area bg-img bg-overlay" style={{backgroundImage: `url(${breadcumb5})`}}>
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12">
                <div className="breadcumb-text text-center">
                  <h2>Elements</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ##### Breadcumb Area End ##### */}
        {/* ##### Elements Area Start ##### */}
        <section className="elements-area section-padding-80-0">
          <div className="container">
            <div className="row">
              {/* ********** Buttons ********** */}
              <div className="col-12">
                <div className="elements-title">
                  <h2>Buttons</h2>
                </div>
                {/* Buttons */}
                <div className="delicious-buttons-area mb-80">
                  <a href="#" className="btn delicious-btn m-1">See Receipe</a>
                  <a href="#" className="btn delicious-btn btn-2 m-1">See Receipe</a>
                  <a href="#" className="btn delicious-btn btn-3 m-1">See Receipe</a>
                  <a href="#" className="btn delicious-btn btn-4 m-1">See Receipe</a>
                </div>
              </div>
              {/* ********** Progress Bars & Accordions ********** */}
              <div className="col-12">
                <div className="elements-title mb-80">
                  <h2>Accordians &amp; Tabs</h2>
                </div>
              </div>
              {/* ##### Accordians ##### */}
              <div className="col-12 col-lg-6">
                <div className="accordions mb-80" id="accordion" role="tablist" aria-multiselectable="true">
                  {/* Single Accordian Area */}
                  <div className="panel single-accordion">
                    <h6><a role="button" className aria-expanded="true" aria-controls="collapseOne"
                           data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Aenean hendrerit varius
                      massa quis laoreet.
                      <span className="accor-open"><i className="fa fa-plus" aria-hidden="true"/></span>
                      <span className="accor-close"><i className="fa fa-minus" aria-hidden="true"/></span>
                    </a></h6>
                    <div id="collapseOne" className="accordion-content collapse show">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lectus eu felis semper finibus
                        ac eget ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate id justo
                        quis facilisis.</p>
                    </div>
                  </div>
                  {/* Single Accordian Area */}
                  <div className="panel single-accordion">
                    <h6>
                      <a role="button" className="collapsed" aria-expanded="true" aria-controls="collapseTwo"
                         data-parent="#accordion" data-toggle="collapse" href="#collapseTwo">Hendrerit varius massa quis
                        laoreet.
                        <span className="accor-open"><i className="fa fa-plus" aria-hidden="true"/></span>
                        <span className="accor-close"><i className="fa fa-minus" aria-hidden="true"/></span>
                      </a>
                    </h6>
                    <div id="collapseTwo" className="accordion-content collapse">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lectus eu felis semper finibus
                        ac eget ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate id justo
                        quis facilisis.</p>
                    </div>
                  </div>
                  {/* Single Accordian Area */}
                  <div className="panel single-accordion">
                    <h6>
                      <a role="button" aria-expanded="true" aria-controls="collapseThree" className="collapsed"
                         data-parent="#accordion" data-toggle="collapse" href="#collapseThree">Aenean hendrerit varius
                        massa quis laoreet.
                        <span className="accor-open"><i className="fa fa-plus" aria-hidden="true"/></span>
                        <span className="accor-close"><i className="fa fa-minus" aria-hidden="true"/></span>
                      </a>
                    </h6>
                    <div id="collapseThree" className="accordion-content collapse">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lectus eu felis semper finibus
                        ac eget ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate id justo
                        quis facilisis.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ##### Tabs ##### */}
              <div className="col-12 col-lg-6">
                <div className="delicious-tabs-content">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link" id="tab--1" data-toggle="tab" href="#tab1" role="tab" aria-controls="tab1"
                         aria-selected="false">Varius massa</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" id="tab--2" data-toggle="tab" href="#tab2" role="tab"
                         aria-controls="tab2" aria-selected="false">Hendrerit varius</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="tab--3" data-toggle="tab" href="#tab3" role="tab" aria-controls="tab3"
                         aria-selected="true">Aenean hendrerit</a>
                    </li>
                  </ul>
                  <div className="tab-content mb-80" id="myTabContent">
                    <div className="tab-pane fade" id="tab1" role="tabpanel" aria-labelledby="tab--1">
                      <div className="delicious-tab-content">
                        {/* Tab Text */}
                        <div className="delicious-tab-text">
                          <p>Integer nec bibendum lacus. Praesent malesuada congue, Suspendisse dictum enim sit amet
                            libero malesu ada feugiat. Praesent malesuada congue magna at finibus. In hac habitasse
                            platea dictumst. Curabitur rhoncus auctor eleifend. Praesent malesuada congue.</p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade show active" id="tab2" role="tabpanel" aria-labelledby="tab--2">
                      <div className="delicious-tab-content">
                        {/* Tab Text */}
                        <div className="delicious-tab-text">
                          <p>Integer nec bibendum lacus. Praesent malesuada congue, Suspendisse dictum enim sit amet
                            libero malesu ada feugiat. Praesent malesuada congue magna at finibus. In hac habitasse
                            platea dictumst. Curabitur rhoncus auctor eleifend. Praesent malesuada congue.</p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab--3">
                      <div className="delicious-tab-content">
                        {/* Tab Text */}
                        <div className="delicious-tab-text">
                          <p>Integer nec bibendum lacus. Praesent malesuada congue, Suspendisse dictum enim sit amet
                            libero malesu ada feugiat. Praesent malesuada congue magna at finibus. In hac habitasse
                            platea dictumst. Curabitur rhoncus auctor eleifend. Praesent malesuada congue.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ********** Milestones ********** */}
              <div className="col-12">
                <div className="elements-title mb-80">
                  <h2>Milestone</h2>
                </div>
              </div>
              <div className="col-12">
                <div className="delicious-cool-facts-area">
                  <div className="row">
                    {/* Single Cool Fact */}
                    <div className="col-12 col-sm-6 col-lg-3">
                      <div className="single-cool-fact">
                        <img src={salad} alt=""/>
                        <h3><span className="counter">1287</span></h3>
                        <h6>Amazing receipies</h6>
                      </div>
                    </div>
                    {/* Single Cool Fact */}
                    <div className="col-12 col-sm-6 col-lg-3">
                      <div className="single-cool-fact">
                        <img src={hamburger} alt=""/>
                        <h3><span className="counter">25</span></h3>
                        <h6>Burger receipies</h6>
                      </div>
                    </div>
                    {/* Single Cool Fact */}
                    <div className="col-12 col-sm-6 col-lg-3">
                      <div className="single-cool-fact">
                        <img src={rib} alt=""/>
                        <h3><span className="counter">471</span></h3>
                        <h6>Meat receipies</h6>
                      </div>
                    </div>
                    {/* Single Cool Fact */}
                    <div className="col-12 col-sm-6 col-lg-3">
                      <div className="single-cool-fact">
                        <img src={pancakes} alt=""/>
                        <h3><span className="counter">326</span></h3>
                        <h6>Desert receipies</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ********** Loaders ********** */}
              <div className="col-12">
                <div className="elements-title mb-80">
                  <h2>Loaders</h2>
                </div>
              </div>
              <div className="col-12">
                {/* Loaders Area Start */}
                <div className="our-skills-area text-center">
                  <div className="row">
                    {/* Single Bar Circle */}
                    <div className="col-12 col-sm-6 col-md-3">
                      <div className="single-pie-bar mb-80" data-percent={95}>
                        <canvas className="bar-circle" width={70} height={70}/>
                        <h6>Recipies</h6>
                      </div>
                    </div>
                    {/* Single Bar Circle */}
                    <div className="col-12 col-sm-6 col-md-3">
                      <div className="single-pie-bar mb-80" data-percent={100}>
                        <canvas className="bar-circle" width={70} height={70}/>
                        <h6>Pure Love</h6>
                      </div>
                    </div>
                    {/* Single Bar Circle */}
                    <div className="col-12 col-sm-6 col-md-3">
                      <div className="single-pie-bar mb-80" data-percent={85}>
                        <canvas className="bar-circle" width={70} height={70}/>
                        <h6>Creativity</h6>
                      </div>
                    </div>
                    {/* Single Bar Circle */}
                    <div className="col-12 col-sm-6 col-md-3">
                      <div className="single-pie-bar mb-80" data-percent={52}>
                        <canvas className="bar-circle" width={70} height={70}/>
                        <h6>Passion</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ********** Icon Boxes ********** */}
              <div className="col-12">
                <div className="elements-title mb-80">
                  <h2>Icon Boxes</h2>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  {/* Single Course Area */}
                  <div className="col-12 col-sm-6 col-lg-4">
                    <div className="single-feature-area mb-80">
                      <div className="d-flex align-items-center mb-30">
                        <img src={hamburger2} alt=""/>
                        <h5>Amazing Recipies</h5>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse
                        potenti. Vestibulum ac pellentesque tortor.</p>
                    </div>
                  </div>
                  {/* Single Course Area */}
                  <div className="col-12 col-sm-6 col-lg-4">
                    <div className="single-feature-area mb-80">
                      <div className="d-flex align-items-center mb-30">
                        <img src={pizza} alt=""/>
                        <h5>Italian Food</h5>
                      </div>
                      <p>Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum,
                        eget lobortis purus. Orci varius natoque penatibu.</p>
                    </div>
                  </div>
                  {/* Single Course Area */}
                  <div className="col-12 col-sm-6 col-lg-4">
                    <div className="single-feature-area mb-80">
                      <div className="d-flex align-items-center mb-30">
                        <img src={cake2} alt=""/>
                        <h5>Sweets &amp; Cakes</h5>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse
                        potenti. Vestibulum ac pellentesque tortor.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Elements Area End ***** */}
        <Instagram/>
        <Footer/>
      </div>
    </Fragment>
  )
}
export default Elements
