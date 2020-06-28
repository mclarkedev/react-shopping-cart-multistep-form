import React, { Component } from 'react'

export class UserDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <section>
                <h2>Account Details</h2>
                <label htmlFor='firstName'>
                    First Name
                </label>
                <input
                    required
                    type="text"
                    name="firstName"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                />
                <label htmlFor='lastName'>
                    Last Name
                </label>
                <input
                    required
                    type="text"
                    name="lastName"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                />
                <label htmlFor='email'>
                    Email Address
                    </label>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                <label htmlFor='phoneNumber'>
                    Phone Number
                </label>
                <input
                    required
                    type="tel"
                    max="11"
                    placeholder="1-123-456-7890"
                    name="phoneNumber"
                    onChange={handleChange('phoneNumber')}
                    defaultValue={values.phoneNumber}
                />
                <button onClick={this.continue}>Next</button>
            </section>
        )
    }
}
export default UserDetails;