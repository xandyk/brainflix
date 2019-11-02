import React from 'react';
import './App.css';
import Header from './components/Header';
import Article from './components/Article';
import CommentList from "./components/CommentList";
import reviewer from "./assets/Images/vg.png";
import NextVideo from "./components/NextVideo";
import NextVideoZero from "./assets/Images/video-list-0.jpg";
import NextVideoOne from "./assets/Images/video-list-1.jpg";
import NextVideoTwo from "./assets/Images/video-list-2.jpg";
import NextVideoThree from "./assets/Images/video-list-3.jpg";
import NextVideoFour from "./assets/Images/video-list-4.jpg";
import NextVideoFive from "./assets/Images/video-list-5.jpg";
import NextVideoSix from "./assets/Images/video-list-6.jpg";
import NextVideoSeven from "./assets/Images/video-list-7.jpg";
import NextVideoEight from "./assets/Images/video-list-8.jpg";
import MainVideo from "./assets/Video/BrainStation Sample Video.mp4";








class App extends React.Component {
  state = {
    commentList: [
      {
        image: reviewer,
        name: "Micheal Lyons",
        date: "12/18/2018",
        comment:
          "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
      },

      {
        image: reviewer,
        name: "Gary Wong",
        date: "12/12/2018",
        comment:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
      },

      {
        image: reviewer,
        name: "Theodore Duncan",
        date: "11/15/2018",
        comment:
          "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
      }
    ],

    videoList: [
      {
        id: "0100",
        title: "Become A Travel Pro In One Easy Lesson",
        channel: "Bernie Lambert",
        image: NextVideoOne
      },

      {
        id: "0200",
        title: "Les Houches The Hidden Gem Of The Chamonix",
        channel: "Bernard Patrick",
        image: NextVideoTwo
      },

      {
        id: "0300",
        title: "Travel Health Useful Medical Information For",
        channel: "Glen Harper",
        image: NextVideoThree
      },

      {
        id: "0400",
        title: "Cheap Airline Tickets Great Ways To Save",
        channel: "Emily Harper",
        image: NextVideoFour
      },

      {
        id: "0400",
        title: "Cheap Airline Tickets Great Ways To Save",
        channel: "Emily Harper",
        image: NextVideoFour
      },

      {
        id: "0500",
        title: "Take A Romantic Break In A Boutique Hotel",
        channel: "Ethan Owen",
        image: NextVideoFive
      },

      {
        id: "0600",
        title: "Choose The Perfect Accommodations",
        channel: "Lydia Perez",
        image: NextVideoSix
      },

      {
        id: "0700",
        title: "Cruising Destination IdeasChoose The Perfect Accommodations",
        channel: "Timothy Austin",
        image: NextVideoSeven
      },

      {
        id: "0800",
        title: "Train Travel On Track For Safety",
        channel: "Scotty Cranmer",
        image: NextVideoEight
      }
    ],

    mainVideo: {
      id: "0000",
      title: "BMX Rampage: 2018 Highlights",
      description:
        "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
      channel: "By Red Cow",
      image: NextVideoZero,
      views: "1,001,023",
      likes: "110,985",
      duration: "",
      video: '',
      timestamp: "12/18/2018",
      comments: [
        {
          image: reviewer,
          name: "Micheal Lyons",
          date: "12/18/2018",
          comment:
            "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
        },

        {
          image: reviewer,
          name: "Gary Wong",
          date: "12/12/2018",
          comment:
            "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
        },

        {
          image: reviewer,
          name: "Theodore Duncan",
          date: "11/15/2018",
          comment:
            "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
        }
      ]
    }
  };

  render() {
    return (
      <>
        <Header />
        <Article data={this.state.mainVideo} />
        <CommentList data={this.state.commentList} />
        <NextVideo data={this.state.videoList} />
      </>
    );
  }
}



export default App;
