import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import InfoChild from './InfoChild'
import { Divider } from 'react-native-elements'


const Info = ({ heading, details }) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 25, color: '#aaaaaa'}}>{heading}</Text>
            <Divider width={1} color={'#aaaaaa'} />
            {details.map((detail, index) => (
                <InfoChild props={detail.props} value={detail.value} key={index} />
            ))}
        </View>
    )
}

export default Info

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#4f4f4f',
        height: 200,
        padding: 20,
        marginTop: 5,
    }
})
