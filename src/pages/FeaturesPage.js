import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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

  return (
    <>
      <Navigation />
      <section id="features" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Our Features</h2>
          <Row>
            {detailedFeatures.map((feature, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="text-center h-100">
                  <Card.Body>
                    <Card.Title>{feature.title}</Card.Title>
                    <Card.Text>{feature.text}</Card.Text>
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

export default FeaturesPage;