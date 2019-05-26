import { combineReducers } from 'redux';

const exampleReducer = (state = {}, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const reducerMap = {
  example: exampleReducer
};

export default combineReducers(reducerMap);

