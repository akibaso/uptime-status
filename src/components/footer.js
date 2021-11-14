import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>&copy; 2021 <Link to="https://2890.ltd/" text="OkYes Blog" /></p>
      </div>
    </div>
  );
}

export default Footer;
