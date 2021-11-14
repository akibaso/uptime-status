import React from 'react';
import Link from './link';

const Header = () => {
  const { SiteName, SiteUrl, Navi } = window.Config;
  return (
    <div id="header">
      <div className="container">
        <img src="https://cdn.hyh.ink/tc/logo2890.svg" style={{height:'55px',position:'fixed'}}/>
         <p style={{marginLeft:'66px',color:'#66ccff',marginTop:'5px'}}/>{SiteName}</p>
        <div className="navi">
          {Navi.map((item, index) => (
            <Link key={index} text={item.text} to={item.url} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
