import React from 'react'
import { AntDesign, FontAwesome, Feather, Entypo, MaterialCommunityIcons } from 'react-native-vector-icons'

const Icon = ({ iconName, size, color, type }) => {
    type = type.toLowerCase()
    return (
        <>
            {(type == 'antdesign') && (<AntDesign name={iconName} size={size} color={color} />)}
            {(type == 'fontawsome') && (<FontAwesome name={iconName} size={size} color={color} />)}
            {(type == 'feather') && (<Feather name={iconName} size={size} color={color} />)}
            {(type == 'entypo') && (<Entypo name={iconName} size={size} color={color} />)}
            {(type == 'material-icon') && (<MaterialCommunityIcons name={iconName} size={size} color={color} />)}
        </>
    )
}

export default Icon
