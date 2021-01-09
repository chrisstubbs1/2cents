import {StyleSheet, View} from "react-native";
import {Button, Card, Divider, Menu, Paragraph, Title} from "react-native-paper";
import React from "react";

const HomeLeftHalf = () => {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return (
        <View style={styles.leftHalf}>
            <View style={styles.drawerSection}>
               
            </View>

            <View style={styles.contentSection}>
                <View style={styles.cardContainer}>
                    <Card>
                        <Card.Cover source={{uri: 'https://picsum.photos/700'}}/>
                        <Card.Content>
                            <Title>Choice 1</Title>
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


    contentSection: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }, cardContainer: {
        width: '100%',
    }, drawerSection: {
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