import React from 'react';
import SuccessContainer from '../styles/elements/success';

import Fade from 'react-reveal/Fade';

const Success = () => {
    return (
        <Fade>
            <SuccessContainer>
                <h1>Order Submitted!</h1> 
                <p>You will receive an email receipt within the next 15 minutes.</p>    
            </SuccessContainer>
        </Fade>
    )
}

export default Success;