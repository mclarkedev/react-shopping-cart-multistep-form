import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Success from '../components/Success';

describe('Success Page', () => {
    it('should be reachable by url', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/success ']}>
                <Success />
            </MemoryRouter>
        );
        expect(wrapper.find(Success)).toHaveLength(1);
    })

    it('should render without errors', () => {
        const wrapper = shallow(<Success />);
        expect(wrapper).toMatchSnapshot();
    });
});