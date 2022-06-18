import React from 'react';
import { List } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { AlbumItem } from '../AlbumItem/AlbumItem';
import { useMediaQuery } from 'react-responsive';
import './Album.less';

export const Album = ({ album, handleGoBack }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <div className='album'>
            {handleGoBack &&
                <div className='go-back-wrapper' onClick={handleGoBack}>
                    <ArrowLeftOutlined />
                    <span className='go-back-text'>Go back</span>
                </div>
            }
            <List 
                itemLayout={isMobile ? 'vertical' : 'horizontal'}
                size='large'
                pagination={album.length > 0 ? { 
                    pageSize: 10
                } : false}
                dataSource={album}
                renderItem={item => (
                    <AlbumItem item={item} />
                )}         
            />
        </div>
    );
}