import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
    const images = props.images.map(({id, description, urls}) => { 
        return <img key={id} alt= {description} src={urls.regular}></img>;
    });
    //console.log(images);
    return <div className="image-list"> {images}</div>;
}

export default ImageList; 