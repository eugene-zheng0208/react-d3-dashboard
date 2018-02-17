import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import LineChartWrapper from '../../src/components/LineaChartWrapper';


describe('LineChartWrapper suite', () => {



    it('should render LineChart', () => {

        const wrapper = render(<LineChartWrapper />);

        expect(wrapper.find('.react-d3-core__container_svg').length).toEqual(1);

    });
});
