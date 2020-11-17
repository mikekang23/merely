import { createStore } from "redux";
import rootReducer from "./reducers/index";
import axios from 'axios';

export default createStore(rootReducer);
