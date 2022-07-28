import {Fragment} from "react";
import ig1 from '../../assets/img/bg-img/insta1.jpg'
import ig2 from '../../assets/img/bg-img/insta2.jpg'
import ig3 from '../../assets/img/bg-img/insta3.jpg'
import ig4 from '../../assets/img/bg-img/insta4.jpg'
import ig5 from '../../assets/img/bg-img/insta5.jpg'
import ig6 from '../../assets/img/bg-img/insta6.jpg'
import ig7 from '../../assets/img/bg-img/insta7.jpg'

const Instagram = () => {
  return (
    <Fragment>
      <div className="follow-us-instagram">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5>Follow Us Instagram</h5>
            </div>
          </div>
        </div>
        {/* Instagram Feeds */}
        <div className="insta-feeds d-flex flex-wrap">
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src={ig1} alt=""/>
            {/* Icon */}
            <div className="insta-icon">
              <a href="#"><i className="fa fa-instagram" aria-hidden="true"/></a>
            </div>
          </div>
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src={ig2} alt=""/>
            {/* Icon */}
            <div className="insta-icon">
              <a href="#"><i className="fa fa-instagram" aria-hidden="true"/></a>
            </div>
          </div>
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src={ig3} alt=""/>
            {/* Icon */}
            <div className="insta-icon">
              <a href="#"><i className="fa fa-instagram" aria-hidden="true"/></a>
            </div>
          </div>
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src={ig4} alt=""/>
            {/* Icon */}
            <div className="insta-icon">
              <a href="#"><i className="fa fa-instagram" aria-hidden="true"/></a>
            </div>
          </div>
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src={ig5} alt=""/>
            {/* Icon */}
            <div className="insta-icon">
              <a href="#"><i className="fa fa-instagram" aria-hidden="true"/></a>
            </div>
          </div>
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src={ig6} alt=""/>
            {/* Icon */}
            <div className="insta-icon">
              <a href="#"><i className="fa fa-instagram" aria-hidden="true"/></a>
            </div>
          </div>
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src={ig7} alt=""/>
            {/* Icon */}
            <div className="insta-icon">
              <a href="#"><i className="fa fa-instagram" aria-hidden="true"/></a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default Instagram
