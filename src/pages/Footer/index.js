import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBrandLogo } from "../../actions/BrandLogo/BrandLogoAction";
import { getSocialMedia } from "../../actions/SocialMedia/SocialMedia";

const Footer = () => {
  const dispatch = useDispatch();
  const Logo = useSelector((state) => state.LogoArray.LogoArray[0]);
  const SocialMedia = useSelector((state) => state.SocialMedia.SocialMedia[0]);
  useEffect(() => {
    dispatch(getBrandLogo());
  }, []);
  useEffect(() => {
    dispatch(getSocialMedia());
  }, []);
  const newDate = new Date();
  let year = newDate.getFullYear();
  return (
    <footer className="footer-area">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-12 h-100 d-flex flex-wrap align-items-center justify-content-between">
            {/* Footer Social Info */}
            <div className="footer-social-info text-right">
              {SocialMedia !== undefined ? (
                <a href={SocialMedia.Facebook}>
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              ) : (
                ""
              )}

              {SocialMedia !== undefined ? (
                <a href={SocialMedia.Instagram}>
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              ) : (
                ""
              )}

              {SocialMedia !== undefined ? (
                <a href={SocialMedia.Twitter}>
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              ) : (
                ""
              )}

              {SocialMedia !== undefined ? (
                <a href={SocialMedia.Pinterest}>
                  <i className="fa fa-pinterest" aria-hidden="true" />
                </a>
              ) : (
                ""
              )}

              {SocialMedia !== undefined ? (
                <a href={SocialMedia.Dribbble}>
                  <i className="fa fa-dribbble" aria-hidden="true" />
                </a>
              ) : (
                ""
              )}

              {SocialMedia !== undefined ? (
                <a href={SocialMedia.Behance}>
                  <i className="fa fa-behance" aria-hidden="true" />
                </a>
              ) : (
                ""
              )}

              {SocialMedia !== undefined ? (
                <a href={SocialMedia.linkedin}>
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              ) : (
                ""
              )}
            </div>
            <div className="footer-logo">
              <a href="/">
                <img src={Logo !== undefined ? Logo.Logo : ""} alt="" />
              </a>
            </div>
            <p>
              Copyright ©{year} All rights reserved | A Website by{" "}
              <a
                href="https://www.linkedin.com/in/abdullahrafi1/"
                target="_blank"
              >
                AR Studio
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
