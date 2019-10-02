import React from 'react'
import { Container, Col, Row } from 'reactstrap'

export default function Tester (props) {
  console.log(props.match.params.id)
  return (
    <Container>
      <Row>
        <Col>
          <h1>{props.match.params.id ? props.match.params.id : 'Salami'}</h1>
        </Col>
      </Row>
    </Container>
  )
}
