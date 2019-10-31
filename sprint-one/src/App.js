import React from 'react';
import './App.css';
import Header from './components/Header';
import Article from './components/Article';
import Aside from './components/Aside';
import CommentList from "./components/CommentList";



function App() {

const commentList = [
  {
    name: "Micheal Lyons",
    date: "12/18/2018",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
  },

  {
    name: "Gary Wong",
    date: "12/12/2018",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
  },

  { 
    name: "Theodore Duncan",
    date: "11/15/2018",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
  }
];


  return (
    <>
      <Header />
      <Article />
      <CommentList data ={commentList}/>
      <Aside />

    
    </>
    );
  }


export default App;
