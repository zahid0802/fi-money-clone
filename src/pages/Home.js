import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// Define a variant for fading in and sliding up
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const Home = () => {
  return (
    <div style={{ backgroundColor: "#2d2d2d", minHeight: "100vh" }}>
      {/* Dark Navbar */}
      <Navigation />

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <Container className="text-white py-5">
          <Row className="align-items-center py-5">
            {/* Left Column: Text */}
            <Col md={6} className="mb-5 mb-md-0">
              <h1 className="display-4 fw-bold">For all things money</h1>
              <p className="lead mt-4">
                Whether it's planning your savings with a new-age savings account,
                investing in mutual funds and high-interest products, or tracking
                your expenses — do it all on Fi.
              </p>

              {/* Store Badges */}
              <div className="mt-4 d-flex align-items-center">
                {/* Google Play Badge */}
                <a href="#!">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    style={{ width: "150px", marginRight: "10px" }}
                  />
                </a>

                {/* App Store Badge */}
                <a href="#!">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Download on the App Store"
                    style={{
                      width: "130px",
                      background: "#fff",
                      borderRadius: "8px",
                      padding: "4px",
                    }}
                  />
                </a>
              </div>
            </Col>

            {/* Right Column: Video */}
            <Col md={6} className="text-center">
              <video
                className="img-fluid"
                style={{ maxHeight: "500px", borderRadius: "12px" }}
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="https://dza2kd7rioahk.cloudfront.net/assets/videos/home-page_poster.webm"
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>
            </Col>
          </Row>
        </Container>
      </motion.div>

      {/* Savings Account Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <section className="py-5" style={{ backgroundColor: "#fff", color: "#000" }}>
          <Container className="text-center">
            <h2 className="mb-4">Get a savings account unlike any other</h2>
            {/* Debit Card Image */}
            <img
              src="https://dza2kd7rioahk.cloudfront.net/assets/svgs/debit-card-home.svg"
              alt="Debit Card"
              className="img-fluid mb-4"
              style={{ maxWidth: "400px" }}
            />

            {/* Bullet Points */}
            <ul className="list-unstyled d-inline-block text-start">
              <li className="mb-2">No minimum balance on select plans ✌️</li>
              <li className="mb-2">Zero Forex on Select Plans✨</li>
              <li className="mb-2">Withdraw from any ATM 🕺</li>
              <li className="mb-2">No hidden fees</li>
              <li className="mb-2">Money insured up to ₹5 lakh ✅</li>
            </ul>
          </Container>
        </section>
      </motion.div>

      {/* Rewards Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <section className="py-5" style={{ backgroundColor: "#f9f9f9", color: "#000" }}>
          <Container className="text-center">
            <h2 className="mb-3">You earn rewards for saving, imagine!</h2>
            <p className="lead mx-auto" style={{ maxWidth: "600px" }}>
              It’s about time, right? Rewards are a way of recognizing good financial habits.
              With goodies not just when you shop, but even when you save.
            </p>
            
            {/* Rewards Video */}
            <video
              className="img-fluid mt-4"
              style={{ maxHeight: "500px", borderRadius: "12px" }}
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://dza2kd7rioahk.cloudfront.net/assets/videos/home-page_rewards-section.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Container>
        </section>
      </motion.div>

      {/* "Open a Savings Account in minutes" Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <section className="py-5" style={{ backgroundColor: "#f8f8f8" }}>
          <Container>
            <Row className="gx-0 shadow" style={{ borderRadius: "10px", overflow: "hidden" }}>
              {/* Left Column */}
              <Col
                md={6}
                style={{
                  backgroundColor: "#2d2d2d",
                  color: "#f6e6c9",
                  padding: "2rem",
                }}
              >
                <h2 style={{ fontWeight: "bold", marginBottom: "1rem" }}>
                  Open a Savings Account in minutes
                </h2>
                <img
                  src="https://dza2kd7rioahk.cloudfront.net/assets/webp/chill-poster.webp"
                  alt="Chill Poster"
                  style={{ width: "100%", borderRadius: "8px", marginTop: "1rem" }}
                />
              </Col>

              {/* Right Column */}
              <Col md={6} style={{ backgroundColor: "#f6e6c9", padding: "2rem" }}>
                <h4 style={{ fontWeight: "bold" }}>Working Professionals ✅</h4>
                <p>
                  Get access to India’s smartest saving account in 3 minutes!
                  Download the Fi App, complete a quick in-app employment check,
                  and open a Savings Account.
                </p>
                <a
                  href="#!"
                  style={{ textDecoration: "none", fontWeight: "bold", color: "#000" }}
                >
                  DOWNLOAD FI ↗
                </a>
                <h4 className="mt-4" style={{ fontWeight: "bold" }}>
                  Students & Others ⏳
                </h4>
                <p>
                  We’re taking things a step further—building cool features to suit
                  students’ needs. It may take some time to meet your expectations,
                  but we’ll get there!
                </p>
                <a
                  href="#!"
                  style={{ textDecoration: "none", fontWeight: "bold", color: "#000" }}
                >
                  Learn More
                </a>
              </Col>
            </Row>
          </Container>
        </section>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Home;
