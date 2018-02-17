import './base.scss';
import React, { Component } from 'react';
import DataMap from '../components/DataMap';
import Counter from '../components/Counter';
import LineChartWrapper from '../components/LineaChartWrapper';
import BarChartPovertyWrapper from '../components/BarChartPovertyWrapper';
import BarChartResourceWrapper from '../components/BarChartResourceWrapper';

let socket = io.connect();

export default class App extends React.Component{
    componentDidMount() {
        socket.on('update', function(data) {
        });
    }

    render() {
        return (
      <div className="pure-g app-container">
        <div className="pure-u-1-2 component-container">
         <div className="header">Number of Donators </div>
          <div id="global-line-chart">
          <LineChartWrapper title='ciao' />
          </div>
          <div className="pure-g">
          <div className="pure-u-1-2 component-container">
          <div className="header"> Resources Type</div>
          <BarChartResourceWrapper count="200" />
          </div>

           <div className="pure-u-1-2 component-container">
           <div className="header"> Poverty Level </div>
           <BarChartPovertyWrapper count="200" />
           </div>
          </div>

        </div>

        <div className="pure-u-1-2 component-container">
        <div className="header"> Distribution of Donators </div>
        <DataMap />
        <div className="pure-g">
        <div className="pure-u-1-2 component-container">
        <div className="header">Total Number of Donations </div>
        <Counter count="200" />
        </div>
        <div className="pure-u-1-2 component-container">
        <div className="header">Total Donation in USD </div>
        <Counter count="1000" unit= "D" />
        </div>
        </div>
</div>
</div>

    );
    }
}
