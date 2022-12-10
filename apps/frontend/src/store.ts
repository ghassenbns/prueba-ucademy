import { applyMiddleware, createStore } from 'redux';
import RootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export type RootStore = ReturnType<typeof RootReducer>

export type AppDispatch = typeof Store.dispatch | any;

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store;

