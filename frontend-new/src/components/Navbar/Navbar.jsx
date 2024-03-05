import React, { useState } from "react";
import { NavLink } from "react-bootstrap";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav d-flex sticky-top navigation py-3 px-5 navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid  align-items-center">
        <NavLink to="/" className="navbar-brand  text-secondary fs-5 me-3">
          CodingJudge
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mx-auto align-items-center">
            <li class="nav-item">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/registered-batches">
                Registered Batches
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/assessment/assessments-links">
                Assessment Links
              </a>
            </li>
          </ul>
          <div className="d-flex gap-3 py-2 px-5">
            <button
              type="button"
              className="btn btn-outline-danger fs-6 fw-normal"
            >
              Log In
            </button>
            <button type="button" className="btn btn-danger fs-6 fw-normal">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
