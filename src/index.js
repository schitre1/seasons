import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position), //callback for success
            (err) =>  console.log(err)//callback for failure
        );
        return <div>Latitude:</div>;
    }
}
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);