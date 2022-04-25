import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native';
import Stories from './HomeScreenComponents/Stories'
import Chats from './HomeScreenComponents/Chats'
const height = Dimensions.get('screen').height;

function Middle() {
    return (
        <View style={styles.container}>
            <Stories/>
            <Chats/>
        </View>
    )
}

export default Middle

const styles = StyleSheet.create({
    container: {
        height: 0.84*height,
        borderWidth: 1,
        borderColor: '#3b3b3b',
        alignItems: 'center'
    }
})