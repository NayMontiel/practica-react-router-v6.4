
import {  NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-5">
      <div className="container d-flex justify-content-end p-2">
        <NavLink to="/" className="btn btn-outline-info mx-2 fw-bold">
          Home
        </NavLink> 
        <NavLink to="/about" className="btn btn-outline-info mx-2 fw-bold">
          About
        </NavLink>
        <NavLink to="/blog" className="btn btn-outline-info mx-2 px-3 fw-bold">
          Blog
        </NavLink>
      </div>
    </nav>
  );
};
