import React, { Component } from 'react'
import UserDetails from './UserDetails'
import BillingInfo from './BillingInfo'
import ShippingInfo from './ShippingInfo'
import Confirm from './Confirm'
import Success from './Success'

export class Form extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: null,
        cardholder: '',
        longNumber: null,
        expiration: null,
        cvc: null,
        street: '',
        city: '',
        state: '',
        zip: null
    }
    // Functions
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }
    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    render() {
        const { step } = this.state;
        const { 
            firstName, 
            lastName, 
            email, 
            phoneNumber, 
            cardholder,
            longNumber,
            expiration,
            cvc,
            street,
            city,
            state,
            zip
 } = this.state;
        const values = {
            firstName, 
            lastName, 
            email, 
            phoneNumber, 
            cardholder,
            longNumber,
            expiration,
            cvc,
            street,
            city,
            state,
            zip
        }
        switch(step) {
            case 1: 
                return (
                    <UserDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <BillingInfo 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <ShippingInfo 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4:
                return (
                    <Confirm 
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        values={values}
                    />
                )
            case 5:
                return (
                    <Success />
                )
            default: 
                break
        }
    }
}

export default Form;