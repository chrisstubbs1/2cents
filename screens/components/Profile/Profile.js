import React from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import MainHeader from './ProfileComponents/MainHeader'
import ProfilePictureSection from './ProfileComponents/ProfilePictureSection'
import ProfileInfoSection from './ProfileComponents/ProfileInfoSection'

const Profile = () => {
    return (
        <View style={styles.container}>

            <MainHeader userFirstName={'Chris\' Profile'}/>
            <ProfilePictureSection />
            <ScrollView style={styles.scrollableArea}>
                <ProfileInfoSection title={'First Name'} subTitle={'Chris'}/>
                <ProfileInfoSection title={'Last Name'} subTitle={'Stubbs'}/>
                <ProfileInfoSection title={'Email Address'} subTitle={'stubbs.chris2@gmail.com'}/>
                <ProfileInfoSection title={'Date of Birth'} subTitle={'July 2nd 1997'}/>
                <ProfileInfoSection title={'Phone Number'} subTitle={'4048765432'}/>
                <ProfileInfoSection title={'Gender'} subTitle={'Male'}/>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    scrollableArea: {
        flex: 3
    },
})


export default Profile
