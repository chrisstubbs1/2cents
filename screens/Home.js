import React, {useState} from "react";

import {
    StyleSheet,
    Text,
    View,
} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

import {Button, Card, Title, Paragraph, Menu, Divider} from "react-native-paper";


const Home = () => {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return (
        <View style={styles.container}>
            <View style={styles.leftHalf}>
                <View style={styles.drawerSection}>
                    <Menu
                        visible={visible}
                        onDismiss={closeMenu}
                        anchor={<Button onPress={openMenu}>User Menu</Button>}>
                        <Menu.Item onPress={() => {
                        }} title="Item 1"/>
                        <Menu.Item onPress={() => {
                        }} title="Item 2"/>
                        <Divider/>
                        <Menu.Item onPress={() => {
                        }} title="Item 3"/>
                    </Menu>
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
                    <Button>Swipe!</Button>
                </View>
            </View>

            <View style={styles.rightHalf}>
                <View style={styles.categoriesSection}>
                    <DropDownPicker items={[
                        {
                            label: 'Restaurants',
                            value: 'restaurants',
                            icon: () => <Icon name="flag" size={18} color="#900"/>,
                            hidden: true
                        },
                        {label: 'Pop Culture', value: 'pop', icon: () => <Icon name="flag" size={18} color="#900"/>},
                        {label: 'Food & Drink', value: 'food', icon: () => <Icon name="flag" size={18} color="#900"/>},
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
                    <Button>Swipe!</Button>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "row",
    },

    cardContainer: {
        width: '100%',
    },

    leftHalf: {
        height: "100%",
        width: "50%",
        padding: 10,
        justifyContent: "space-around",
    },

    drawerSection: {
        flex: 1,
        alignItems: 'flex-start'
    },

    contentSection: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    swipeButtonSection: {
        flex: 1,

    },

    rightHalf: {
        height: "100%",
        width: "50%",
        padding: 10,
        justifyContent: "space-around",
    },

    categoriesSection: {
        flex: 1,
    }

});

export default Home;
