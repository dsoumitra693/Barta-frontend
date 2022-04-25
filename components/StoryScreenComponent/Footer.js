import React, { useState } from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const { height, width } = Dimensions.get('window')

export default function Footer() {

    const [liked, setLiked] = useState(false)
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Write a message'
                placeholderTextColor={'#fff'} />
            <TouchableOpacity onPress={()=>{
                setLiked(!liked)
            }}
            style={{padding: 5}}
            >
                {!liked ? (
                    <FontAwesome name={'heart-o'} size={28} color={'#fff'} />
                ) : (
                    <FontAwesome name={'heart'} size={28} color={'#f21d61'} />
                )}
            </TouchableOpacity>
            <FontAwesome name={'send'} size={28} color={'#fff'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        top: height * 0.0,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        height: 0.1 * height,
        position: 'relative'
    },
    input: {
        width: "78%",
        height: '60%',
        borderColor: '#fff',
        borderRadius: 20,
        borderWidth: 1,
        padding: 12,
        color: '#fff'
    }
})

