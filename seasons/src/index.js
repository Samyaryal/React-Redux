import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props){
    super(props); //super is a reference to the parents constructor function

    this.state = {lat: null};

    window.navigator.geolocation.getCurrentPosition( //it getss the users current location 
      (position) => {
        this.setState({ lat: position.coords.latitude}) // inorder to update our state we use setState
        
      }, // this goes if the current is determined
      (err) => console.log(err)
    );
    
  }
  // React says we have to define render
  render() {
    return <div>Latitude:{this.state.lat} </div>
    
  }
}
ReactDOM.render(<App />, document.querySelector('#root'))