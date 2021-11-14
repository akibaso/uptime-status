import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
            <a href="https://2890.ltd/"><img src="https://cdn.hyh.ink/imger/2021/11/14/20211107bigicon6deca5a01c365e38.png" style={{height: '122px'}}/></a>
         <br><p>Then stirs the feeling infinite, so felt.<br>In solitude, where we are least alone.</p>
        <p>&copy; 2021 <Link to="https://2890.ltd/" text="OkYes Blog" /></p>
      </div>
    </div>
  );
}

export default Footer;
