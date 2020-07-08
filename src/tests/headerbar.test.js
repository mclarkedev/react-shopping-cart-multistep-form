import React from 'react';
import { shallow } from 'enzyme';
import HeaderBar from '../components/HeaderBar';

describe('Header Component', () => {
    it('should render without errors', () => {
        const wrapper = shallow(<HeaderBar />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render children', () => {
        const component = shallow(<HeaderBar />);
        const wrapper = component.find('nav');
        expect(wrapper.length).toBe(1);
    });
})