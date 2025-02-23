// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <Container>
        {/* Top Row: Brand + Quick Links */}
        <Row>
          {/* Brand/Intro Column */}
          <Col md={3} className="mb-4">
            <h4>Fi Money</h4>
            <p className="small mb-1">Pronounced 'fī' (like "fee")</p>
            <p className="small">
              Your one-stop solution for finance management. Keep track of expenses,
              set budgets, and make secure transactions.
            </p>
          </Col>

          {/* Example Column 1 */}
          <Col md={3} className="mb-4">
            <h5 className="mb-3">Accounts</h5>
            <ul className="list-unstyled">
              <li>Savings Account</li>
              <li>Smart Deposits</li>
              <li>Checking Account</li>
              <li>Term Deposits</li>
            </ul>
          </Col>

          {/* Example Column 2 */}
          <Col md={3} className="mb-4">
            <h5 className="mb-3">Loans</h5>
            <ul className="list-unstyled">
              <li>Personal Loans</li>
              <li>Home Loans</li>
              <li>Car Loans</li>
              <li>Education Loans</li>
            </ul>
          </Col>

          {/* Example Column 3 */}
          <Col md={3} className="mb-4">
            <h5 className="mb-3">Connect With Us</h5>
            <p className="small">
              Have questions? Reach out to our 24x7 support or follow us on social media.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              {/* FontAwesome Icons (via CDN) */}
              <a href="#" className="text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary" />

        {/* Bottom Row: Disclaimer + Copyright */}
        <Row className="mt-4">
          <Col md={6}>
            <p className="small">
              Disclaimer: Fi Money is a fictional platform. Any resemblance to real
              financial institutions is purely coincidental. For demonstration
              purposes only.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="small mb-0">
              <a href="#" className="text-white text-decoration-none me-3">Terms &amp; Conditions</a>
              <a href="#" className="text-white text-decoration-none me-3">Security</a>
              <a href="#" className="text-white text-decoration-none me-3">Privacy</a>
              <a href="#" className="text-white text-decoration-none">Cookie Policy</a>
            </p>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <p className="text-center mb-0">
              &copy; 2025 FI Money. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
