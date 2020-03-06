import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  state ={lat: null, errorMessage: ''};

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition( //it gets the users current location 
      position => this.setState({ lat: position.coords.latitude}), // inorder to update our state we use setState
      err => this.setState({ errorMessage: err.message})   
    );
  }
  
  render() {
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error:{this.state.errorMessage}</div>;
    }  
    if (!this.state.errorMessage && this.state.lat){
      return <div>latitude:{this.state.lat}</div>;
    }
    return <div>Loading!</div>;
  }
}
ReactDOM.render(<App />, document.querySelector('#root'))