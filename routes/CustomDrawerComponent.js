import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import {Avatar} from 'react-native-paper'

const CustomDrawerComponent = (props) => (
    <DrawerContentScrollView {...props} >
        <DrawerItemList {...props} style={styles.dil}/>

    </DrawerContentScrollView>
);

const styles = StyleSheet.create({
    dcsv: {
        paddingLeft: 10
    },

    // dil: {
    //     flex: 1,
    // },
    //
    // container: {
    //     flex: 1,
    // },
    //
    // drawerHeader: {
    //     flex: 1,
    // },
    //
    footer: {
        position: 'absolute',
        bottom: 0
    }
})

export default CustomDrawerComponent
