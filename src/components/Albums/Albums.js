import React, { useState } from 'react';
import { Badge, Card, Pagination } from 'antd';
import { Album } from '../Album/Album';
import './Albums.less';

const { Meta } = Card;

export const Albums = ({ albums }) => {
    
    const [selectedAlbumId, setSelectedAlbumId] = useState(null);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(10);
    const [current, setCurrent] = useState(1);

    const clickAlbum = (id) => {
        setSelectedAlbumId(id);
    }

    const changePagination = (page, pageSize) => {
        setCurrent(page);
        setMinValue((page - 1) * pageSize);
        setMaxValue(page * pageSize);
    }

    const handleGoBack = () => {
        setSelectedAlbumId(null);
    }

    if (selectedAlbumId) {
        return <Album album={albums[selectedAlbumId]} handleGoBack={handleGoBack} />
    }

    return (
        <>
            <div className='albums'>
                {Object.keys(albums).slice(minValue, maxValue).map(item => (
                    <Badge key={item} count={albums[item].length}>
                        <Card
                            hoverable
                            onClick={() => clickAlbum(item)}
                            key={item}
                            style={{ width: 240 }}
                            cover={<img alt={albums[item][0].title} src={albums[item][0].thumbnailUrl} />}
                        >
                            <Meta title={`Album # ${item}`} description='Click to see all images from this album' />
                        </Card>
                    </Badge>
                ))}
            </div>
            <Pagination 
                current={current}
                total={Object.keys(albums).length}
                onChange={changePagination}
            />
        </>
    );
}