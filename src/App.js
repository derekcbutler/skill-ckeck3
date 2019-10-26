import React from "react";
import Nav from "./Components/Nav/Nav";
import routes from "./routes";
import { HashRouter } from "react-router-dom";
import store from "./ducks/store";
import { Provider } from "react-redux";

import "./App.css";

function App() {
  return (
    <Provider store={ store }>
      <HashRouter>
        <div className="App">
          <Nav />
          {routes}
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
