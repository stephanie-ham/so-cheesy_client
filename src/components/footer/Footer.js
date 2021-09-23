import React from "react"
import { Breadcrumbs } from "@material-ui/core";
import { Link } from "react-router-dom"
import "./Footer.css"
import Pinterest from "../../images/pinterest-logo.png"
import FooterLogo from "../../images/block-logo_100px.png"

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__top">
        <div className="footer__logo">
        <Link className="footer__item link" color="inherit" to="/">
          <img className="footer_logo" src={FooterLogo} alt="" />
        </Link>
        </div>
        <div className="footer__links">
          <Breadcrumbs aria-label="breadcrumb">
            <Link className="footer__item link" color="inherit" to="/create">
              <strong>create</strong>
            </Link>
            <Link className="footer__item link" color="inherit" to="/ingredients/cheeses">
              cheeses
            </Link>
            <Link className="footer__item link" color="inherit" to="/ingredients/meats">
              meats
            </Link>
            <Link className="footer__item link" color="inherit" to="/ingredients/nuts">
              nuts
            </Link>
            <Link className="footer__item link" color="inherit" to="/ingredients/fruits">
              fruits
            </Link>
            <Link className="footer__item link" color="inherit" to="/ingredients/jams+spreads">
              jams + spreads
            </Link>
          </Breadcrumbs>
        </div>
      </section>
      <section className="footer__bottom">
        <div className="footer__bottom--container">
          <div className="fb__pinterest">Follow us on <a className="pinterest__link" href="https://www.pinterest.com/blockcharcuterie"><img className="fb__pinterest--logo" src={Pinterest} alt="" /> <b>Pinterest</b></a> for inspiration!</div>
          <p className="fb__copyright">	&#169; 2021 Block. Charcuterie Maker</p>
        </div>
      </section>
    </footer>
  )
}