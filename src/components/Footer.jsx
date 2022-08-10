import React from "react";

const Footer = () => {
  return (
    <div className="footer-basic">
      <footer>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/home">Home</a>
          </li>
          <li className="list-inline-item">
            <a href="/search">Search Universities</a>
          </li>
          <li className="list-inline-item">
            <a href="/saved">Saved Universities</a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.freeprivacypolicy.com/live/fdac571e-755b-42bc-9aad-4e9b3d78d16e">
              Privacy Policy
            </a>
          </li>
        </ul>
        <p className="copyright">International UniSearch © 2022</p>
      </footer>
    </div>
  );
};

export default Footer;
