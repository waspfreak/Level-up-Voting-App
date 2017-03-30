import React, { Component } from 'react';
import{
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';
import { render } from 'react-dom';

import MainLayout from './layouts/MainLayout';
import App from './App';
import About from './pages/About';
import Guideline from './pages/Guideline';


Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ MainLayout }>
        <IndexRoute component={ App }/>
        <Route path="/about" component={ About }/>
        <Route path="/guideline" component={ Guideline }/>
      </Route>
    </Router>,
    document.getElementById('render-target')
  );
});
