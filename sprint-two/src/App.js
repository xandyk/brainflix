import Article from './components/Article';
import CommentList from "./components/CommentList";
import NextVideo from "./components/NextVideo";
import React from 'react' //classes ->rcc
import axios from 'axios';
import Header from './components/Header';


const api_key = "?api_key=<ghost>";

export default class App extends React.Component {
  state = {
    mainVideo: undefined,
    sideVideos: undefined
  };

  componentDidMount() {
    axios
      .get(`https://project-2-api.herokuapp.com/videos${api_key}`)
      .then(responseSideVideos => {
        axios
          .get(
            `https://project-2-api.herokuapp.com/videos/${responseSideVideos.data[0].id}${api_key}`
          )
          .then(responseMainVideo => {
            this.setState({
              mainVideo: responseMainVideo.data,
              sideVideos: responseSideVideos.data
            });
          });
        })
      
      }
      // this.state.mainVideo === undefined ? return (<h1>Loading...</h1>): 
    // return (
    //     <>
    //       <Header />
    //       <Article data={this.state.mainVideo} />
    //       <CommentList data={this.state.mainVideo.comments} />
    //       <NextVideo data={this.state.sideVideos} />
    //     </> 
  render() {
    if (this.state.mainVideo === undefined)
    return (<h1>Loading...</h1>)
    else {
      console.log(this.state.mainVideo);
      console.log(this.state.sideVideos);
    return (
        <>
          <Header />
          <Article data={this.state.mainVideo} />
          <CommentList data={this.state.mainVideo.comments}  />
          <NextVideo data={this.state.sideVideos} videoID = {this.state.mainVideo.id}  />
        </>
    );
    }
  }

  componentDidUpdate(prevProps) {
    //console.log(prevProps)
    //console.log(this.props)
  

    if (prevProps !== this.props) {
    console.log(this.props.match.params)

    axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.videoID}${api_key}`).then(response => {
          this.setState({
            mainVideo: response.data
          })
          console.log(this.state.mainVideo);
        })
    }
  }
}


