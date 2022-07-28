import {Fragment} from "react";

const BlogPost = () => {
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
        <div className="breadcumb-area bg-img bg-overlay" style={{backgroundImage: 'url(img/bg-img/breadcumb2.jpg)'}}>
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12">
                <div className="breadcumb-text text-center">
                  <h2>Blog</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ##### Breadcumb Area End ##### */}
        {/* ##### Blog Area Start ##### */}
        <div className="blog-area section-padding-80">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="blog-posts-area">
                  {/* Single Blog Area */}
                  <div className="single-blog-area mb-80">
                    {/* Thumbnail */}
                    <div className="blog-thumbnail">
                      <img src="img/blog-img/1.jpg" alt=""/>
                      {/* Post Date */}
                      <div className="post-date">
                        <a href="#"><span>05</span>April <br/> 2018</a>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="blog-content">
                      <a href="#" className="post-title">How to find amazing restaurants in your city</a>
                      <div className="meta-data">by <a href="#">Maria Williams</a> in <a href="#">Restaurants</a>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse
                        potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor
                        enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus. </p>
                      <a href="#" className="btn delicious-btn mt-30">Read More</a>
                    </div>
                  </div>
                  {/* Single Blog Area */}
                  <div className="single-blog-area mb-80">
                    {/* Thumbnail */}
                    <div className="blog-thumbnail">
                      <img src="img/blog-img/2.jpg" alt=""/>
                      {/* Post Date */}
                      <div className="post-date">
                        <a href="#"><span>05</span>April <br/> 2018</a>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="blog-content">
                      <a href="#" className="post-title">10 tips to live a healty life</a>
                      <div className="meta-data">by <a href="#">Maria Williams</a> in <a href="#">Restaurants</a>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse
                        potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor
                        enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus. </p>
                      <a href="#" className="btn delicious-btn mt-30">Read More</a>
                    </div>
                  </div>
                  {/* Single Blog Area */}
                  <div className="single-blog-area mb-80">
                    {/* Thumbnail */}
                    <div className="blog-thumbnail">
                      <img src="img/blog-img/3.jpg" alt=""/>
                      {/* Post Date */}
                      <div className="post-date">
                        <a href="#"><span>05</span>April <br/> 2018</a>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="blog-content">
                      <a href="#" className="post-title">5 Tips on how to cook the best hamburger</a>
                      <div className="meta-data">by <a href="#">Maria Williams</a> in <a href="#">Restaurants</a>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse
                        potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor
                        enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus. </p>
                      <a href="#" className="btn delicious-btn mt-30">Read More</a>
                    </div>
                  </div>
                </div>
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item active"><a className="page-link" href="#">01.</a></li>
                    <li className="page-item"><a className="page-link" href="#">02.</a></li>
                    <li className="page-item"><a className="page-link" href="#">03.</a></li>
                  </ul>
                </nav>
              </div>
              <div className="col-12 col-lg-4">
                <div className="blog-sidebar-area">
                  {/* Widget */}
                  <div className="single-widget mb-80">
                    <h6>Archive</h6>
                    <ul className="list">
                      <li><a href="#">March 2018</a></li>
                      <li><a href="#">February 2018</a></li>
                      <li><a href="#">January 2018</a></li>
                      <li><a href="#">December 2017</a></li>
                      <li><a href="#">November 2017</a></li>
                    </ul>
                  </div>
                  {/* Widget */}
                  <div className="single-widget mb-80">
                    <h6>Categories</h6>
                    <ul className="list">
                      <li><a href="#">Restaurants</a></li>
                      <li><a href="#">Food &amp; Drinks</a></li>
                      <li><a href="#">Vegans</a></li>
                      <li><a href="#">Events &amp; Lifestyle</a></li>
                      <li><a href="#">Uncategorized</a></li>
                    </ul>
                  </div>
                  {/* Widget */}
                  <div className="single-widget mb-80">
                    <h6>Newsletter</h6>
                    {/* Form */}
                    <div className="newsletter-form bg-img bg-overlay"
                         style={{backgroundImage: 'url(img/bg-img/bg1.jpg)'}}>
                      <form action="#" method="post">
                        <input type="email" name="email" placeholder="Subscribe to newsletter"/>
                        <button type="submit" className="btn delicious-btn w-100">Subscribe</button>
                      </form>
                      <p>Fusce nec ante vitae lacus aliquet vulputate. Donec sceleri sque accumsan molestie. Vestibulum
                        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
                    </div>
                  </div>
                  {/* Widget */}
                  <div className="single-widget mb-80">
                    <div className="quote-area text-center">
                      <span>"</span>
                      <h4>Nothing is better than going home to family and eating good food and relaxing</h4>
                      <p>John Smith</p>
                      <div className="date-comments d-flex justify-content-between">
                        <div className="date">January 04, 2018</div>
                        <div className="comments">2 Comments</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ##### Blog Area End ##### */}
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
      </div>

    </Fragment>
  )
}
export default BlogPost
