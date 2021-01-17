import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Avatar} from 'react-native-paper'

const ProfilePictureSection = () => {
    return (
        <View style={styles.container}>
                <Avatar.Image size={200} image={require('../../../../assets/avatar.png')} style={styles.avatar}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },

    avatar: {
        alignSelf: 'center'
    }
})

export default ProfilePictureSection
