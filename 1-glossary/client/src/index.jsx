import React from "react";
import { render } from "react-dom";
import App from './components/App.jsx';


render(<App />, document.getElementById('root'), (err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Success!');
  }
});