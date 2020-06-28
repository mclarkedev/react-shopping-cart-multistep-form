import React, { Component } from 'react'

export class BillingInfo extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    previous = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <section>
                <h2>Payment Details</h2>
                <label htmlFor='cardholder'>
                    Name on card
                </label>
                <input
                    required
                    type="text"
                    name="cardholder"
                    onChange={handleChange('cardholder')}
                    defaultValue={values.cardholder}
                />
               <label htmlFor='cardNumber'>
                    Card number
                </label>
                <input
                    required
                    type="number"
                    name="cardNumber"
                    onChange={handleChange('longNumber')}
                    defaultValue={values.longNumber}
                />


                <div className="flex-two-col billing">
                    <div>
                        <label htmlFor='expiration'>
                            Expiration
                        </label>
                        <input
                        id="expiration"
                        placeholder='MM/YY'
                        type="number"
                        required
                        name="expiration"
                        onChange={handleChange('expiration')}
                        defaultValue={values.expiration}
                        />
                    </div>
                    <div>
                        <label htmlFor='cvc'>
                            CVC
                        </label>
                        <input
                            id="cvc"
                            required
                            type="number"
                            name="cvc"
                            onChange={handleChange('cvc')}
                            defaultValue={values.cvc}
                        />
                    </div>
                </div>

                
                <div className="flex-two-col">
                    <button onClick={this.previous}>Prev</button>
                    <button onClick={this.continue}>Next</button>
                </div>
            </section>
        )
    }
}
export default BillingInfo;