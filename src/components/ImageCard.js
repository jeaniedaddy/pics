import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.imgRef = React.createRef();
    }

    componentDidMount(){
        this.imgRef.current.addEventListener('load', this.setSpan);
        // console.log(this.imgRef);
        // console.log(this.imgRef.current.clientHeight);
    }

    setSpan = () => {
        console.log(this.imgRef.current.clientHeight);
    }

    render(){
        const {description, urls} = this.props.image;
        return (
            <div>
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