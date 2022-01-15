import { createStore,applyMiddleware, compose } from "redux";
import reducers  from "./reducer/index";
import thunk from 'redux-thunk';

export const store = createStore (
    reducers,
    compose(
        applyMiddleware(thunk)
      )
)