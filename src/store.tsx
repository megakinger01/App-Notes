import { combineReducers, compose, createStore } from "redux";
import { authReducer } from "./Redux-reducer/authReducer";


export type RootState = ReturnType<typeof store.getState>;

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const  reducer = combineReducers({
    auth: authReducer
})

export const store = createStore(
    reducer,
    composeEnhancers()
)
