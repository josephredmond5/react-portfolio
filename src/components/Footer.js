import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
 return (
   <div className="footer">
     <div className="socialMedia">
     <a href="https://www.linkedin.com/in/joseph-redmond-4421a527a/">
            <LinkedInIcon />
          </a>
          <a href="mailto:josephredmond5@icloud.com">
            <EmailIcon />
          </a>
          <a href="https://github.com/josephredmond5">
            <GithubIcon />
          </a>
     </div>
     <p> &copy; Joseph Redmond</p>
   </div>
 );
}

export default Footer;