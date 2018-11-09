// if you're not using service workers, remove them.
// Leaving in stuff CRA gives you out of the box makes it look like you're a bit clueless about CRA
// also, put your logo in an images/assets file
// if you don't need the meow wolf logo, get rid of it

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
