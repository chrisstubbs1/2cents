import React from 'react'
import {Card, Paragraph, Title} from "react-native-paper";

const CardSection = ({imageSource, title, description}) => {
    return(
        <Card>
            <Card.Cover source={{uri: imageSource}}/>
            <Card.Content>
                <Title>{title}</Title>
                <Paragraph>{description}</Paragraph>
            </Card.Content>
        </Card>
    )
}

export default CardSection
