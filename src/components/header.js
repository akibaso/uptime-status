import React from 'react';
import Link from './link';

const Header = () => {
  const { SiteName, SiteUrl, Navi } = window.Config;
  return (
    <div id="header">
      <div className="container">
        <a className="logo" href={SiteUrl}><img src="https://cdn.hyh.ink/tc/logo2890.svg" style={{height:'55px',position:'fixed'}}><p style={{margin-left:'66px',color:'#66ccff',margin-top:'5px'}}>{SiteName}</p></a>
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
