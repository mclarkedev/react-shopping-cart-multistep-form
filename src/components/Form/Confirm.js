import React, { Component } from 'react';
import theme from '../../styles/settings';
import Button from '../../styles/elements/button';
import TwoCol from '../../styles/elements/twocol';
import styled from 'styled-components';

const LinkButton = styled.a`
    font-size: 1em;
    margin: 1rem 0;
    padding: 1rem 2rem;
    background-color: ${theme.primary};
    border: none;
    border-radius: 5px;
    color: ${theme.white};
    cursor: pointer;
    display: block;
`

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
            <section>
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
                <TwoCol>
                    <Button onClick={this.previous}>Prev</Button>
                    <LinkButton href="/success" className="button">Confirm &amp; Continue</LinkButton>
                </TwoCol>
        </section>
        )
    }
}

export default Confirm
