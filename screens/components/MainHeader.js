import React from 'react'
import {View, StyleSheet} from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Title} from 'react-native-paper'

const MainHeader = (props) => {
    return (
        <View style={styles.container}>
            <Icon name="table-of-contents" size={25} color="#7a57d1"/>
            <Title>{props.userFirstName}</Title>
            <Icon name="cog-outline" size={25} color="#7a57d1"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
    },
})

export default MainHeader