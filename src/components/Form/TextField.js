import React, {Component} from 'react'

export class TextField extends Component {
    render() {
        const { name, label, values, handleChange} = this.props;
        return (
            <React.Fragment>
            <label htmlFor={name}>
                {label}
            </label>
            <input
                name={name}
                defaultValue={values.firstName}
                onChange={handleChange('firstName')}
            />  
            </React.Fragment>
        )
    }
}

export default TextField


