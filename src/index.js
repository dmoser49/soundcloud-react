import React from 'react';
import ReactDOM from 'react-dom';

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
    {tracks.map(track => (
        <div>{track.title}</div>
      ))}
  </div>,
  document.getElementById('app')
);

module.hot.accept();