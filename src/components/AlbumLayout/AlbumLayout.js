import React, { useState } from 'react';
import { LikeOutlined, StarOutlined, BarsOutlined, CameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useAlbums } from '../../context';
import { NavDrawer } from '../NavDrawer/NavDrawer';
import { useMediaQuery } from 'react-responsive';
import './AlbumLayout.less';

const { Content, Sider } = Layout;

export const AlbumLayout = ({ children }) => {

    const [navDrawerVisible, setNavDrawerVisible] = useState(false);
    const { selectedNavOption, setSelectedNavOption } = useAlbums();
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const handleCloseDrawer = () => {
        setNavDrawerVisible(false);
    }

    const openNavDrawer = () => {
        setNavDrawerVisible(true);
    }

    const clickNavigation = (item) => {
        const { key } = item;
        setSelectedNavOption(key);
    }

    const handleClickMobileNavigation = (key) => {
        setSelectedNavOption(key);
    }

    return (
        <Layout className='album-layout'>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <Menu
                    theme='dark'
                    mode='inline'
                    selectedKeys={[selectedNavOption]}
                    onClick={clickNavigation}
                    items={[{
                            key: '1',
                            icon: <CameraOutlined />,
                            label: 'Albums'
                        },
                        {
                            key: '2',
                            icon: <StarOutlined />,
                            label: 'Favourites',
                        },
                        {
                            key: '3',
                            icon: <LikeOutlined />,
                            label: 'Liked photos',
                        }
                    ]}
                />
            </Sider>
            <div className='trigger-collapse-mobile-wrapper' onClick={openNavDrawer}>
                <span className='trigger-collapse-mobile'>
                    <BarsOutlined />
                </span>
            </div>
            <Layout className='site-layout'>
                <Content>
                    <div className='site-layout-background'>
                        { children }
                    </div>
                </Content>
            </Layout>
            <NavDrawer 
                visible={navDrawerVisible && isMobile} 
                handleCloseDrawer={handleCloseDrawer} 
                selectedNavOption={selectedNavOption}
                handleClickMobileNavigation={handleClickMobileNavigation}
            />
        </Layout>
    );
}