// src/components/Navigation.js
import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  // Which dropdown is open (for hover)
  const [openDropdown, setOpenDropdown] = useState(null);

  // Whether the navbar is visible
  const [showNavbar, setShowNavbar] = useState(true);

  // We store the last scroll position in a ref so it doesn’t cause re-renders
  const lastScrollY = useRef(window.scrollY);

  const handleMouseEnter = (dropdown) => setOpenDropdown(dropdown);
  const handleMouseLeave = () => setOpenDropdown(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        // User scrolled down => hide navbar
        setShowNavbar(false);
      } else {
        // User scrolled up => show navbar
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };

    const handleWheel = (e) => {
      if (e.deltaY < 0) {
        // Wheel up => show navbar
        setShowNavbar(true);
      } else if (e.deltaY > 0) {
        // Wheel down => hide navbar
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      variant="dark"
      style={{
        backgroundColor: "#2d2d2d",
        transition: "transform 0.2s ease-in-out",
        transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
        position: "relative",
        zIndex: 9999, // ensures navbar stays on top
      }}
    >
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">
          <img
            src="https://dza2kd7rioahk.cloudfront.net/assets/svgs/logo.svg"
            alt="Fii"
            style={{ height: "1.75rem" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav" className="justify-content-end">
          <Nav>
            {/* ABOUT US Dropdown */}
            <NavDropdown
              title="ABOUT US"
              id="nav-dropdown-aboutus"
              show={openDropdown === "aboutUs"}
              onMouseEnter={() => handleMouseEnter("aboutUs")}
              onMouseLeave={handleMouseLeave}
            >
              <NavDropdown.Item as={Link} to="/whats-fi">
                What’s Fi
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/team">
                Team
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/careers">
                Careers
              </NavDropdown.Item>

              {/* New Items: Contact, Features, Pricing */}
              <NavDropdown.Item as={Link} to="/contact">
                Contact
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/features">
                Features
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/pricing">
                Pricing
              </NavDropdown.Item>
            </NavDropdown>

            {/* CARDS Dropdown */}
            <NavDropdown
              title="CARDS"
              id="nav-dropdown-cards"
              show={openDropdown === "cards"}
              onMouseEnter={() => handleMouseEnter("cards")}
              onMouseLeave={handleMouseLeave}
            >
              <NavDropdown.Item as={Link} to="/debit-card">
                Debit Card
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/credit-card">
                Credit Card
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/super-card">
                Super Card
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/fi-secured-cc">
                Fi-Secured CC
              </NavDropdown.Item>
            </NavDropdown>

            {/* FEATURES Dropdown */}
            <NavDropdown
              title="FEATURES"
              id="nav-dropdown-features"
              show={openDropdown === "features"}
              onMouseEnter={() => handleMouseEnter("features")}
              onMouseLeave={handleMouseLeave}
            >
              <NavDropdown.Item as={Link} to="/ask-fi">
                ASK FI
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/connected-accounts">
                CONNECTED ACCOUNTS
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/accounts">
                ACCOUNTS
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mutual-funds">
                MUTUAL FUNDS
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/us-stocks">
                US STOCKS
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/us-stock-directory">
                US STOCK DIRECTORY
              </NavDropdown.Item>
            </NavDropdown>

            {/* ACCOUNTS Dropdown */}
            <NavDropdown
              title="ACCOUNTS"
              id="nav-dropdown-accounts"
              show={openDropdown === "accounts"}
              onMouseEnter={() => handleMouseEnter("accounts")}
              onMouseLeave={handleMouseLeave}
            >
              <NavDropdown.Item as={Link} to="/savings-account">
                Savings Account
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/for-companies">
                For Companies
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/for-individuals">
                For Individuals
              </NavDropdown.Item>
            </NavDropdown>

            {/* RESOURCES Dropdown */}
            <NavDropdown
              title="RESOURCES"
              id="nav-dropdown-resources"
              show={openDropdown === "resources"}
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
            >
              <NavDropdown.Item as={Link} to="/guides">
                Guides
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/calculators">
                Calculators
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blogs">
                Blogs
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/loan-calculator">
                Loan Calculator
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/best-budget-directory">
                Best Budget Directory
              </NavDropdown.Item>
            </NavDropdown>

            {/* HELP Dropdown */}
            <NavDropdown
              title="HELP"
              id="nav-dropdown-help"
              show={openDropdown === "help"}
              onMouseEnter={() => handleMouseEnter("help")}
              onMouseLeave={handleMouseLeave}
            >
              <NavDropdown.Item as={Link} to="/faqs">
                FAQs
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/general-inquiries">
                General Inquiries
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/grievance-redressal">
                Grievance Redressal
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/move-your-offices">
                Move Your Offices
              </NavDropdown.Item>
            </NavDropdown>

            {/* DOWNLOAD FI Dropdown */}
            <NavDropdown
              title="DOWNLOAD FI"
              id="nav-dropdown-download-fi"
              show={openDropdown === "downloadFi"}
              onMouseEnter={() => handleMouseEnter("downloadFi")}
              onMouseLeave={handleMouseLeave}
            >
              <NavDropdown.Item
                as="div"
                className="text-center"
                style={{
                  minWidth: "250px",
                  padding: "1rem",
                  backgroundColor: "#2d2d2d"
                }}
              >
                <img
                  src="https://dza2kd7rioahk.cloudfront.net/assets/pngs/prodQRCode.png"
                  alt="Fi QR Code"
                  style={{ width: "120px", marginBottom: "0.75rem" }}
                />
                <div
                  style={{
                    fontWeight: "500",
                    marginBottom: "0.75rem",
                    color: "#fff"
                  }}
                >
                  Scan QR to get the Fi app
                </div>
                <div className="d-flex flex-column align-items-center">
                  <div style={{ marginBottom: "0.5rem" }}>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.epifi.paisa&hl=en-US"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://dza2kd7rioahk.cloudfront.net/assets/logos/play-store_black.png"
                        alt="Google Play"
                        style={{ width: "150px" }}
                      />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://apps.apple.com/in/app/fi-money-save-invest-smart/id1531564767"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://dza2kd7rioahk.cloudfront.net/assets/logos/app-store_black.png"
                        alt="App Store"
                        style={{ width: "150px" }}
                      />
                    </a>
                  </div>
                </div>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
