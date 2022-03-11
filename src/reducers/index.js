import emojiReducer from './emoji';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    emojis: emojiReducer
})

export default allReducers