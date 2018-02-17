import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import {LineChart}  from 'react-d3-basic';



class LineChartWrapper extends React.Component {

    constructor(props){
        super(props);
    }
    componentDidMount() {
    }

    render() {
        const parseDate = d3.timeFormat('%YM%m').parse;

        const width = 300,
            data = [
                {
                    'age': 39,
                    'index': 0
                },
                {
                    'age': 38,
                    'index': 1
                },
                {
                    'age': 34,
                    'index': 2
                },
                {
                    'age': 12,
                    'index': 3
                }
            ],
            title = 'ciao',
            height = 300,
            margins = {left: 100, right: 100, top: 50, bottom: 50},
            chartSeries = [
                {
                    field: 'age',
                    name: 'Age',
                    color: '#ff7f0e',
                    style: {
                        'stroke-width': 2,
                        'stroke-opacity': .2,
                        'fill-opacity': .2
                    }
                }
            ],
    // your x accessor
            x = function(d) {
                return d.index;
            },
            xScale = 'time';

        return ( <div id="global-chart">

             <LineChart  width= {600} height= {300} data= {data} chartSeries= {chartSeries} x= {x} />


        </div>);
    }
}

export default LineChartWrapper;
