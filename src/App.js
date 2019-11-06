import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { setSearchVideo } from './actions/searchVideo/searchVideo';

const mapStateToProps = state => {
  return {
    searchVideoField: state.searchVideoField
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    onSearchChange: (event) => dispatch(setSearchVideo(event.target.value))
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [],
    }
  }

  componentDidMount() {
    this.setState({ videos: [{
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8wL-RvGE0G3B2W-dMd9ZZcgW8BR7nzrIgpXiWYxpio_RFvvCb',
      id: 0,
      name: 'image one',
    },{
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8wL-RvGE0G3B2W-dMd9ZZcgW8BR7nzrIgpXiWYxpio_RFvvCb',
      id: 1,
      name: 'image two',
    },{
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8wL-RvGE0G3B2W-dMd9ZZcgW8BR7nzrIgpXiWYxpio_RFvvCb',
      id: 2,
      name: 'image three',
    }]})
  }

  

  render() {
    const { 
      videos 
    } = this.state;
    const { 
      onSearchChange, 
      searchVideoField 
    } = this.props;

    const filteredVideos = videos.filter(video => {
      return video.name.toLowerCase().includes(searchVideoField.toLowerCase());
    });

    return (
      <div className="App">
        <input type="text" onChange={onSearchChange} />
        {
          filteredVideos.map(function(item, i){
            return <img key={i} src={item.image} alt={item.image} />
          })
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
