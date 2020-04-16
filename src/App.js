// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// App.js

import React from "react";
import { routes } from "./routes";
import { Route, BrowserRouter } from "react-router-dom";
import { Switch } from "react-router";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <div>
          <div>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={route.main}
                />
              ))}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
