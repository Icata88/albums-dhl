export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';

export const addFavouriteImage = (image) => {
    return {
        type: ADD_FAVOURITE,
        image
    }
}

export const removeFavouriteImage = (id) => {
    return {
        type: REMOVE_FAVOURITE,
        id
    }
}