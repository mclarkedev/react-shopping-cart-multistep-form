import React from 'react';
import SuccessContainer from '../styles/elements/success';

const Success = () => {
    return (
        <SuccessContainer>
            <h1>Order Submitted!</h1> 
            <p>You will receive an email receipt within the next 15 minutes.</p>    
        </SuccessContainer>
    )
}

export default Success;