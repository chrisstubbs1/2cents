import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Divider, Title, Paragraph} from 'react-native-paper'

const ProfileInfoSection = (props) => {
    return (
        <View>
            <View style={styles.container} >
                <Title>{props.title}</Title>
                <Paragraph>{props.subTitle}</Paragraph>
                <Divider/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop: 25
    },
})

export default ProfileInfoSection