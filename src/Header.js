import React from "react";
import { render } from "react-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          <img
            className="masthead-avatar mb-5"
            src="assets/img/avataaars.svg"
            alt=""
          />
          {/* Masthead Heading*/}
          <h1 className="masthead-heading text-uppercase mb-0">
            Nguyễn Bá Vũ
          </h1>
          {/* Icon Divider*/}
          <div className="divider-custom divider-light">
            <div className="divider-custom-line" />
            <div className="divider-custom-icon">
              <i className="fas fa-star" />
            </div>
            <div className="divider-custom-line" />
          </div>
          {/* Masthead Subheading*/}
          <p className="masthead-subheading font-weight-light mb-0">
            RD Member 1635
          </p>
        </div>
      </header>
    );
  }
}

export default Header;
