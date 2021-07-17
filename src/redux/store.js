import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import * as axios from "axios";

const store = createStore(reducers, [], compose(applyMiddleware(ReduxThunk)));

export default store;
