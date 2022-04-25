import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from '../Icon'

const MoreOpt = ({ iconName, color, type, name, onClick }) => {
    return (
        <TouchableOpacity onPress={onClick} style={styles.moreOpt}>
            <Icon iconName={iconName} size={20} color={color || '#000'} type={type} />
            <Text style={styles.txt}>{name}</Text>
        </TouchableOpacity>
    )
}

export default MoreOpt

const styles = StyleSheet.create({
    txt: {
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 12
    },
    moreOpt: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20
    }
})
