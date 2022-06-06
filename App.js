import React from "react";
import { store } from "./store/store";
import {Provider} from "react-redux";
import Main from "./Screens/Main";


const App = () => {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
}
export default App;