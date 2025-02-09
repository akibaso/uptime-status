import React from 'react';
import Link from './link';

const Header = () => {
  const { SiteName, SiteUrl, Navi } = window.Config;
  return (
    <div id="header">
      <div className="container">
        <img src="https://cdn.hyh.ink/tc/logo2890.svg" style={{height:'45px',position:'fixed'}}/>
<a className="logo" style={{marginLeft:'55px',color:'#66ccff'}} href={SiteUrl}>{SiteName}</a>
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
