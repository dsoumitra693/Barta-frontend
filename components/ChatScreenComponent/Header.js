import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from '../../Icon';

function Header({ txt, onClickMore }) {
    const navigator = useNavigation()
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={navigator.goBack} style={{ height: 50, top: 13 }}>
                <Icon iconName={'left'} size={25} color={'#cfcfcf'} type={'AntDesign'} />
            </TouchableOpacity>
            <Text style={styles.txt}>{txt}</Text>
            <TouchableOpacity onPress={onClickMore} style={{ height: 50, top: 13 }}>
                <Icon iconName={'dots-three-vertical'} size={22} color={'#cfcfcf'} type={'Entypo'} />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#3b3b3b',
    },
    txt: {
        color: "#fefefe",
        fontSize: 18,
        height: 25,
    },
})