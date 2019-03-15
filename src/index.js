import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){ //particular to JS language
        //good location to initliaze state as this is called 
        //when any instance of compoennt is created
        super(props); //since we are overriding function, makes sense to call predefined steps first
        //reference to parent constructor function

        this.state = {
            lat: null, //we don't know latitude yet 
            errorMessage: ''
        }; //only place where we do this.state = something..else we always use this.setState
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude});
            }, //callback for success
            (err) =>  {
                console.log(err);
                this.setState({errorMessage: err.message});
            }//callback for failure
        );
    }

    render(){

        if(this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat){
            return <div> Latitude:{this.state.lat} </div>;
        }

        return <div>Loading...</div>
    }
}
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);