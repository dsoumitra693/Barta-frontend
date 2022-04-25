import React, { useState} from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Dimensions } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const { height, width } = Dimensions.get('window')

export default function Footer() {
    const [inputValue, setInputValue] = useState('')
    return (
        <View style={styles.container}>
            <FontAwesome name={'paperclip'} size={28} color={'#cfcfcf'} />
                <FontAwesome name={'smile-o'} size={28} color={'#cfcfcf'} />
            <TextInput
                style={styles.input}
                placeholder='Write a message'
                value={inputValue}
                placeholderTextColor='grey'
                onChangeText={ e => setInputValue(e) } />
            <FontAwesome name={'send'} size={28} color={'#6f6ff6'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#4f4f4f",
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        height: 0.106 * height,
        position: 'relative',
        top: 0.01 * height,
    },
    input: {
        width: "65%",
        height: '60%',
        borderColor: 'grey',
        borderRadius: 20,
        borderWidth: 1,
        padding: 12,
        color: '#cfcfcf'
    }
})
