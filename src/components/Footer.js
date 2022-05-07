import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo-white.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Tome"
            style={{ width: "14em", height: "10em" }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">

              </div>
              <div className="column is-4">
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
