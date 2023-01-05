import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid text-">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.blueMode}
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable blue mode
            </label>
          </div>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.redMode}
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable red mode
            </label>
          </div>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.greenMode}
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Green mode
            </label>
          </div>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toggleMode}
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Darkmode
            </label>
          </div>
        </div>
      </div>
    </nav>

    /*<nav classNameNameName="navbar navbar-expand-lg navbar-dark bg-dark">
      <div classNameNameName="container-fluid">
        <a classNameNameName="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          classNameNameName="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span classNameNameName="navbar-toggler-icon"></span>
        </button>
        <div
          classNameNameName="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul classNameNameName="navbar-nav me-auto mb-2 mb-lg-0">
            <li classNameNameName="nav-item">
              <a classNameNameName="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li classNameNameName="nav-item">
              <a classNameNameName="nav-link" href="/">
                {props.aboutText}
              </a>
            </li>
             </ul>*
          {/*<form classNameNameName="d-flex">
            <input
              classNameNameName="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button classNameNameName="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>*/
    /*<div classNameName="form-check form-switch text-light">
            <input
              classNameName="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label classNameName="form-check-label" for="flexSwitchCheckDefault">
              Enable Dark mode
            </label>
          </div>
        </div>
      </div>
        </nav>*/
  );
}
