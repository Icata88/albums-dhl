import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Albums } from './Albums/Albums';
import { Album } from './Album/Album';
import { useAlbums } from '../context';
import { useSelector } from 'react-redux/es/exports';

const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

export const Main = () => {
    const [albums, setAlbums] = useState({});
    const { selectedNavOption } = useAlbums();
    const favouriteImages = useSelector(state => state.favouriteImages);
    const likedImages = useSelector(state => state.likedImages);

    useEffect(() => {
        const getAllPhotos = async () => {
            const response = await axios.get(apiUrl);
            const { data } = response;
            const albums = getArrangedAlbums(data);
            setAlbums(albums);
        }
        getAllPhotos();
    }, []);

    const getArrangedAlbums = (photos) => {
        const albums = {};
        photos.forEach(element => {
            if (albums.hasOwnProperty(element.albumId)) {
                albums[element.albumId].push(element);
            } else {
                albums[element.albumId] = [];
                albums[element.albumId].push(element);
            }
        });
        return albums;
    }

    return (
        <div className='main'>
            {selectedNavOption === '1' &&
                <Albums albums={albums} />
            }
            {selectedNavOption === '2' &&
                <Album album={favouriteImages} />
            }
            {selectedNavOption === '3' &&
                <Album album={likedImages} />
            }
        </div>
    );
}