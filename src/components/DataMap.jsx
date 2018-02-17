import * as d3 from 'd3';
import Datamap from 'datamaps/dist/datamaps.usa.min';
import React from 'react';
import ReactDOM from 'react-dom';


export default class DataMap extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        const mapContainer = d3.select('#datamap-container');
        this.datamap = this.renderMap();

    }

    renderMap(){
        return new Datamap({
            element: ReactDOM.findDOMNode(this),
            scope: 'usa',
            data: [],
            geographyConfig: {
                borderWidth: 0.5,
                highlightFillColor: '#FFCC80',
                popupTemplate: function(geography, data) {
                    if (data && data.value) {
                        return '<div class="hoverinfo"><strong>' + geography.properties.name + ', ' + data.value + '</strong></div>';
                    } else {
                        return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong></div>';
                    }
                }
            }
        });
    }
    componentDidUpdate(prevProps, prevState) {

        this.datamap = this.renderMap();

    }


    render() {
        return(<div id="datamap-container"></div>);
    }


}
