import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import DataMap from '../../src/components/DataMap';

describe('<DataMap />', () => {

    it('should have proper id attribute datamap-container ', () => {
        const wrapper = shallow(<DataMap />);
        expect(wrapper.props().id).toEqual('datamap-container');
    });

    it('componentDidMount have been called', () => {
        sinon.spy(DataMap.prototype, 'componentDidMount');
        const wrapper = mount(<DataMap />);
        expect(DataMap.prototype.componentDidMount.calledOnce).toEqual(true);

    });

    it('renderMap have been called and renders the map', () => {
        sinon.spy(DataMap.prototype, 'renderMap');
        const wrapper = mount(<DataMap />);
        expect(DataMap.prototype.renderMap.calledOnce).toEqual(true);

    });




});
