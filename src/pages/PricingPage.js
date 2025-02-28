// src/pages/PricingPage.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { motion } from 'framer-motion'; // Optional: create for additional custom styles
const PricingPage = () => {
  const plans = [
    {
      title: "Basic",
      price: "$0/month",
      features: ["No Hidden Fees", "Basic Budgeting", "Standard Support"],
    },
    {
      title: "Pro",
      price: "$9.99/month",
      features: ["No Hidden Fees", "Advanced Budgeting", "Priority Support", "Transaction Analytics"],
    },
    {
      title: "Enterprise",
      price: "Contact Us",
      features: ["Custom Solutions", "Full Budgeting Suite", "Dedicated Support", "API Access"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Navigation />
      <motion.section
        id="pricing"
        className="py-5"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Container>
          <motion.h2 
            className="text-center mb-4"
            variants={itemVariants}
            transition={{ duration: 0.6 }}
          >
            Pricing Plans
          </motion.h2>
          <Row>
            {plans.map((plan, index) => (
              <Col md={4} key={index} className="mb-4">
                <motion.div variants={itemVariants}>
                  <Card className="text-center h-100 pricing-card">
                    <Card.Body>
                      <Card.Title>{plan.title}</Card.Title>
                      <Card.Subtitle className="my-2">{plan.price}</Card.Subtitle>
                      <ul className="list-unstyled">
                        {plan.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                      <Button variant="primary" className="mt-3">
                        {plan.title === "Enterprise" ? "Get in Touch" : "Sign Up"}
                      </Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </motion.section>
      <Footer />
    </>
  );
};

export default PricingPage;
