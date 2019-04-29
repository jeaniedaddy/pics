import React from 'react';

class SearchBar extends React.Component{
    // constructor(props){
    //     this.props = props; 
    // }
    state = { term: ''}; 

    onFormSubmit=(event)=>   {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render(){
        return (
            <div className="ui segment"> 
                <form onSubmit={(e)=>this.onFormSubmit(e)} className="ui form">
                    <div className="field">
                        <label>Image Search </label>
                        <input 
                            value={this.state.term}
                            type='text' 
                            onChange={ e => {
                                this.setState({ term: e.target.value});
                                }
                            } 
                        />
                    </div>
                </form>
        </div>
        );
    }
}
export default SearchBar; 