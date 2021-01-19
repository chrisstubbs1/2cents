import {StyleSheet, View} from "react-native";
import {Button} from "react-native-paper";
import React from "react";
import CardSection from "./CardSection";

const HomeLeftHalf = ({choice}) => {

    return (
        <View style={styles.leftHalf}>
            <View style={styles.drawerSection}>

            </View>

            <View style={styles.contentSection}>
                <View style={styles.cardContainer}>
                    <CardSection imageSource={choice.imageSource}
                                 title={choice.title}
                                 description={choice.description}/>
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


    contentSection: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    cardContainer: {
        width: '100%',
    },

    drawerSection: {
        flex: 1,
        alignItems: 'flex-start'
    },

    leftHalf: {
        height: "100%",
        width: "50%",
        padding: 10,
        justifyContent: "space-around",
    },
})

export default HomeLeftHalf
