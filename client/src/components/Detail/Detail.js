import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Row, Col
} from 'reactstrap';
import "./detailStyle.css";

const Detail = (props) => {
  return (
    <div className="billy">
      <Row>
        <Col sm="4" className="transparent"></Col>
        <Col sm="4">
          <Card className="center">
            <CardBody>
              <CardTitle><h4>Event: {props.event.name}</h4></CardTitle>

            </CardBody>
            <CardImg width="30%" src={props.event.images[1].url} alt={props.event.name} />
            <CardBody className="cardBg">
              <CardText>Date: {props.event.dates.start.localDate}</CardText>
              <CardText>Time: {props.event.dates.start.localTime}</CardText>
              <CardText>Venue: {props.event._embedded.venues[0].name}</CardText>
              <CardText>Location: {props.event._embedded.venues[0].city.name + ", " + props.event._embedded.venues[0].state.name}</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4" className="transparent"></Col>
      </Row>
    </div>
  );
};

export default Detail;
