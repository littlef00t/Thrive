import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  window.Store = configureStore();
  ReactDOM.render(<div>Breathe</div>, document.getElementById('content'));
});
