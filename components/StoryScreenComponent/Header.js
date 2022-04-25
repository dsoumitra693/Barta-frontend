import React, { useState } from 'react'
import { Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Entypo } from 'react-native-vector-icons'
import { Dimensions } from 'react-native'
import { Slider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const width = Dimensions.get('screen').width

const Header = ({ route, onClickMore}) => {

    const [sliderValue, setSliderValue] = useState(50)
    const stories = ['fe', 'Al', 'Na', 'fe', 'Al','Al','Al', 'Na',]
    const sliders = []

     for(let i = 0; i < stories.length; i++ ){
        sliders.push(
        <Slider
        maximumValue={100}
        minimumValue={0}
        minimumTrackTintColor="#blue"
        maximumTrackTintColor="#fff"
        step={1}
        value={sliderValue}
        onValueChange={
          (sliderValue) => setSliderValue(sliderValue)
        }
        disabled={true}
        thumbStyle={{width: 0, height: 0,}}
        style={{
            width: width/stories.length - stories.length*4,
            paddingLeft: 2,
            paddingRight: 2,
        }}
        key={i}
      />
      )
    }

    const uri = route?.avatar || 'https://yt3.ggpht.com/yti/APfAmoHnzOfEtbC2GbMhj35ufeK2x3GCxWTTzjKzrSuV7w=s88-c-k-c0x00ffffff-no-rj-mo' 
    const name = route?.first_name || "SOUMO"

    const navigator = useNavigation()
    const pressed =() => {
        navigator.push('Profile', route)
    }

    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                left: 0
            }}>
                {sliders}
            </View>
            <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <View style={styles.containerLeft}>
                    <TouchableOpacity onPress={pressed}>
                        <Image source={{ uri }} style={styles.UserImg} resizeMode='cover' />
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity onPress={pressed}>
                        <Text style={styles.text}>{name}{'  '}
                            <Text>5h</Text>
                        </Text>
                        </TouchableOpacity>
                        <Text style={styles.text}>THEACEMUSIC{'  '}
                            <Text>VILLANE</Text>
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Entypo name='dots-three-vertical' size={25} color={'#fff'} onPress={onClickMore}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 15,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    UserImg: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#000',
    },
    containerLeft: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 13,
        paddingLeft: 8,
        color: '#fff'
    }
})
