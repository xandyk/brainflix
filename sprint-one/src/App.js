import React from 'react';
import './App.css';
import Header from './components/Header';
import Article from './components/Article';
import Aside from './components/Aside';
import CommentList from "./components/CommentList";
import reviewer from "./assets/Images/vg.png";
// import SideVideo from "./components/SideVideo";


function App() {

const commentList = [
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
];


// const SideVideoList = [
//   {
//     id: 0110,
//     title: "Become A Travel Pro In One Easy Lesson…",
//     channel: "Bernie Lambert",
//     image: SideVideoOne
    
//   },







  return (
    <>
      <Header />
      <Article />
      <CommentList data ={commentList}/>
      {/* <MainVideo /> */}
      {/* <SideVideo /> */}
      <Aside />

    
    </>
    );
  }







export default App;
