import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import BarChartPovertyWrapper from '../../src/components/BarChartPovertyWrapper';


describe('BarChartPovertyWrapper suite', () => {



    it('should render BarChart', () => {

        const wrapper = render(<BarChartPovertyWrapper />);

        expect(wrapper.find('.react-d3-core__container_svg').length).toEqual(1);

    });
});
