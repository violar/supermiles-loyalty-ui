import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import '../css/purchased.css';
import { Redirect } from 'react-router-dom';

class Purchased extends Component {
    render() {
        if(!this.props.user) {
            return <Redirect to='/login' />
        }

        return(
            <Container className="purchased-container">
                <Row>
                    <Col className="pl-0"><div className="purchased-heading">Purchase Complete</div></Col>
                </Row>
                <Row className="mt-4 purchased-display">
                    <Col xs="5"><img src={this.props.product.optionImageUrl}  alt="img-url" className="purchased-thumbnail" /></Col>
                    <Col xs="7" className="product-description">
                        <p>Thanks, {this.props.user.username}!</p>
                        <p>You've redeemed {this.props.product.optionMiles} miles for <br />{this.props.product.optionDescription}.</p>
                        <p><strong>Updated Balance: {this.props.miles} miles</strong></p>
                    </Col>
                </Row>
                <Row>
                    <Col><Button className="purchased-keep-shopping-btn" onClick={() => this.props.logout()} type="button">Log out</Button></Col>
                </Row>
            </Container>
        )
    }
}

export default Purchased;