import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './checkout.styles.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors';

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }

        <div className='total'>TOTAL: ${total}</div>
        <StripeCheckoutButton price={total} />
        <div className='test-warning'>
            *This is a test system only.  Use the following for testing payments:
            <br />
            Card Number: 4242 4242 4242 4242
            <br />
            CVC: Any Three-Digit Number
            <br />
            Expiration Date: Any future date
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);