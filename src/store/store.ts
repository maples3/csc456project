import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import mainReducer from './mainReducer';
import { AppActions } from '../types/actions';

// export const store = createStore(mainReducer, applyMiddleware(thunk));
export const store = createStore(mainReducer, composeWithDevTools());

// Is this hacky?  It seems so simple, but nothing online even came close to suggesting it...
export function myDispatcher(action: AppActions) {
    store.dispatch(action);
}
