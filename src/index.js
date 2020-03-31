import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// import { reducer } from "./reducer";
import rootReducer from "./rootReducer";

import Counter from "./Counter.Component";
import ProductList from "./ProductList";
import "./index.css";

const store = createStore(rootReducer, applyMiddleware(thunk));
const App = () => (
  <Provider store={store}>
    <div>
      <Counter />
      <ProductList />
    </div>
  </Provider>
);

render(<App />, document.getElementById("root"));
