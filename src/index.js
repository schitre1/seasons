import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
    state = { lat: null, //we don't know latitude yet 
        errorMessage: ''}; 

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}), //callback for success
            err => this.setState({errorMessage: err.message})//callback for failure
        );
    }

    componentDidUpdate(){
        console.log('My component was just updated - it rerendered');
    }

    render(){

        if(this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>; //passing state as props
        }

        return <div>Loading...</div>
    }
}
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);