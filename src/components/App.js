import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
// class based components for lifecycle methods and state system
class App extends React.Component {
    //state  object initialixaation
    state = { videos: [], selectedVideo :null };
    //THIS is the function that will make api request.

    // to remove loading when application first loads up
    componentDidMount(){
        this.onTermSubmit('TCS');
    }

    onTermSubmit = async (term) => {
// youtube.js willbring a promise that is stored in response variable
const response = await youtube.get('/search',{
//querry is decided after form is submitted
    params:{
        q:term
    }
});
this.setState({videos:response.data.items,
    selectedVideo: response.data.items[0]
});
};
// callback from child toparent
videorender = (video) =>{
    this.setState({selectedVideo:video });
};
    render(){
        return (
            <div className="ui container"> 
            <SearchBar onFormSubmit={this.onTermSubmit} />
<VideoDetail CurrentVideo={this.state.selectedVideo} />
            {/* Found {this.state.videos.length} videos. */}
<VideoList videorender={this.videorender} videoarray={this.state.videos}/>
            </div>
        ) 
    }
};
export default App;