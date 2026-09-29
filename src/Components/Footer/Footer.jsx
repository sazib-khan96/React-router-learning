import React from "react";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-gray-200 text-base-content p-10">
      <aside>
        <h1 className="text-2xl text-yellow-600 font-bold">Logo</h1>
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      {/* Services  */}
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      {/* Company  */}
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      {/* Social Link  */}
      <nav>
        <h6 className="footer-title">Legal</h6>
       <NavLink className="font-bold hover:text-yellow-500" to="https://web.facebook.com/?_rdc=1&_rdr#" target="blank">Facebook</NavLink>
       <NavLink className="font-bold hover:text-yellow-500" to="https://web.facebook.com/?_rdc=1&_rdr#" target="blank">Linkdin</NavLink>
       <NavLink className="font-bold hover:text-yellow-500" to="https://web.facebook.com/?_rdc=1&_rdr#" target="blank">Instragram</NavLink>
      </nav>
    </footer>
  );
};

export default Footer;
