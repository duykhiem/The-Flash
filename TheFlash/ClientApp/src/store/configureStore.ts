import { createStore } from 'redux';

import rootReducer from '../reducers/root-reducer';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
        __REDUX_DEVTOOLS_EXTENSION__: any;
        store: any;
    }
}

const devTools = () => {
    if (process.env.NODE_ENV === 'development') {
        return window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    }

    return window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
};

const store = createStore(rootReducer, devTools());

export default store;