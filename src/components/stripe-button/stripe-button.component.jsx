import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


export const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IJNslHqYL5aotLopl1yimmHPpCrFVFgt1acM2gl6NQ5egyiFqaizSPupwsco18sjSB92mClM9HHsvPbKFC5bGAI00JNb5UBTB';

    const onToken = token => {
        console.log('Pretending to process payment for ', token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Crown Clothing Company'
            billingAddress
            shippingAddress
            image='https://previews.123rf.com/images/andyadi/andyadi1910/andyadi191000098/131796960-simple-and-sophisticated-crown-vector-logo-design-template-for-jewelry-fabrication-and-clothing-bran.jpg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            />
    );
};

export default StripeCheckoutButton;