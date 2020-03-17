import React from 'react';

class ImageCard extends React.Component{
    constructor(props){ // initial state 
        super(props); // base class
        this.state={spans: 0};
        this.imageRef = React.createRef(); //reach into the dom and interact with some individual element 
    }
    
    //to access this.imageRef as this method runs after the DOM is rendered
    componentDidMount(){ 
       this.imageRef.current.addEventListener('load', this.setSpans); // added eventlistener to current object
    }
    //when the image loads following method is called
    setSpans = () => {
        const height = this.imageRef.current.clientHeight; // access the height of each image
        const spans = Math.ceil(height / 10 );
        this.setState({spans});
    }
    render() {
        const {description, urls}= this.props.image;

        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}} >
               <img  // wire it up with an individual element by passing as a ref property
                   ref={this.imageRef}
                   alt={description} 
                   src={urls.regular}
                />
            </div>
        );
    }
}
export default ImageCard;