import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import App from './App';
import Header from "./components/Header"
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Upload from "./components/Upload";
ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/upload" component={Upload} />
      <Route path="/videos/:videoID" component={App} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);

serviceWorker.unregister();

