import React from 'react';
import { FormGroup, Label, Input, Button, Container, Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap'
import '../css/login.css';
import { Redirect } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';

const LoginError = ({message}) => {
    if(message === null) {
        return <div></div>
    }

    return (
        <div className="login-failed">{message}</div>
    )
}

export const Login = (props) => {
    if(props.loginSuccessful) {
        return <Redirect to="/product/1" />
    } 

    return(
        <div>
            <Container>
                <Row>
                    <Col xs={{ size: 6, offset: 1 }}>
                        <Card className="login-card">
                            <CardBody className="login-card-body">
                                <CardTitle className="login-heading">Sign in to SuperMiles</CardTitle>
                                <CardSubtitle className="login-subHeading">Please enter your credentials to proceed.</CardSubtitle>
                                <Form model="userLogin" onSubmit={(values) => { props.authenticate(values)}} className="mt-4">
                                    <FormGroup>
                                        <Label className="login-form-text">EMAIL ADDRESS</Label>
                                        <Control.text type="email" model=".email" name="email" className="login-input-border form-control"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="login-form-text">PASSWORD</Label>
                                        <a href="#" className="login-forgot-password">Forgot password?</a>
                                        <Control.text type="password" model=".password" name="password" className="login-input-border form-control"/>
                                    </FormGroup>
                                    <LoginError message={props.loginFailed} />
                                    <Button type="submit" className="login-sign-in" color="primary" size="lg" block>Sign in</Button>
                                    <div style={{textAlign: 'center', marginTop: '10px'}}><span className="login-sign-up">Don't have an account? <a href="#">Sign up</a></span></div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
}