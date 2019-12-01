import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from './mainReducer';
import { AppActions } from '../types/actions';

// export const store = createStore(mainReducer, applyMiddleware(thunk));
export const store = createStore(mainReducer);

// Is this hacky?  It's so simple, but nothing online even came close to suggesting it...
export function myDispatcher(action: AppActions) {
    store.dispatch(action);
}
