import { combineReducers } from 'redux';
import * as recipesReducers from './recipes';

export default combineReducers(Object.assign(recipesReducers));