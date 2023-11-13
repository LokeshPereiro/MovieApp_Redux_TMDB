import { ContentWrap } from "../hoc/ContentWrap";
import "./footerStyles.scss";

import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrap>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          My name is Lokesh Pereiro Martínez-Falero and I am a junior fullstack
          developer, currently based in Ferrol, Spain. My goal is to build a
          career around the infinite possibilities that web technologies offer
          us to improve people's lives. I love learning and I'm a self-taught
          programmer with a huge growth mindset. Let's write the next lines of
          codes togather!🤝
        </div>
        <div className="socialIcons">
          <a
            href="https://github.com/LokeshPereiro"
            target="blank"
            className="icon github"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/lokesh-pereiro-mart%C3%ADnez-falero-334818135/"
            target="blank"
            className="icon linkedin"
          >
            <FaLinkedin />
          </a>
        </div>
        <span className="copyright">
          &reg; All rights reserved 2023 - Made with 💖
        </span>
      </ContentWrap>
    </footer>
  );
};
