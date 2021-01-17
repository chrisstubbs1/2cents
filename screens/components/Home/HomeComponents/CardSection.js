import React from 'react'
import {View} from "react-native";
import {Card, Paragraph, Title} from "react-native-paper";

const CardSection = () => {
    return(
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
    )
}

export default CardSection