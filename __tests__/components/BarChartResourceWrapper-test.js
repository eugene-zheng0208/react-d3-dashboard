import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import BarChartResourceWrapper from '../../src/components/BarChartResourceWrapper';
describe.only('BarChartResourceWrapper suite', () => {



    it('should render BarChart', () => {

        const wrapper = render(<BarChartResourceWrapper />);
        expect(wrapper.find('.react-d3-core__container_svg').length).toEqual(1);

    });
});
