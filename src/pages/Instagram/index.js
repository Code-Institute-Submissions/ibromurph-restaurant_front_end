import React, { Component, Fragment } from "react";
import { getInstagramPosts } from "../../actions/Instagram/InstagramAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Instagram extends Component {
  static propTypes = {
    getInstagramPosts: PropTypes.func.isRequired,
    InstagramPosts: PropTypes.any.isRequired,
  };
  state = {
  };

  componentDidMount() {
    this.props.getInstagramPosts();
  }

  render() {
    const { InstagramPosts } = this.props;
    return (
      <Fragment>
        <div className="follow-us-instagram">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center ">
                <h5 className="color-text-green">Follow Us Instagram</h5>
              </div>
            </div>
          </div>
          <div className="insta-feeds d-flex flex-wrap">
            {InstagramPosts.sort(() => Math.random() - Math.random())
              .slice(0, 7)
              .map((arr, key) => (
                <div key={key} className="single-insta-feeds">
                  <img src={arr.Post_Image} alt="" />
                  <div className="insta-icon">
                    <a href={arr.URL}>
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  InstagramPosts: state.InstagramPosts.InstagramPosts,
});

export default connect(mapStateToProps, { getInstagramPosts })(Instagram);
