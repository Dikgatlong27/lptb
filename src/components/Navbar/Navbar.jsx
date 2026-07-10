import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../AuthContext";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setLoggingOut(true);

      await logout();

      setToggleMenu(false);

      navigate("/", {
        replace: true,
      });
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoggingOut(false);
    }
  };

  const closeMobileMenu = () => {
    setToggleMenu(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-larger">
        <Link to="/" className="nav-logo">
          <img
            src="logoflat.svg"
            className="logo"
            alt="LPTB Solutions"
          />
        </Link>

        <ul className="nav-links">
          <li>
            <Link className="links" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="links" to="/about">
              About
            </Link>
          </li>

          <li>
            <Link className="links" to="/services">
              Services
            </Link>
          </li>

          <li>
            <Link className="links" to="/dev">
              Dev
            </Link>
          </li>

          <li>
            <Link className="links" to="/contact">
              Contact
            </Link>
          </li>
        </ul>

        <div className="account">
          {currentUser ? (
            <>
              <Link className="links" to="/dashboard">
                Dashboard
              </Link>

              <button
                type="button"
                className="links navbar-logout-button"
                onClick={handleLogout}
                disabled={loggingOut}
              >
                {loggingOut ? "Logging Out..." : "Log Out"}
              </button>
            </>
          ) : (
            <>
              <Link className="links" to="/login">
                Log In
              </Link>

              <Link className="links" to="/signup">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>

      <div className="nav-links_small-screens">
        <Link to="/" className="mobile-logo">
          <img
            src="logoflat.svg"
            className="logo"
            alt="LPTB Solutions"
          />
        </Link>

        <button
          type="button"
          className="hamburger-menu"
          onClick={() => setToggleMenu(true)}
          aria-label="Open navigation"
        >
          <FiMenu />
        </button>

        {toggleMenu && (
          <div className="navlinks-small_overlay slide-bottom">
            <button
              type="button"
              className="hamburger-close"
              onClick={closeMobileMenu}
              aria-label="Close navigation"
            >
              <FiX />
            </button>

            <Link onClick={closeMobileMenu} to="/">
              <img
                src="logoflat.svg"
                className="logo-small"
                alt="LPTB Solutions"
              />
            </Link>

            <ul className="nav-links_small">
              <li>
                <Link
                  onClick={closeMobileMenu}
                  className="links"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  onClick={closeMobileMenu}
                  className="links"
                  to="/about"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  onClick={closeMobileMenu}
                  className="links"
                  to="/services"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  onClick={closeMobileMenu}
                  className="links"
                  to="/dev"
                >
                  Dev
                </Link>
              </li>

              <li>
                <Link
                  onClick={closeMobileMenu}
                  className="links"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="account-small">
              {currentUser ? (
                <>
                  <Link
                    onClick={closeMobileMenu}
                    className="links"
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>

                  <button
                    type="button"
                    className="links navbar-logout-button"
                    onClick={handleLogout}
                    disabled={loggingOut}
                  >
                    {loggingOut ? "Logging Out..." : "Log Out"}
                  </button>
                </>
              ) : (
                <>
                  <Link
                    onClick={closeMobileMenu}
                    className="links"
                    to="/login"
                  >
                    Log In
                  </Link>

                  <Link
                    onClick={closeMobileMenu}
                    className="links"
                    to="/signup"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;