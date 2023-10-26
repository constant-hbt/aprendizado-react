import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Card from 'react-bootstrap/Card';

const CssFrameworks = () => {
  return (
    // <div className="card bg-dark text-white m-5" style={{ maxWidth: '18rem' }}>
    //   <div className="card-header">Bootstrap</div>
    //   <div className="card-body">
    //     <h5 className="card-title">R$2500</h5>
    //     <p className="card-text">Texto de exemplo Bootstrap</p>
    //   </div>
    // </div>
    <Card bg="dark" text="white" className="m-5" style={{ maxWidth: '18rem' }}>
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>Bootstrap Components</Card.Title>
        <Card.Text>Texto de exemplo Bootstrap Components</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CssFrameworks;
