import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Login } from './LoginComponent';
import { Purchased } from './PurchasedComponent';
import ViewProduct from './ViewProductComponent';
import { Navigation } from './NavigationComponent';
import { connect } from 'react-redux';
import { authenticateUser, purchaseProduct } from '../redux/ActionCreators';
import '../css/navigation.css';


const mapStateToProps = (state) => {
    let miles = localStorage.getItem('miles');
    return {
        login: state.login,
        purchase: state.purchase,
        miles
    }
}

const mapDispatchToProps = (dispatch) => ({
    authenticateUser: (credentials) => { dispatch(authenticateUser(credentials)) },
    purchaseProduct: (productMiles, userMiles) => { dispatch(purchaseProduct(productMiles, userMiles)) }
})

class Main extends Component {

    render() {

        const LoginPage = () => {
            return(
                <Login loginFailed={this.props.login.loginFailed} 
                    loginSuccessfull={this.props.login.loginSuccessfull} 
                    authenticate={this.props.authenticateUser}/>
            );
        }

        const ViewProductPage = ({match}) => {
            return(
                <ViewProduct id={match.params.id} 
                    purchaseSuccess={this.props.purchase.purchaseSuccessfull} 
                    userMiles={this.props.miles} 
                    purchaseProduct={this.props.purchaseProduct} />
            )
        }

        const PurchasedPage = () => {
            return(
                <Purchased product={this.props.purchase.product}
                    user={this.props.login.user} 
                    miles={this.props.miles}/>
            )
        }

        return(
            <div>
                <Navigation miles={this.props.miles} user={this.props.login.user} loggedIn={this.props.login.loginSuccessfull} />
                <div className="inner-container">
                    <Switch>
                        <Route path="/login" component={LoginPage} />
                        <Route path="/product/:id" component={ViewProductPage}/>
                        <Route path="/purchased" component={PurchasedPage}/>
                        <Redirect to="/login" />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));