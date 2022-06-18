import { ADD_FAVOURITE, REMOVE_FAVOURITE } from '../actions/favourites';

export const favouritesReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_FAVOURITE:
            return [...state, action.image];
        case REMOVE_FAVOURITE:
            return state.filter(item => item.id !== action.id);
        default:
            return state;
    }
}