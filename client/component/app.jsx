/*
 *     ./client/components/App.jsx
 *     */
import React from 'react';
import './app.css';
import './app.less';

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h3>Hello World</h3>
        <h4>Welcome to React webpack Lite boilterplate</h4>
      </div>);
  }
}


console.log('Hello World!');
