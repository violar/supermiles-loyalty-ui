import React from 'react';
import '../css/navigation.css';
import logo from '../images/logo.jpg';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col, Media } from 'reactstrap';


const UserContent = (props) => {
    if(props.user) {
        return(
            <Media className="mt-3">
                <Media left middle>
                    <Media object src={props.user.avatarUrl} />
                </Media>
                <Media className="pl-2 mt-1"><span className="user-points">{props.user.username}<br />{props.miles} miles</span></Media>
                <Media className="mr-3 ml-3"><div className="vertical-line"></div></Media>
                <Media className="mt-3"><span className="logout-btn" onClick={() => props.logout()}>LOGOUT</span></Media>
            </Media>
        )
    } else {
        return (<div></div>);
    }
}

export const Navigation = (props) => {
    return(
        <div className="outer-container">
            <div className="inner-container">
            <Container>
                <Row>
                    <Col xs="8" className="mt-4 pl-0"><a href={<Redirect to="/login" />} ><img src={logo} alt="logo" /></a></Col>
                    <Col xs="4">
                        <UserContent user={props.user} miles={props.miles} logout={props.logout} />
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    );
}