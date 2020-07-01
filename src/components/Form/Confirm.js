import React, { Component } from 'react';

export class Confirm extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    previous = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render () {
        const {values} = this.props;
        return (
            <div>
                <h2>Confirm Order</h2>
                <p><strong>Name:</strong> {values.firstName} {values.lastName}</p>
                <p><strong>Email:</strong> {values.email}</p>
                <p><strong>Phone Number:</strong> {values.phoneNumber}</p>
                <p><strong>Shipping to:</strong>
                    <br/>
                    {values.street}
                    <br />
                    {values.city}, {values.state}
                    <br />
                    {values.zip}
                </p>
                <div className="flex-two-col">
                    <button onClick={this.previous}>Prev</button>
                    <a href="/success" className="button">Confirm &amp; Continue</a>
                </div>
        </div>
        )
    }
}

export default Confirm
