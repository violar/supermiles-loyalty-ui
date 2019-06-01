import React from 'react';
import { FormGroup, Label, Button, Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import '../css/login.css';
import { Redirect } from 'react-router-dom';
import { Control, Form } from 'react-redux-form';

const LoginError = (props) => {
    if(props.errorMessage === null) {
        return (<div></div>)
    }
    return (<div className="login-failed">{props.errorMessage}</div>)
}

export const Login = (props) => {
    if(props.user) {
        return <Redirect to="/product/1" />
    } 

    return(
        <Container>
            <Row>
                <Col xs={{ size: 6, offset: 1 }}>
                    <Card className="login-card">
                        <CardBody className="login-card-body">
                            <CardTitle className="login-heading">Sign in to SuperMiles</CardTitle>
                            <CardSubtitle className="login-subHeading">Please enter your credentials to proceed.</CardSubtitle>
                            <Form model="userLogin" onSubmit={(values) => props.authenticate(values)} className="mt-4">
                                <FormGroup>
                                    <Label className="login-form-text">EMAIL ADDRESS</Label>
                                    <Control.text type="email" model=".email" name="email" className="login-input-border form-control"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label className="login-form-text">PASSWORD</Label>
                                    <a href="/login" className="login-forgot-password">Forgot password?</a>
                                    <Control.text type="password" model=".password" name="password" className="login-input-border form-control"/>
                                </FormGroup>
                                <LoginError errorMessage={props.errorMessage} />
                                <Button type="submit" className="login-sign-in" color="primary" size="lg" block>Sign in</Button>
                                <div style={{textAlign: 'center', marginTop: '10px'}}><span className="login-sign-up">Don't have an account? <a href="/login">Sign up</a></span></div>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}