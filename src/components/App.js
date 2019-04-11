import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

    state = {images: []};

    onSearchSubmit = async (term)=>{
        //console.log(term);
        const respose = await axios.get('https://api.unsplash.com/search/photos',{
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID 74cfb6fed1fd27e1b782c5a5022e1dcf01bb563514ea0ff3f3c19beefa32db32'
            }
        });

        this.setState({ images: respose.data.results});
    }
    
    render(){
        return (
            <div 
                className="ui container" 
                style={{ marginTop: '10px'}}>
                <SearchBar  onSubmit={this.onSearchSubmit}/>
                {`Found: ${this.state.images.length}`}
            </div>
        );
    }
}
export default App; 