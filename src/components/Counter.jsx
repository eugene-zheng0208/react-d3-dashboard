import React from 'react';
import ReactDOM from 'react-dom';


export default class Counter extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {

    }


    render() {
        return(<div className="counter">
            {this.props.count}{this.props.unit}
        </div>);
    }


}
