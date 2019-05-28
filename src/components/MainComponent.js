import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Login } from './LoginComponent';
import ViewProduct from './ViewProductComponent';
import { connect } from 'react-redux';
import { authenticateUser } from '../redux/ActionCreators';


const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

const mapDispatchToProps = (dispatch) => ({
    authenticateUser: (credentials) => { dispatch(authenticateUser(credentials)) }
})

class Main extends Component {

    render() {

        const LoginPage = () => {
            return(
                <Login loginFailed={this.props.login.loginFailed} loggedIn={this.props.login.loginSuccessfull} authenticate={this.props.authenticateUser}/>
            );
        }

        const ViewProductPage = ({match}) => {
            return(
                <ViewProduct id={match.params.id} />
            )
        }

        return(
            <div>
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/product/:id" component={ViewProductPage}/>
                    <Route path="/purchased" />
                    <Redirect to="/login" />
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));