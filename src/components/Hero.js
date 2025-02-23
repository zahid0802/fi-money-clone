import React from "react";
import { motion } from "framer-motion";
import { Container, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <Container className="text-center mt-5">
      <motion.h1
        initial={{ opacity: 0, y: -50 }} // Start from hidden position
        animate={{ opacity: 1, y: 0 }}   // Smoothly appear
        transition={{ duration: 1 }}     // 1 second animation
        className="display-4 fw-bold"
      >
        Welcome to FI Money Clone
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="lead"
      >
        Your one-stop solution for finance management.
      </motion.p>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </motion.div>
    </Container>
  );
};

export default Hero;
