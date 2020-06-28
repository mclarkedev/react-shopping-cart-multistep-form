import React, { Component } from 'react'

export class ShippingInfo extends Component {
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
                <h2>Shipping Details</h2>
                <label htmlFor='street'>
                    Street Address
                </label>
                <input
                    required
                    type="text"
                    name="street"
                    onChange={handleChange('street')}
                    defaultValue={values.street}
                />
               <label htmlFor='city'>
                    City
                </label>
                <input
                    required
                    type="text"
                    name="city"
                    onChange={handleChange('city')}
                    defaultValue={values.city}
                />
                <div className="flex-two-col shipping">
                    <div>
                        <label htmlFor='state'>
                            State
                        </label>
                        <select 
                            required
                            name="state"
                            onChange={handleChange('state')}
                            defaultValue={values.state}
                        >
                            <option value="AL">AL</option>
                            <option value="AK">AK</option>
                            <option value="AZ">AZ</option>
                            <option value="AR">AR</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                            <option value="DE">DE</option>
                            <option value="DC">DC</option>
                            <option value="FL">FL</option>
                            <option value="GA">GA</option>
                            <option value="HI">HI</option>
                            <option value="ID">ID</option>
                            <option value="IL">IL</option>
                            <option value="IN">IN</option>
                            <option value="IA">IA</option>
                            <option value="KS">KS</option>
                            <option value="KY">KY</option>
                            <option value="LA">LA</option>
                            <option value="ME">ME</option>
                            <option value="MD">MD</option>
                            <option value="MA">MA</option>
                            <option value="MI">MI</option>
                            <option value="MN">MN</option>
                            <option value="MS">MS</option>
                            <option value="MO">MO</option>
                            <option value="MT">MT</option>
                            <option value="NE">NE</option>
                            <option value="NV">NV</option>
                            <option value="NH">NH</option>
                            <option value="NJ">NJ</option>
                            <option value="NM">NM</option>
                            <option value="NY">NY</option>
                            <option value="NC">NC</option>
                            <option value="ND">ND</option>
                            <option value="OH">OH</option>
                            <option value="OK">OK</option>
                            <option value="OR">OR</option>
                            <option value="PA">PA</option>
                            <option value="RI">RI</option>
                            <option value="SC">SC</option>
                            <option value="SD">SD</option>
                            <option value="TN">TN</option>
                            <option value="TX">TX</option>
                            <option value="UT">UT</option>
                            <option value="VT">VT</option>
                            <option value="VA">VA</option>
                            <option value="WA">WA</option>
                            <option value="WV">WV</option>
                            <option value="WI">WI</option>
                            <option value="WY">WY</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='zip'>
                            Zip
                        </label>
                        <input
                            required
                            type="number"
                            name="zip"
                            onChange={handleChange('zip')}
                            defaultValue={values.zip}
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
export default ShippingInfo;