import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../../src/components/Counter';


describe('<Counter />', () => {

    it('should have className counter ', () => {
        const wrapper = shallow(<Counter />);
        expect(wrapper.props().className).toEqual('counter');
    });


});
