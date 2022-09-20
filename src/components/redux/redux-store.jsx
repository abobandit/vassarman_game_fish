const { combineReducers, legacy_createStore } = require("redux")

let reducers = combineReducers({});

let store = legacy_createStore(reducers);

window.store = store;
export default store;