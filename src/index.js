import React from 'react';
import ReactDOM from 'react-dom';
import Stream from './components/Stream';

const tracks = [
  {
    title: 'first track'
  },
  {
    title: 'second track'
  }
];

ReactDOM.render(
  <div>
  <Stream tracks={tracks} />
  </div>,
  document.getElementById('app')
);

module.hot.accept();