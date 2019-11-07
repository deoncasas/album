import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { setSearchVideo } from './actions/searchVideo';
import { requestVideo } from './actions/requestVideo';

const mapStateToProps = state => {
  return {
    searchVideoField: state.searchVideos.searchVideoField,
    videos: state.requestVideo.videos,
    isPending: state.requestVideo.isPending,
    error: state.requestVideo.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    onSearchChange: (event) => dispatch(setSearchVideo(event.target.value)),
    onRequestVideos: () => dispatch(requestVideo())
  }
}

class App extends React.Component {

  componentDidMount() {
    this.props.onRequestVideos();
  }

  

  render() {
    const { 
      onSearchChange, 
      searchVideoField,
      videos,
      isPending 
    } = this.props;

    const filteredVideos = videos.filter(video => {
      return video.name.toLowerCase().includes(searchVideoField.toLowerCase());
    });

    return isPending ? <div>Loading...</div> :
      <div className="App">
        <input type="text" onChange={onSearchChange} />
        {
          filteredVideos.map(function(item, i){
            return <img key={i} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8wL-RvGE0G3B2W-dMd9ZZcgW8BR7nzrIgpXiWYxpio_RFvvCb" alt="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8wL-RvGE0G3B2W-dMd9ZZcgW8BR7nzrIgpXiWYxpio_RFvvCb" />
          })
        }
      </div>
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
