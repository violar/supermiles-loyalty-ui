import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../css/products.css';
import { Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { products } from '../mockData';
import { Redirect } from 'react-router-dom';


class ViewProduct extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            product: products[0],
            selectedOption: products[0].productOptions[0],
            purchaseModal: false,
            temporaryMiles: this.props.userMiles
        };

        this.selectOption = this.selectOption.bind(this);
        this.togglePurchaseModal = this.togglePurchaseModal.bind(this);
        this.purchaseProduct = this.purchaseProduct.bind(this);
        this.temporaryMiles = this.temporaryMiles.bind(this);
    }

    selectOption(option) {

        this.setState({ selectedOption: option });
    }

    purchaseProduct() {
        this.props.purchaseProduct(this.state.selectedOption, this.props.userMiles);
    }

    togglePurchaseModal() {
        this.setState((prevState) => ({
            purchaseModal: !prevState.purchaseModal
        }));
    }

    temporaryMiles() {
        this.setState((prevState) => ({ 
            temporaryMiles: prevState.temporaryMiles - this.state.selectedOption.optionMiles
        }));
    }

    render() {
        if(this.props.purchaseSuccess) {
            return <Redirect to="/purchased" />
        }

        const buttons = 
            this.state.product.productOptions.map((option) => 
                    <Button className={`product-option ${this.state.selectedOption.optionId === option.optionId ? 'options-largest-width' :''}`} onClick={() => this.selectOption(option)} active={this.state.selectedOption.optionId === option.optionId}>{option.optionName}</Button>);

        return(
        <Container className="product-container">
            <Row>
                <Col><div className="product-heading">{this.state.product.productName}</div></Col>
            </Row>
            <Row className="mt-4">
                <Col xs="7"><div className="product-thumbnail-outer"><img src={this.state.selectedOption.optionImageUrl} className="product-thumbnail" /></div></Col>
                <Col xs="5">
                    <ButtonGroup className="btn-group-vertical options-largest-width">
                        {buttons}
                    </ButtonGroup>
                    <Button type="button" onClick={() => {this.togglePurchaseModal(); this.temporaryMiles()}} className="purchase-option-btn" color="primary" size="lg" block>Purchase</Button>
                    <Modal contentClassName="purchase-modal-content" backdropClassName="purchase-modal" isOpen={this.state.purchaseModal} toggle={this.togglePurchaseModal} >
                        <ModalHeader className="modal-title">Item has been added to your cart!</ModalHeader>
                        <ModalBody className="purchase-modal-body">
                            You have <strong>{this.state.temporaryMiles} miles</strong> left in your account.
                        </ModalBody>
                        <ModalFooter className="purchase-modal-footer">
                            <Button className="modal-footer-btn keep-shopping-btn" color="secondary" onClick={this.togglePurchaseModal}>Keep Shopping</Button>
                            <Button className="modal-footer-btn purchase-now-btn" color="primary" onClick={this.purchaseProduct}>Purchase Now</Button>
                        </ModalFooter>
                    </Modal>
                </Col>
            </Row>
        </Container>
        )
    }
}

export default ViewProduct;