import React from 'react'
import { StyleSheet, View } from 'react-native';
import Messages from './Messages';
import { Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window')

function Middle() {
    return (
        <View style={styles.container}>
           <Messages/> 
        </View>
    )
}

export default Middle

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        height: 0.82*height,
        marginLeft: 5,
        marginRight: 5,
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: '#4f4f4f'
    }
})