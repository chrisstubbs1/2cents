import React from 'react'
import {StyleSheet, View} from "react-native";
import CategoriesSecion from "./CategoriesSection";
import CardSection from "./CardSection";
import {Button, } from "react-native-paper";

const HomeRightHalf = ({choice}) => {
    return(
        <View style={styles.rightHalf}>
            <View style={styles.categoriesSection}>
                <CategoriesSecion/>
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
