import React, {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from '../Icon';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
const height = Dimensions.get('screen').height;

function Footer() {
    return (
        <View style={styles.container}>
            <FooterBtn name={'Home'} iconName={'home'} type={'entypo'}/>
            <FooterBtn name={'Reels'} iconName={'movie-outline'} type={'material-icon'}/>
            <FooterBtn name={'Profile'} iconName={'user-circle-o'} type={'fontawsome'}/>
        </View>
    )
}

function FooterBtn({ name, iconName, type='fontawsome' }) {
    const navigator = useNavigation()
    const [Active, setActive] = useState('Home')
    const color = (Active === name) ? '#6f6ff6' : '#c8cacd';
    const BtnPressed = () =>{
        if(Active != name) {
            navigator.push(name)
        }
    }
    return (
        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center',fontSize: 10 }} onPress={BtnPressed}>
            <Icon iconName={iconName} size={22}color={color}type={type}/>
            <Text style={{ color , fontSize: 13, fontWeight: 'bold'}}>{name}</Text>
        </TouchableOpacity>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#4f4f4f",
        // backgroundColor: "red",
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        height: 0.06*height,
        padding: 5,
        position: 'relative',
        // borderTopColor: '#3b3b3b',
        // borderTopWidth: 2,
    },
})