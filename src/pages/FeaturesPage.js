// src/pages/FeaturesPage.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import './FeaturesPage.css'; // Optional: create for additional custom styles

const FeaturesPage = () => {
  const detailedFeatures = [
    {
      title: "No Hidden Fees",
      text: "Enjoy zero maintenance charges and free transactions. We believe in transparency—no surprise costs, ever.",
    },
    {
      title: "Smart Budgeting",
      text: "Track expenses, set budgets, and get insights with ease. Our tools help you stay in control of your finances.",
    },
    {
      title: "Secure & Fast",
      text: "End-to-end encryption keeps your data safe, while our optimized systems ensure quick transactions.",
    },
  ];

  // Variants for animation (stagger children)
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
        id="features"
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
            Our Features
          </motion.h2>
          <Row>
            {detailedFeatures.map((feature, index) => (
              <Col md={4} key={index} className="mb-4">
                <motion.div variants={itemVariants}>
                  <Card className="text-center h-100 feature-card">
                    <Card.Body>
                      <Card.Title>{feature.title}</Card.Title>
                      <Card.Text>{feature.text}</Card.Text>
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

export default FeaturesPage;
