import React from 'react';
import { List, Space, Image } from 'antd';
import { LikeOutlined, StarOutlined, LikeFilled, StarFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addFavouriteImage, removeFavouriteImage } from '../../redux/actions/favourites';
import { likeImage, unlikeImage } from '../../redux/actions/liked';
import './AlbumItem.less';

const IconText = ({ icon, clickHandler }) => (
    <Space onClick={clickHandler}>
        {React.createElement(icon)}
    </Space>
);

export const AlbumItem = ({ item }) => {

    const dispatch = useDispatch();
    const favouriteImages = useSelector(state => state.favouriteImages);
    const likedImages = useSelector(state => state.likedImages);

    const clickFavourite = (item) => {
        const isImageFavourite = favouriteImages.some(image => image.id === item.id);
        if (isImageFavourite) {
            const { id } = item;
            dispatch(removeFavouriteImage(id));
        } else {
            dispatch(addFavouriteImage(item));
        }
    }

    const clickLike = (item) => {
        const isImageLiked = likedImages.some(image => image.id === item.id);
        if (isImageLiked) {
            const { id } = item;
            dispatch(unlikeImage(id));
        } else {
            dispatch(likeImage(item));
        }
    }

    const isImageLiked = (image) => {
        return likedImages.some(liked => liked.id === image.id);
    }

    const isImageFavourite = (image) => {
        return favouriteImages.some(favourite => favourite.id === image.id);
    }

    return (
        <List.Item
            className='album-item'
            key={item.id}
            actions={[
                <IconText clickHandler={() => clickFavourite(item)} icon={isImageFavourite(item) ? StarFilled : StarOutlined} key='list-vertical-star-o' />,
                <IconText clickHandler={() => clickLike(item)} icon={isImageLiked(item) ? LikeFilled : LikeOutlined} key='list-vertical-like-o' />
            ]}
        >
            <Image 
                alt={item.title}
                src={item.thumbnailUrl}
                preview={{ src: item.url }}
            />
            <p className='album-item__title'>{item.title}</p>
        </List.Item>
    );
}