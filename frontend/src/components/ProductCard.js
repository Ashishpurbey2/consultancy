import React from 'react'
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap'

const ProductCard = () => {
  return (
    <div>
      <Card>
        <Card.Img variant='top' src='./images/carpenter.jpg' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant='primary'>Request Service</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductCard
