import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/Reviews.jsx';
import Description from './components/Description.jsx';
import './style.css';

ReactDOM.render(
  React.createElement(Reviews),
  document.getElementById('reviews'),
);

ReactDOM.render(
  React.createElement(Description),
  document.getElementById('description'),
);
