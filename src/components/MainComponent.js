import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Login } from './LoginComponent';
import Purchased from './PurchasedComponent';
import ViewProduct from './ViewProductComponent';
import { Navigation } from './NavigationComponent';
import { connect } from 'react-redux';
import { authenticateUser, purchaseProduct, logout } from '../redux/actions/ActionCreators';
import '../css/navigation.css';


const mapStateToProps = (state) => {
    return {
        login: state.login,
        purchase: state.purchase
    }
}

const mapDispatchToProps = (dispatch) => ({
    authenticateUser: (credentials) => { dispatch(authenticateUser(credentials)) },
    purchaseProduct: (productMiles, userMiles) => { dispatch(purchaseProduct(productMiles, userMiles)) },
    dispatchLogout: () => { dispatch(logout()) }
})

class Main extends Component {
    render() {
        const miles = localStorage.getItem('miles');

        const LoginPage = () => {
            return(
                <Login errorMessage={this.props.login.errorMessage} 
                    authenticate={this.props.authenticateUser}
                    user={this.props.login.user} />
            );
        }

        const ViewProductPage = ({match}) => {
            return(
                <ViewProduct id={match.params.id} 
                    purchaseSuccess={this.props.purchase.purchaseSuccessfull} 
                    userMiles={miles} 
                    purchaseProduct={this.props.purchaseProduct}
                    user={this.props.login.user} />
            )
        }

        const PurchasedPage = () => {
            return(
                <Purchased product={this.props.purchase.product}
                    user={this.props.login.user} 
                    miles={miles} 
                    logout={this.props.dispatchLogout}/>
            )
        }

        return(
            <div>
                <Navigation miles={miles} user={this.props.login.user} logout={this.props.dispatchLogout} />
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