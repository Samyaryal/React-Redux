import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''};

    onFormSubmit = (event) => { // everytime we create a form, we dont want form to automatically submit itself, to prevent that event.preventDefault is called
        event.preventDefault();
        this.props.onSearch(this.state.term);  // in class props object is referenced as this.props

        //console.log(this.state.term); //the value of 'this' is always equal to SearchBar
    }
    render(){ 
        return (
            <div className="ui segment">
               <form onSubmit ={this.onFormSubmit} className="ui form">
                  <div className="field">
                      <label>Image search</label>  
                      <input type="text"  value ={this.state.term} onChange={e => this.setState({term: e.target.value})} /> {/* everytime use type an input it going to update the state; it is going to update an term property.*/}
                  </div>
               </form>
            </div>
        );
    }
}

export default SearchBar;