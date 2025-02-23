// src/pages/PricingPage.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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

  return (
    <>
      <Navigation />
      <section id="pricing" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Pricing Plans</h2>
          <Row>
            {plans.map((plan, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="text-center h-100">
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
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default PricingPage;
