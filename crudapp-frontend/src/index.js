// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// //redux
// import { Provider } from "react-redux";
// import store from "./store";

// import { BrowserRouter } from "react-router-dom";


// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Redux
import { Provider } from "react-redux";
import store from "./store";

//Router
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

