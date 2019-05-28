import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import headphonesBlack from '../images/Headphones - black.png';
import headphonesGold from '../images/Headphones - gold.png';
import headphonesWhite from '../images/Headphones - white.png';
import '../css/products.css';
import { Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { products } from '../mockData';


class ViewProduct extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            product: products[0],
            selectedOption: products[0].productOptions[0],
            purchaseModal: false
        };

        this.selectOption = this.selectOption.bind(this);
        this.togglePurchaseModal = this.togglePurchaseModal.bind(this);
    }

    selectOption(option) {
        this.setState({ selectedOption: option });
    }

    togglePurchaseModal() {
        this.setState((prevState) => ({
            purchaseModal: !prevState.purchaseModal
        }));
    }


    render() {
        const buttons = 
            this.state.product.productOptions.map((option) => 
                    <Button className={`product-option ${this.state.selectedOption.optionId === option.optionId ? 'options-largest-width' :''}`} onClick={() => this.selectOption(option)} active={this.state.selectedOption.optionId === option.optionId}>{option.optionName}</Button>);

        return(
        <Container className="product-container">
            <Row>
                <Col><div className="product-heading">{this.state.product.productName}</div></Col>
            </Row>
            <Row className="mt-4">
                <Col xs="7"><div className="product-thumbnail-outer"><img src={headphonesWhite} className="product-thumbnail" /></div></Col>
                <Col xs="5">
                    <ButtonGroup className="btn-group-vertical options-largest-width">
                        {buttons}
                    </ButtonGroup>
                    <Button type="button" onClick={this.togglePurchaseModal} className="purchase-option-btn" color="primary" size="lg" block>Purchase</Button>
                    <Modal size={{width: '563px'}} contentClassName="purchase-modal-content" className="modal-dialog-centered" backdropClassName="purchase-modal" isOpen={this.state.purchaseModal} toggle={this.togglePurchaseModal} >
                        <ModalHeader style={{color: '#2e384d', fontSize: "15px", fontFamily: "Verdana, Tahoma, sans-serif", textAlign: "center"}} className="purchase-modal-inner-content-header" toggle={this.toggle}>Item has been added to your cart!</ModalHeader>
                        <ModalBody className="purchase-modal-inner-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </ModalBody>
                        <ModalFooter className="purchase-modal-inner-content">
                            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                            <Button color="secondary" onClick={this.togglePurchaseModal}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </Col>
            </Row>
        </Container>
        )
    }
}

export default ViewProduct;