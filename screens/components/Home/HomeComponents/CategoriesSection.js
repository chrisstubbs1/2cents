import React from 'react'
import Icon from "react-native-vector-icons/Entypo";
import DropDownPicker from "react-native-dropdown-picker";

const CategoriesSecion = () => {
    return(
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
    )
}

export default CategoriesSecion
