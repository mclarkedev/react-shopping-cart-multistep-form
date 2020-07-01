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
               <label htmlFor='creditNumber'>
                    Card number
                </label>
                <input
                    required
                    type="number"
                    name="creditNumber"
                    onChange={handleChange('creditNumber')}
                    defaultValue={values.creditNumber}
                />


                <div className="flex-two-col billing">
                    <div>
                        <label htmlFor='expiration'>
                            Expiration
                        </label>
                        <input
                        id="expiration"
                        placeholder='MMYY'
                        minLength="4"
                        maxLength="4"
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
                            minLength="3"
                            maxLength="3"
                            type="number"
                            name="cvc"
                            onChange={handleChange('cvc')}
                            defaultValue={values.cvc}
                        />
                    </div>
                </div>

                
                <div className="flex-two-col">
                    <button onClick={this.previous}>Back</button>
                    <button 
                        disabled={!(values.cardholder, values.creditNumber, values.expiration, values.cvc)}
                        onClick={this.continue}
                    >Next</button>
                </div>
            </section>
        )
    }
}
export default BillingInfo;