export const LIKE_IMAGE = 'LIKE_IMAGE';
export const UNLIKE_IMAGE = 'UNLIKE_IMAGE';

export const likeImage = (image) => {
    return {
        type: LIKE_IMAGE,
        image
    }
}

export const unlikeImage = (id) => {
    return {
        type: UNLIKE_IMAGE,
        id
    }
}