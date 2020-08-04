import React from "react";
import "./footer.styles.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
              <div className="title">
                <h1>Bütün əməkçiləri dəstəkləyirik.</h1>
              </div>
              <div className="description">
                <p>
                  El Store bütün yaradıcı şəxsləri dəstəkləyərək onlara öz
                  bizneslərini genişləndirmək üçün fürsət yaradır. El Store
                  bütün yaradıcı şəxsləri dəstəkləyərək onlara öz bizneslərini
                  genişləndirmək üçün fürsət yaradır.El Store bütün yaradıcı
                  şəxsləri dəstəkləyərək onlara öz bizneslərini genişləndirmək
                  üçün fürsət yaradır.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="links">
                <div className="link-curior">
                <Link to='/worked-delivery'>EL STORE-DA KURYER OL</Link>
                </div>
                <div className="link-store">
                <Link to='/open-store'>EL STORE-DA MAĞAZA AÇ</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-rectangle"></div>
      </footer>
    </div>
  );
};

export default Footer;
