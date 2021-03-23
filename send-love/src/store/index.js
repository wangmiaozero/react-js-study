// 1 导入 createStore
import { createStore } from "redux";

// 2 导入我们自己的 reducer
import { loveReducer } from "../reducer";

// 3. 通过 create 来创建
export default createStore(loveReducer);
