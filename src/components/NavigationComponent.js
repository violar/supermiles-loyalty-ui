import React from 'react';
import '../css/navigation.css';
import logo from '../images/logo.jpg';
import userIcon from '../images/user_icon.jpg';
import { Container, Row, Col, Media } from 'reactstrap';


export const Navigation = () => {
    return(
        <div className="outer-container">
            <div className="inner-container">
            <Container>
                <Row>
                    <Col xs="8" className="mt-4 pl-0"><img src={logo} /></Col>
                    <Col xs="4">
                        <Media className="mt-3">
                            <Media left middle>
                                <Media object src={userIcon} />
                            </Media>
                            <Media className="pl-2 mt-1"><span className="user-points">Katie<br />38,441 miles</span></Media>
                            <Media className="mr-3 ml-3"><div className="vertical-line"></div></Media>
                            <Media className="mt-3"><span className="logout-btn">LOGOUT</span></Media>
                        </Media>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    );
}