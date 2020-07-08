import React from 'react';
import { shallow } from 'enzyme';
import values from './testdata';
import { nextStep, prevStep, handleChange } from './testfunctions';
import Button from '../styles/elements/button';

/* Form Components */
import UserDetails from '../components/Form/UserDetails';
import ShippingInfo from '../components/Form/ShippingInfo';
import BillingInfo from '../components/Form/BillingInfo';
import Confirm from '../components/Form/Confirm';

describe('Form Pages', () => {

    describe('User Details', () => {
        const component = shallow(
            <UserDetails 
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}/>);     
        it('matches snapshot', () => {
            expect(component).toMatchSnapshot();
        })
        it('should have one button', () => {
            const wrapper = component.find(Button);
            expect(wrapper.length).toBe(1);
        })
        it('should have four inputs', () => {
            const wrapper = component.find('input');
            expect(wrapper.length).toBe(4);
        });
    })

    describe('Shipping Info', () => {
        const component = shallow(
            <ShippingInfo 
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}/>);
        it('matches snapshot', () => {
            expect(component).toMatchSnapshot();
        })
        it('should have two buttons', () => {
            const wrapper = component.find(Button);
            expect(wrapper.length).toBe(2);
        })
        it('should have three inputs', () => {
            const wrapper = component.find('input');
            expect(wrapper.length).toBe(3);
        }); 
    })

    describe('Billing Info', () => {
        const component = shallow(
            <BillingInfo
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}/>);
        it('matches snapshot', () => {
            expect(component).toMatchSnapshot();
        })
        it('should have two buttons', () => {
            const wrapper = component.find(Button);
            expect(wrapper.length).toBe(2);
        })
        it('should have four inputs', () => {
            const wrapper = component.find('input');
            expect(wrapper.length).toBe(4);
        }); 
    })

    describe('Confirm', () => {
        const component = shallow(
            <Confirm
            nextStep={nextStep}
            prevStep={prevStep}
            values={values}/>);
        it('matches snapshot', () => {
            expect(component).toMatchSnapshot();
        })
        it('should have one button', () => {
            const wrapper = component.find(Button);
            expect(wrapper.length).toBe(1);
        })
        it('should have four inputs', () => {
            const wrapper = component.find('p');
            expect(wrapper.length).toBe(4);
        }); 
    });
});
