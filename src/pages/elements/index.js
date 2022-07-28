import {Fragment} from "react";

const Elements = () => {
  return (
    <Fragment>
      <div>
        {/* Search Wrapper */}
        <div className="search-wrapper">
          {/* Close Btn */}
          <div className="close-btn"><i className="fa fa-times" aria-hidden="true"/></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <form action="#" method="post">
                  <input type="search" name="search" placeholder="Type any keywords..."/>
                  <button type="submit"><i className="fa fa-search" aria-hidden="true"/></button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* ##### Header Area Start ##### */}
        <header className="header-area">
          {/* Top Header Area */}
          <div className="top-header-area">
            <div className="container h-100">
              <div className="row h-100 align-items-center justify-content-between">
                {/* Breaking News */}
                <div className="col-12 col-sm-6">
                  <div className="breaking-news">
                    <div id="breakingNewsTicker" className="ticker">
                      <ul>
                        <li><a href="#">Hello World!</a></li>
                        <li><a href="#">Welcome to Colorlib Family.</a></li>
                        <li><a href="#">Hello Delicious!</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Top Social Info */}
                <div className="col-12 col-sm-6">
                  <div className="top-social-info text-right">
                    <a href="#"><i className="fa fa-pinterest" aria-hidden="true"/></a>
                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"/></a>
                    <a href="#"><i className="fa fa-twitter" aria-hidden="true"/></a>
                    <a href="#"><i className="fa fa-dribbble" aria-hidden="true"/></a>
                    <a href="#"><i className="fa fa-behance" aria-hidden="true"/></a>
                    <a href="#"><i className="fa fa-linkedin" aria-hidden="true"/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Navbar Area */}
          <div className="delicious-main-menu">
            <div className="classy-nav-container breakpoint-off">
              <div className="container">
                {/* Menu */}
                <nav className="classy-navbar justify-content-between" id="deliciousNav">
                  {/* Logo */}
                  <a className="nav-brand" href="index.html"><img src="img/core-img/logo.png" alt=""/></a>
                  {/* Navbar Toggler */}
                  <div className="classy-navbar-toggler">
                    <span className="navbarToggler"><span/><span/><span/></span>
                  </div>
                  {/* Menu */}
                  <div className="classy-menu">
                    {/* close btn */}
                    <div className="classycloseIcon">
                      <div className="cross-wrap"><span className="top"/><span className="bottom"/></div>
                    </div>
                    {/* Nav Start */}
                    <div className="classynav">
                      <ul>
                        <li className="active"><a href="index.html">Home</a></li>
                        <li><a href="#">Pages</a>
                          <ul className="dropdown">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="blog-post.html">Blog Post</a></li>
                            <li><a href="receipe-post.html">Receipe Post</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="elements.html">Elements</a></li>
                            <li><a href="#">Dropdown</a>
                              <ul className="dropdown">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="blog-post.html">Blog Post</a></li>
                                <li><a href="receipe-post.html">Receipe Post</a></li>
                                <li><a href="contact.html">Contact</a></li>
                                <li><a href="elements.html">Elements</a></li>
                                <li><a href="#">Dropdown</a>
                                  <ul className="dropdown">
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="blog-post.html">Blog Post</a></li>
                                    <li><a href="receipe-post.html">Receipe Post</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                    <li><a href="elements.html">Elements</a></li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li><a href="#">Mega Menu</a>
                          <div className="megamenu">
                            <ul className="single-mega cn-col-4">
                              <li className="title">Catagory</li>
                              <li><a href="index.html">Home</a></li>
                              <li><a href="about.html">About Us</a></li>
                              <li><a href="blog-post.html">Blog Post</a></li>
                              <li><a href="receipe-post.html">Receipe Post</a></li>
                              <li><a href="contact.html">Contact</a></li>
                              <li><a href="elements.html">Elements</a></li>
                            </ul>
                            <ul className="single-mega cn-col-4">
                              <li className="title">Catagory</li>
                              <li><a href="index.html">Home</a></li>
                              <li><a href="about.html">About Us</a></li>
                              <li><a href="blog-post.html">Blog Post</a></li>
                              <li><a href="receipe-post.html">Receipe Post</a></li>
                              <li><a href="contact.html">Contact</a></li>
                              <li><a href="elements.html">Elements</a></li>
                            </ul>
                            <ul className="single-mega cn-col-4">
                              <li className="title">Catagory</li>
                              <li><a href="index.html">Home</a></li>
                              <li><a href="about.html">About Us</a></li>
                              <li><a href="blog-post.html">Blog Post</a></li>
                              <li><a href="receipe-post.html">Receipe Post</a></li>
                              <li><a href="contact.html">Contact</a></li>
                              <li><a href="elements.html">Elements</a></li>
                            </ul>
                            <div className="single-mega cn-col-4">
                              <div className="receipe-slider owl-carousel">
                                <a href="#"><img src="img/bg-img/bg1.jpg" alt=""/></a>
                                <a href="#"><img src="img/bg-img/bg6.jpg" alt=""/></a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li><a href="receipe-post.html">Receipies</a></li>
                        <li><a href="receipe-post.html">4 Vegans</a></li>
                        <li><a href="contact.html">Contact</a></li>
                      </ul>
                      {/* Newsletter Form */}
                      <div className="search-btn">
                        <i className="fa fa-search" aria-hidden="true"/>
                      </div>
                    </div>
                    {/* Nav End */}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
        {/* ##### Header Area End ##### */}
        {/* ##### Breadcumb Area Start ##### */}
        <div className="breadcumb-area bg-img bg-overlay" style={{backgroundImage: 'url(img/bg-img/breadcumb5.jpg)'}}>
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
                        <img src="img/core-img/salad.png" alt=""/>
                        <h3><span className="counter">1287</span></h3>
                        <h6>Amazing receipies</h6>
                      </div>
                    </div>
                    {/* Single Cool Fact */}
                    <div className="col-12 col-sm-6 col-lg-3">
                      <div className="single-cool-fact">
                        <img src="img/core-img/hamburger.png" alt=""/>
                        <h3><span className="counter">25</span></h3>
                        <h6>Burger receipies</h6>
                      </div>
                    </div>
                    {/* Single Cool Fact */}
                    <div className="col-12 col-sm-6 col-lg-3">
                      <div className="single-cool-fact">
                        <img src="img/core-img/rib.png" alt=""/>
                        <h3><span className="counter">471</span></h3>
                        <h6>Meat receipies</h6>
                      </div>
                    </div>
                    {/* Single Cool Fact */}
                    <div className="col-12 col-sm-6 col-lg-3">
                      <div className="single-cool-fact">
                        <img src="img/core-img/pancake.png" alt=""/>
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
                        <img src="img/core-img/hamburger2.png" alt=""/>
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
                        <img src="img/core-img/pizza.png" alt=""/>
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
                        <img src="img/core-img/cake2.png" alt=""/>
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
        {/* ##### Follow Us Instagram Area Start ##### */}
        <div className="follow-us-instagram">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h5>Follow Us Instragram</h5>
              </div>
            </div>
          </div>
          {/* Instagram Feeds */}
          <div className="insta-feeds d-flex flex-wrap">
            {/* Single Insta Feeds */}
            <div className="single-insta-feeds">
              <img src="img/bg-img/insta1.jpg" alt=""/>
              {/* Icon */}
              <div className="insta-icon">
                <a href="#"><i className="fa fa-instagram" aria-hidden="true"/></a>
              </div>
            </div>
            {/* Single Insta Feeds */}
            <div className="single-insta-feeds">
              <img src="img/bg-img/insta2.jpg" alt=""/>
              {/* Icon */}
              <div className="insta-icon">
                <a href="#"><i className="fa fa-instagram" aria-hidden="true"/></a>
              </div>
            </div>
            {/* Single Insta Feeds */}
            <div className="single-insta-feeds">
              <img src="img/bg-img/insta3.jpg" alt=""/>
              {/* Icon */}
              <div className="insta-icon">
                <a href="#"><i className="fa fa-instagram" aria-hidden="true"/></a>
              </div>
            </div>
            {/* Single Insta Feeds */}
            <div className="single-insta-feeds">
              <img src="img/bg-img/insta4.jpg" alt=""/>
              {/* Icon */}
              <div className="insta-icon">
                <a href="#"><i className="fa fa-instagram" aria-hidden="true"/></a>
              </div>
            </div>
            {/* Single Insta Feeds */}
            <div className="single-insta-feeds">
              <img src="img/bg-img/insta5.jpg" alt=""/>
              {/* Icon */}
              <div className="insta-icon">
                <a href="#"><i className="fa fa-instagram" aria-hidden="true"/></a>
              </div>
            </div>
            {/* Single Insta Feeds */}
            <div className="single-insta-feeds">
              <img src="img/bg-img/insta6.jpg" alt=""/>
              {/* Icon */}
              <div className="insta-icon">
                <a href="#"><i className="fa fa-instagram" aria-hidden="true"/></a>
              </div>
            </div>
            {/* Single Insta Feeds */}
            <div className="single-insta-feeds">
              <img src="img/bg-img/insta7.jpg" alt=""/>
              {/* Icon */}
              <div className="insta-icon">
                <a href="#"><i className="fa fa-instagram" aria-hidden="true"/></a>
              </div>
            </div>
          </div>
        </div>
        {/* ##### Follow Us Instagram Area End ##### */}
      </div>

    </Fragment>
  )
}
export default Elements
