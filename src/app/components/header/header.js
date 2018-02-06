import React from "react";
import {connect} from "react-redux";
import classNames from "classnames";
import Link from "pawjs/src/components/link";


const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <a className="navbar-brand" href="#">UpViral</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbardrop" data-toggle="dropdown">
                  Upviral
              </a>
              <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Link 1</a>
                  <a className="dropdown-item" href="#">Link 2</a>
                  <a className="dropdown-item" href="#">Link 3</a>
              </div>
          </li>
          <li className="nav-item">
            <Link className={classNames("nav-link", {active: props.url === "/pricing"})} to="/pricing">
              Pricing <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={classNames("nav-link", {active: props.url === "/features"})} to="/features">
              Features <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={classNames("nav-link", {active: props.url === "/testimonial"})} to="/testimonial">
              Testimonial <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={classNames("nav-link", {active: props.url === "/blog"})} to="/blog">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link className={classNames("nav-link", {active: props.url === "/about-us"})} to="/about-us">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className={classNames("btn btn-success")} to="/login">
              Login
            </Link>
          </li>
          </ul>
      </div>
    </nav>
  );
};

export default connect(state => { return {url: state.router.location.pathname}; })(Header);
