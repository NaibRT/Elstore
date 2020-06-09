import React from "react";
import "./footer.styles.scss";

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
                  <a href="{}">EL STORE-DA KURYER OL</a>
                </div>

                <div className="link-store">
                  <a href="{}">EL STORE-DA MAĞAZA AÇ</a>
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
