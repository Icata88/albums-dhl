import { LIKE_IMAGE, UNLIKE_IMAGE } from '../actions/liked';

export const likedImagesReducer = (state = [], action) => {
    switch (action.type) {
        case LIKE_IMAGE:
            return [...state, action.image];
        case UNLIKE_IMAGE:
            return state.filter(item => item.id !== action.id);
        default:
            return state;
    }
}