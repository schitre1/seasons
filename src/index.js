import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import Clock from './Clock';

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

    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat){
            return (
                <div>
                    <SeasonDisplay lat={this.state.lat}/>
                    <Clock/> 
                </div>
                
            ) //passing state as props
        }

        return <Spinner message="Please accept location request"/>;
    }

    render(){
        return (
        <div className="border red">
            {this.renderContent()}
        </div>
        );
    }
}
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);