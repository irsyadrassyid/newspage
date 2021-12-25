import React from 'react';
import { Card, Col } from 'react-bootstrap';

const CompCard = ({ data }) => {
  return (
    <div>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={data.urlToImage} />
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>{data.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>


    </div>
  )
}

export default CompCard;
