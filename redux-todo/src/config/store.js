import {createStore , combineReducers} from 'redux';
import TodoGenerator from '../redusers/TodoGenerator';


const rootReduser = combineReducers({
    todo: TodoGenerator
})


const store = createStore(rootReduser,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;