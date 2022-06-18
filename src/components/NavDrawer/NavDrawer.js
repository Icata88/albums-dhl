import React from 'react';
import { Drawer } from 'antd';
import { LikeOutlined, StarOutlined, CameraOutlined } from '@ant-design/icons';
import './NavDrawer.less';

export const NavDrawer = ({ 
    visible, 
    handleCloseDrawer,
    selectedNavOption,
    handleClickMobileNavigation
}) => {

    const closeDrawer = () => {
        handleCloseDrawer();
    }

    const clickMobileNavigation = (key) => {
        handleClickMobileNavigation(key);
        closeDrawer();
    }

    return (
        <Drawer 
            className='nav-drawer-mobile'
            placement='left'
            visible={visible}
            onClose={closeDrawer}
            width={300}
            closable
        >
            <div onClick={() => clickMobileNavigation('1')} className={`menu-item ${selectedNavOption === '1' ? 'selected' : ''}`}>
                <CameraOutlined />
                <span className='menu-item-title'>Albums</span>
            </div>
            <div onClick={() => clickMobileNavigation('2')} className={`menu-item ${selectedNavOption === '2' ? 'selected' : ''}`}>
                <StarOutlined />
                <span className='menu-item-title'>Favourites</span>
            </div>
            <div onClick={() => clickMobileNavigation('3')} className={`menu-item ${selectedNavOption === '3' ? 'selected' : ''}`}>
                <LikeOutlined />
                <span className='menu-item-title'>Liked photos</span>
            </div>
        </Drawer>
    )
}