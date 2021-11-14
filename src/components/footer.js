import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
            <a href="https://2890.ltd/"><img src="https://cdn.hyh.ink/imger/2021/11/14/20211107bigicon6deca5a01c365e38.png" style={{height: '122px'}}/></a>
         <p><br/>Then stirs the feeling infinite, so felt.<br/>In solitude, where we are least alone.</p>
        <p>&copy; 2021 <Link to="https://2890.ltd/" text="OkYes Blog" /></p>
<p><br/>Our Sponsors</p>
<div><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3031963600874401"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-3031963600874401"
     data-ad-slot="8602360897"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script></div>
      </div>
    </div>
  );
}

export default Footer;
