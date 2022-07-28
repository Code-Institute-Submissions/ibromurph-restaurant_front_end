import {Fragment} from "react";

const Contact = () => {
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
        <div className="breadcumb-area bg-img bg-overlay" style={{backgroundImage: 'url(img/bg-img/breadcumb4.jpg)'}}>
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12">
                <div className="breadcumb-text text-center">
                  <h2>Recipe</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ##### Breadcumb Area End ##### */}
        {/* ##### Contact Information Area Start ##### */}
        <div className="contact-information-area section-padding-80">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="logo mb-80">
                  <img src="img/core-img/logo.png" alt=""/>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Contact Text */}
              <div className="col-12 col-lg-5">
                <div className="contact-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse
                    potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim.
                    Phasellus posuere vestibulum ipsum, eget lobortis purus.</p>
                  <p>Orci varius natoque penatibus et magnis dis ac pellentesque tortor. Aenean congue parturient
                    montes, nascetur ridiculus mus.</p>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                {/* Single Contact Information */}
                <div className="single-contact-information mb-30">
                  <h6>Address:</h6>
                  <p>481 Creekside Lane Avila <br/>Beach, CA 93424</p>
                </div>
                {/* Single Contact Information */}
                <div className="single-contact-information mb-30">
                  <h6>Phone:</h6>
                  <p>+53 345 7953 32453 <br/>+53 345 7557 822112</p>
                </div>
                {/* Single Contact Information */}
                <div className="single-contact-information mb-30">
                  <h6>Email:</h6>
                  <p>yourmail@gmail.com</p>
                </div>
              </div>
              {/* Newsletter Area */}
              <div className="col-12 col-lg-4">
                <div className="newsletter-form bg-img bg-overlay" style={{backgroundImage: 'url(img/bg-img/bg1.jpg)'}}>
                  <form action="#" method="post">
                    <input type="email" name="email" placeholder="Subscribe to newsletter"/>
                    <button type="submit" className="btn delicious-btn w-100">Subscribe</button>
                  </form>
                  <p>Fusce nec ante vitae lacus aliquet vulputate. Donec sceleri sque accumsan molestie.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ##### Contact Information Area End ##### */}
        {/* ##### Contact Form Area Start ##### */}
        <div className="contact-area section-padding-0-80">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-heading">
                  <h3>Get In Touch</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="contact-form-area">
                  <form action="#" method="post">
                    <div className="row">
                      <div className="col-12 col-lg-6">
                        <input type="text" className="form-control" id="name" placeholder="Name"/>
                      </div>
                      <div className="col-12 col-lg-6">
                        <input type="email" className="form-control" id="email" placeholder="E-mail"/>
                      </div>
                      <div className="col-12">
                        <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                      </div>
                      <div className="col-12">
                        <textarea name="message" className="form-control" id="message" cols={30} rows={10}
                                  placeholder="Message" defaultValue={""}/>
                      </div>
                      <div className="col-12 text-center">
                        <button className="btn delicious-btn mt-30" type="submit">Send</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ##### Contact Form Area End ##### */}
        {/* ##### Google Maps ##### */}
        <div className="map-area">
          <div id="googleMap"/>
        </div>
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
        {/* ##### Footer Area Start ##### */}
        <footer className="footer-area">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-12 h-100 d-flex flex-wrap align-items-center justify-content-between">
                {/* Footer Social Info */}
                <div className="footer-social-info text-right">
                  <a href="#"><i className="fa fa-pinterest" aria-hidden="true"/></a>
                  <a href="#"><i className="fa fa-facebook" aria-hidden="true"/></a>
                  <a href="#"><i className="fa fa-twitter" aria-hidden="true"/></a>
                  <a href="#"><i className="fa fa-dribbble" aria-hidden="true"/></a>
                  <a href="#"><i className="fa fa-behance" aria-hidden="true"/></a>
                  <a href="#"><i className="fa fa-linkedin" aria-hidden="true"/></a>
                </div>
                {/* Footer Logo */}
                <div className="footer-logo">
                  <a href="index.html"><img src="img/core-img/logo.png" alt=""/></a>
                </div>
                {/* Copywrite */}
                <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p></div>
            </div>
          </div>
        </footer>
      </div>

    </Fragment>
  )
}
export default Contact
