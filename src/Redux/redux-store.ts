import {
  Action,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import convertedreducer from "./convertedreducer";

let reducers = combineReducers({
  converted: convertedreducer,
});

export type InferActionTypes<T> = T extends {
  [key: string]: (...args: any[]) => infer U;
}
  ? U
  : never;

export type ThunkTypeEnum<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>;

type reducersType = typeof reducers;
export type AppStateType = ReturnType<reducersType>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
