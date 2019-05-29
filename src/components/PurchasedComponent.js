import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import '../css/purchased.css';
import { Redirect } from 'react-router-dom';


export const Purchased = (props) => {
    return(
        <Container className="purchased-container">
            <Row>
                <Col className="pl-0"><div className="purchased-heading">Purchase Complete</div></Col>
            </Row>
            <Row className="mt-4 purchased-display">
                <Col xs="5"><img src={props.product.optionImageUrl} className="purchased-thumbnail" /></Col>
                <Col xs="7" className="product-description">
                    <p>Thanks, {props.user.username}!</p>
                    <p>You've redeemed {props.product.optionMiles} miles for <br />{props.product.optionDescription}.</p>
                    <p><strong>Updated Balance: {props.miles} miles</strong></p>
                </Col>
            </Row>
            <Row>
                <Col><Button className="purchased-keep-shopping-btn" onClick={<Redirect to="/login" />} type="button">Keep Shopping</Button></Col>         
            </Row>
        </Container>
    )
}