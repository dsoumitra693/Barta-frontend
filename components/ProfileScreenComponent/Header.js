import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform, StatusBar } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

const Header = ({onClickMore}) => {
    const navigator = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navigator.goBack}>
                <AntDesign name={'arrowleft'} size={20} color={'#fff'} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{ fontSize: 17, color: '#fff' }}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClickMore}>
                <Entypo name={'dots-three-horizontal'} size={20} color={'#fff'} />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 13 : 0,
    }
})
