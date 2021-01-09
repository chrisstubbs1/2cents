import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Profile from "../screens/Profile";
import AnnouncementBoard from "../screens/AnnouncementBoard";
import CustomDrawerContent from '../routes/CustomDrawerComponent'

import Home from "../screens/Home";

const Drawer = createDrawerNavigator()

const HomeDrawer = ({props}) => {
    return (
        <Drawer.Navigator initialRouteName={'Home'}
                          drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name={'Home'} component={Home}/>
            <Drawer.Screen name={'Profile'} component={Profile}/>
            <Drawer.Screen name={'Announcement Board'} component={AnnouncementBoard}/>
        </Drawer.Navigator>
    )
}

export default HomeDrawer