import React from "react";

import "./App.css";

// 引入 boy 跟 girl 组件
import Boy from "./pages/boy";

import Girl from "./pages/girl";

// 导入 store
import store from "./store";

// 导入 provider
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="boy">
          <Boy />
        </div>
        <div className="girl">
          <Girl />
        </div>
      </div>
    </Provider>
  );
}

export default App;
