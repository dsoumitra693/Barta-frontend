import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Dimensions } from 'react-native'

const {height, width} = Dimensions.get('screen')

const Middle = () => {
    return (
        <View style={styles.container}>
            <Text></Text>
        </View>
    )
}

export default Middle

const styles = StyleSheet.create({
    container: {
        // borderRadius: 10,
        height: 0.73*height,
    }
})
