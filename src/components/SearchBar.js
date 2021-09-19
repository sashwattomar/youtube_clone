import React from 'react';
class SearchBar extends React.Component {
    // initializing state
    state ={term:''};
    // form submission function
    onFormSubmit = event => {
    //to prevent page refresh on form submitionn
        event.preventDefault();
//call back to App.js function**********IMP********Deeply nested callback**
        this.props.onFormSubmit(this.state.term);
    };
    render() {
        return (
<div className="search-bar ui segment">
             {/* to start search */}
<form onSubmit={this.onFormSubmit} className="ui form">              
<div className="field"> 
<label>Video Search</label>
{/* to hold query */}

<input 
type="text"
 value={this.state.term} 
 onChange={e => this.setState({ term: e.target.value})}
// .target.value is one of the functions related with event of user input  
// target is the input element
 />
</div>
</form>
</div>
        );
    }
};
export default SearchBar;

