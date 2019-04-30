import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.imgRef = React.createRef();
        this.state = {spans:0};
    }

    componentDidMount(){
        this.imgRef.current.addEventListener('load', this.setSpan);
        // console.log(this.imgRef);
        // console.log(this.imgRef.current.clientHeight);
    }

    setSpan = () => {
        console.log(this.imgRef.current.clientHeight);
        const spans = Math.ceil(this.imgRef.current.clientHeight/7);
        this.setState({spans});
    }

    render(){
        const {description, urls} = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}` }}>
                <img 
                    
                    ref={this.imgRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard; 