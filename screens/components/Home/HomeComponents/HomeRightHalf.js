import React from 'react'
import {StyleSheet, View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Entypo";
import {Button, Card, Paragraph, Title} from "react-native-paper";

const HomeRightHalf = () => {
    return(
        <View style={styles.rightHalf}>
            <View style={styles.categoriesSection}>
                <DropDownPicker items={[
                    {
                        label: 'Restaurants',
                        value: 'restaurants',
                        icon: () => <Icon name="flag" size={18} color="#7a57d1"/>,
                        hidden: true
                    },
                    {label: 'Pop Culture', value: 'pop', icon: () => <Icon name="music" size={18} color="#7a57d1"/>},
                    {label: 'Food & Drink', value: 'food', icon: () => <Icon name="cake" size={18} color="#7a57d1"/>},
                ]}
                                containerStyle={{height: 40}}
                                placeholder={'Categories'}
                />
            </View>

            <View style={styles.contentSection}>
                <View style={styles.cardContainer}>
                    <Card>
                        <Card.Cover source={{uri: 'https://picsum.photos/700'}}/>
                        <Card.Content>
                            <Title>Choice 2</Title>
                            <Paragraph>A short description</Paragraph>
                        </Card.Content>
                    </Card>
                </View>
            </View>

            <View style={styles.swipeButtonSection}>
                <Button labelStyle={styles.buttonSize}>Swipe!</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    swipeButtonSection: {
        flex: 1,

    },

    buttonSize: {
      fontSize: 20
    },

    rightHalf: {
        height: "100%",
        width: "50%",
        padding: 10,
        justifyContent: "space-around",
    },

    categoriesSection: {
        flex: 1,
    },

    contentSection: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },  cardContainer: {
        width: '100%',
    },
})



export default HomeRightHalf