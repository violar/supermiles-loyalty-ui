import React from 'react';
import '../css/navigation.css';
import logo from '../images/logo.jpg';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col, Media } from 'reactstrap';


const SignedIn = (props) => {
    if(props.loggedIn){
        return(
            <Media className="mt-3">
                <Media left middle>
                    <Media object src={props.avatar} />
                </Media>
                <Media className="pl-2 mt-1"><span className="user-points">{props.username}<br />{props.miles} miles</span></Media>
                <Media className="mr-3 ml-3"><div className="vertical-line"></div></Media>
                <Media className="mt-3"><span className="logout-btn">LOGOUT</span></Media>
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
                    <Col xs="8" className="mt-4 pl-0"><a href={<Redirect to="/login" />} ><img src={logo} /></a></Col>
                    <Col xs="4">
                        <SignedIn loggedIn={props.loggedIn} 
                            username={props.user.username}
                            avatar={props.user.avatarUrl} 
                            miles={props.miles} />
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    );
}