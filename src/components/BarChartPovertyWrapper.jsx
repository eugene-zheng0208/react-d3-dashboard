import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import { BarGroupChart }  from 'react-d3-basic';


class BarChartPovertyWrapper extends React.Component {

    constructor(props){
        super(props);
    }
    componentDidMount() {

    }

    render() {

        let width = 700,
            height = 400,
            chartSeries = [
                {
                    field: 'Under 5 Years',
                    name: 'Under 5 Years'
                },
                {
                    field: '5 to 13 Years',
                    name: '5 to 13 Years'
                },
                {
                    field: '14 to 17 Years',
                    name: '14 to 17 Years'
                },
                {
                    field: '18 to 24 Years',
                    name: '18 to 24 Years'
                },
                {
                    field: '25 to 44 Years',
                    name: '25 to 44 Years'
                },
                {
                    field: '45 to 64 Years',
                    name: '45 to 64 Years'
                },
                {
                    field: '65 Years and Over',
                    name: '65 Years and Over'
                },

            ],
            x = function(d) {
                return d.State;
            },
            xScale = 'ordinal',
            xLabel = 'Age',
            yLabel = 'Population',
            yLabelPosition = 'right',
            yTickFormat = d3.format('.2s');


        return (
             <div id="poverty-type-chart">

                <BarGroupChart
                    data= {[]}
                    width= {width}
                    height= {height}
                    chartSeries = {chartSeries}
                    x= {x}
                    xScale= {xScale}
                    xLabel = {xLabel}
                    yTickFormat= {yTickFormat}
                    yLabelPosition= {yLabelPosition}
                    yLabel = {yLabel}
                />



            </div>
    );
    }
}

export default BarChartPovertyWrapper;
