import React from 'react';
import FormContents from './Form/FormContents';
import Form from '../styles/elements/formelements'
import RightRail from './RightRail';

function Checkout() {
    return (
        <div className="App">
            <div className="two-column-grid">    
                <main>
                <Form>
                    <FormContents />          
                </Form>
                </main>
                <RightRail />
            </div>
        </div>
    );
}

export default Checkout;
