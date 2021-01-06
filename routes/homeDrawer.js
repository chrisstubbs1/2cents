import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Profile from "../screens/Profile";
import AnnouncementBoard from "../screens/components/AnnouncementBoard";
import Home from "../screens/Home";

const Drawer = createDrawerNavigator()

const HomeDrawer = () => {
    return(
        <Drawer.Navigator initialRouteName={'Home'}>
            <Drawer.Screen name={'Home'} component={Home}/>
            <Drawer.Screen name={'Profile'} component={Profile}/>
            <Drawer.Screen name={'Announcement Board'} component={AnnouncementBoard}/>
        </Drawer.Navigator>
    )
}

export default HomeDrawer