import {Fragment} from "react";
import Sushi from '../../assets/img/bg-img/r1.jpg'
import HomemadeBurger from '../../assets/img/bg-img/r2.jpg'
import VeganSmoothie from '../../assets/img/bg-img/r3.jpg'
import r4 from '../../assets/img/bg-img/r4.jpg'
import r5 from '../../assets/img/bg-img/r5.jpg'
import r6 from '../../assets/img/bg-img/r6.jpg'
import bg4 from '../../assets/img/bg-img/bg4.jpg'
import sr1 from '../../assets/img/bg-img/sr1.jpg'
import sr2 from '../../assets/img/bg-img/sr2.jpg'
import sr3 from '../../assets/img/bg-img/sr3.jpg'
import sr4 from '../../assets/img/bg-img/sr4.jpg'
import sr5 from '../../assets/img/bg-img/sr5.jpg'
import sr6 from '../../assets/img/bg-img/sr6.jpg'
import sr7 from '../../assets/img/bg-img/sr7.jpg'
import sr8 from '../../assets/img/bg-img/sr8.jpg'
import sr9 from '../../assets/img/bg-img/sr9.jpg'
import bg1 from '../../assets/img/bg-img/bg1.jpg'
import bg2 from '../../assets/img/bg-img/bg2.jpg'
import bg3 from '../../assets/img/bg-img/bg3.jpg'
import bg6 from '../../assets/img/bg-img/bg6.jpg'
import bg7 from '../../assets/img/bg-img/bg7.jpg'

import add from '../../assets/img/bg-img/add.png'
import Instagram from "../Instagram";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Home = () => {

  return (
    <Fragment>
      <div>
        <Navbar/>
        {/* ##### Hero Area Start ##### */}
        <section className="hero-area">
          <div className="hero-slides owl-carousel">
            {/* Single Hero Slide */}
            <div className="single-hero-slide bg-img" style={{backgroundImage: `url(${bg1})`}}>
              <div className="container h-100">
                <div className="row h-100 align-items-center">
                  <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div className="hero-slides-content" data-animation="fadeInUp" data-delay="100ms">
                      <h2 data-animation="fadeInUp" data-delay="300ms">Delicios Homemade Burger</h2>
                      <p data-animation="fadeInUp" data-delay="700ms">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique,
                        ac posuere arcu varius.</p>
                      <a href="#" className="btn delicious-btn" data-animation="fadeInUp" data-delay="1000ms">See
                        Receipe</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Hero Slide */}
            <div className="single-hero-slide bg-img" style={{backgroundImage: `url(${bg6})`}}>
              <div className="container h-100">
                <div className="row h-100 align-items-center">
                  <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div className="hero-slides-content" data-animation="fadeInUp" data-delay="100ms">
                      <h2 data-animation="fadeInUp" data-delay="300ms">Delicios Homemade Burger</h2>
                      <p data-animation="fadeInUp" data-delay="700ms">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique,
                        ac posuere arcu varius.</p>
                      <a href="#" className="btn delicious-btn" data-animation="fadeInUp" data-delay="1000ms">See
                        Receipe</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Hero Slide */}
            <div className="single-hero-slide bg-img" style={{backgroundImage: `url(${bg7})`}}>
              <div className="container h-100">
                <div className="row h-100 align-items-center">
                  <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div className="hero-slides-content" data-animation="fadeInUp" data-delay="100ms">
                      <h2 data-animation="fadeInUp" data-delay="300ms">Delicios Homemade Burger</h2>
                      <p data-animation="fadeInUp" data-delay="700ms">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique,
                        ac posuere arcu varius.</p>
                      <a href="#" className="btn delicious-btn" data-animation="fadeInUp" data-delay="1000ms">See
                        Receipe</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ##### Hero Area End ##### */}
        {/* ##### Top Catagory Area Start ##### */}
        <section className="top-catagory-area section-padding-80-0">
          <div className="container">
            <div className="row">
              {/* Top Catagory Area */}
              <div className="col-12 col-lg-6">
                <div className="single-top-catagory">
                  <img src={bg2} alt=""/>
                  {/* Content */}
                  <div className="top-cta-content">
                    <h3>Strawberry Cake</h3>
                    <h6>Simple &amp; Delicios</h6>
                    <a href="receipe-post.html" className="btn delicious-btn">See Full Receipe</a>
                  </div>
                </div>
              </div>
              {/* Top Catagory Area */}
              <div className="col-12 col-lg-6">
                <div className="single-top-catagory">
                  <img src={bg3} alt=""/>
                  {/* Content */}
                  <div className="top-cta-content">
                    <h3>Chinesse Noodles</h3>
                    <h6>Simple &amp; Delicios</h6>
                    <a href="receipe-post.html" className="btn delicious-btn">See Full Receipe</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ##### Top Catagory Area End ##### */}
        {/* ##### Best Receipe Area Start ##### */}
        <section className="best-receipe-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-heading">
                  <h3>The best Receipies</h3>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Single Best Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-best-receipe-area mb-30">
                  <img src={Sushi} alt=""/>
                  <div className="receipe-content">
                    <a href="receipe-post.html">
                      <h5>Sushi Easy Receipy</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star-o" aria-hidden="true"/>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Best Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-best-receipe-area mb-30">
                  <img src={HomemadeBurger} alt=""/>
                  <div className="receipe-content">
                    <a href="receipe-post.html">
                      <h5>Homemade Burger</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star-o" aria-hidden="true"/>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Best Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-best-receipe-area mb-30">
                  <img src={VeganSmoothie} alt=""/>
                  <div className="receipe-content">
                    <a href="receipe-post.html">
                      <h5>Vegan Smoothie</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star-o" aria-hidden="true"/>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Best Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-best-receipe-area mb-30">
                  <img src={r4} alt=""/>
                  <div className="receipe-content">
                    <a href="receipe-post.html">
                      <h5>Calabasa soup</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star-o" aria-hidden="true"/>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Best Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-best-receipe-area mb-30">
                  <img src={r5} alt=".."/>
                  <div className="receipe-content">
                    <a href="receipe-post.html">
                      <h5>Homemade Breakfast</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star-o" aria-hidden="true"/>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Best Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-best-receipe-area mb-30">
                  <img src={r6} alt=""/>
                  <div className="receipe-content">
                    <a href="receipe-post.html">
                      <h5>Healthy Fruit Desert</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star-o" aria-hidden="true"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ##### Best Receipe Area End ##### */}
        {/* ##### CTA Area Start ##### */}
        <section className="cta-area bg-img bg-overlay" style={{backgroundImage: `url(${bg4})`}}>
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12">
                {/* Cta Content */}
                <div className="cta-content text-center">
                  <h2>Gluten Free Receipies</h2>
                  <p>Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie. Vestibulum ante
                    ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras sed accumsan neque. Ut
                    vulputate, lectus vel aliquam congue, risus leo elementum nibh</p>
                  <a href="#" className="btn delicious-btn">Discover all the receipies</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ##### CTA Area End ##### */}
        {/* ##### Small Receipe Area Start ##### */}
        <section className="small-receipe-area section-padding-80-0">
          <div className="container">
            <div className="row">
              {/* Small Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-small-receipe-area d-flex">
                  {/* Receipe Thumb */}
                  <div className="receipe-thumb">
                    <img src={sr1} alt=""/>
                  </div>
                  {/* Receipe Content */}
                  <div className="receipe-content">
                    <span>January 04, 2018</span>
                    <a href="receipe-post.html">
                      <h5>Homemade italian pasta</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star-o" aria-hidden="true"/>
                    </div>
                    <p>2 Comments</p>
                  </div>
                </div>
              </div>
              {/* Small Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-small-receipe-area d-flex">
                  {/* Receipe Thumb */}
                  <div className="receipe-thumb">
                    <img src={sr2} alt=""/>
                  </div>
                  {/* Receipe Content */}
                  <div className="receipe-content">
                    <span>January 04, 2018</span>
                    <a href="receipe-post.html">
                      <h5>Baked Bread</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star-o" aria-hidden="true"/>
                    </div>
                    <p>2 Comments</p>
                  </div>
                </div>
              </div>
              {/* Small Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-small-receipe-area d-flex">
                  {/* Receipe Thumb */}
                  <div className="receipe-thumb">
                    <img src={sr3} alt=""/>
                  </div>
                  {/* Receipe Content */}
                  <div className="receipe-content">
                    <span>January 04, 2018</span>
                    <a href="receipe-post.html">
                      <h5>Scalops on salt</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star-o" aria-hidden="true"/>
                    </div>
                    <p>2 Comments</p>
                  </div>
                </div>
              </div>
              {/* Small Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-small-receipe-area d-flex">
                  {/* Receipe Thumb */}
                  <div className="receipe-thumb">
                    <img src={sr4} alt=""/>
                  </div>
                  {/* Receipe Content */}
                  <div className="receipe-content">
                    <span>January 04, 2018</span>
                    <a href="receipe-post.html">
                      <h5>Fruits on plate</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star-o" aria-hidden="true"/>
                    </div>
                    <p>2 Comments</p>
                  </div>
                </div>
              </div>
              {/* Small Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-small-receipe-area d-flex">
                  {/* Receipe Thumb */}
                  <div className="receipe-thumb">
                    <img src={sr5} alt=""/>
                  </div>
                  {/* Receipe Content */}
                  <div className="receipe-content">
                    <span>January 04, 2018</span>
                    <a href="receipe-post.html">
                      <h5>Macaroons</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star-o" aria-hidden="true"/>
                    </div>
                    <p>2 Comments</p>
                  </div>
                </div>
              </div>
              {/* Small Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-small-receipe-area d-flex">
                  {/* Receipe Thumb */}
                  <div className="receipe-thumb">
                    <img src={sr6} alt=""/>
                  </div>
                  {/* Receipe Content */}
                  <div className="receipe-content">
                    <span>January 04, 2018</span>
                    <a href="receipe-post.html">
                      <h5>Chocolate tart</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star-o" aria-hidden="true"/>
                    </div>
                    <p>2 Comments</p>
                  </div>
                </div>
              </div>
              {/* Small Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-small-receipe-area d-flex">
                  {/* Receipe Thumb */}
                  <div className="receipe-thumb">
                    <img src={sr7} alt=""/>
                  </div>
                  {/* Receipe Content */}
                  <div className="receipe-content">
                    <span>January 04, 2018</span>
                    <a href="receipe-post.html">
                      <h5>Berry Desert</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star-o" aria-hidden="true"/>
                    </div>
                    <p>2 Comments</p>
                  </div>
                </div>
              </div>
              {/* Small Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-small-receipe-area d-flex">
                  {/* Receipe Thumb */}
                  <div className="receipe-thumb">
                    <img src={sr8} alt=""/>
                  </div>
                  {/* Receipe Content */}
                  <div className="receipe-content">
                    <span>January 04, 2018</span>
                    <a href="receipe-post.html">
                      <h5>Zucchini Grilled on peper</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star-o" aria-hidden="true"/>
                    </div>
                    <p>2 Comments</p>
                  </div>
                </div>
              </div>
              {/* Small Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-small-receipe-area d-flex">
                  {/* Receipe Thumb */}
                  <div className="receipe-thumb">
                    <img src={sr9} alt=""/>
                  </div>
                  {/* Receipe Content */}
                  <div className="receipe-content">
                    <span>January 04, 2018</span>
                    <a href="receipe-post.html">
                      <h5>Chicken Salad</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star" aria-hidden="true"/>
                      <i className="fa fa-star-o" aria-hidden="true"/>
                    </div>
                    <p>2 Comments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ##### Small Receipe Area End ##### */}
        {/* ##### Quote Subscribe Area Start ##### */}
        <section className="quote-subscribe-adds">
          <div className="container">
            <div className="row align-items-end">
              {/* Quote */}
              <div className="col-12 col-lg-4">
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
              {/* Newsletter */}
              <div className="col-12 col-lg-4">
                <div className="newsletter-area">
                  <h4>Subscribe to our newsletter</h4>
                  {/* Form */}
                  <div className="newsletter-form bg-img bg-overlay"
                       style={{backgroundImage: `url(${bg1})`}}>
                    <form action="#" method="post">
                      <input type="email" name="email" placeholder="Subscribe to newsletter"/>
                      <button type="submit" className="btn delicious-btn w-100">Subscribe</button>
                    </form>
                    <p>Fusce nec ante vitae lacus aliquet vulputate. Donec sceleri sque accumsan molestie. Vestibulum
                      ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
                  </div>
                </div>
              </div>
              {/* Adds */}
              <div className="col-12 col-lg-4">
                <div className="delicious-add">
                  <img src={add} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ##### Quote Subscribe Area End ##### */}
        {/* ##### Follow Us Instagram Area Start ##### */}
        <Instagram/>
        {/* ##### Follow Us Instagram Area End ##### */}
        <Footer/>
      </div>
    </Fragment>
  )
}
export default Home

