import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

    window.navigator.geolocation.getCurrentPosition( //it getss the users current location 
      (position) => console.log(position), // this goes if the current is determined
      (err) => console.log(err)
    );
    return <div>Hi</div>

}
ReactDOM.render(<App />, document.querySelector('#root'))