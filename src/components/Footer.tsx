import React from "react";
import { useContentContext } from "src/context";
import { MeSocialLinksType } from "src/types/types";

const Footer: React.FC = () => {
  const { data } = useContentContext();

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {data.socialLinks &&
              data.socialLinks.map((item: MeSocialLinksType) => {
                return (
                  <li>
                    <a href={item.url}>
                      <i className={item.className} />
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
