import React from 'react';
import { Link } from 'gatsby';

function Footer() {
  return (
    <div className="uk-text-lighter links">
      <Link to="/contact" title="Contact Me">
        contact
      </Link>
      <Link to="/portfolio" title="Portfolio">
        portfolio
      </Link>
      <Link to="/about" title="About Me">
        about
      </Link>
    </div>
  );
}

export default Footer;
