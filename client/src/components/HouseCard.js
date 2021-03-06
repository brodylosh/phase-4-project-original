import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function HouseCard({ house }) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={house.image_url} />
        <Card.Body>
          <Card.Title>{house.address}</Card.Title>
          <Card.Text>{house.price}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Beds: {house.beds}</ListGroupItem>
          <ListGroupItem>Baths: {house.baths}</ListGroupItem>
          <ListGroupItem>Square Feet: {house.square_feet}</ListGroupItem>
          <ListGroupItem>
            Listed By: {house.agent.first_name + ' ' + house.agent.last_name}
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button>Save Home</Button>
          <Button>Edit Listing</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default HouseCard;
