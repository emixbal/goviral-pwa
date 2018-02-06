import React from "react";
import * as styles from "./footer.scss";

const Footer = () => {
  "use strict";
  return (
    <footer className={styles.footer} >
      <div className="container">
        <span>
          Powered by&nbsp;<br />
          <a href="dumbways.id" target="_blank" rel="noopener">
            DumbWays.id
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
