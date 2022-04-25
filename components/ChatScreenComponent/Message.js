import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';


function Message({ messageContent, timeStamp, isRecived }) {
    return (
            <View style={styles.container(isRecived)}>
                <Text style={{ color: isRecived ? '#cfcfcf' : '#cfcfcf' }}>{messageContent}</Text>
                <Text style={{
                    left: '78%',
                    paddingTop: 5,
                    paddingBottom: 3,
                    paddingLeft: 5,
                    paddingRight: 5,
                    color: isRecived ? '#cfcfcf' : '#cfcfcf'
                }}>{timeStamp}</Text>
            </View>
    )
}

export default Message

const styles = StyleSheet.create({
    container: (isRecived) => ({
        backgroundColor: isRecived ? '#5e5e5e' : '#6f6ff6',
        borderRadius: 15,
        width: '80%',
        margin: '5%',
        padding: 10,
        paddingRight: 0,
        paddingBottom: 0,
        position: 'relative',
        left: isRecived ? '1%' : '10%',
        borderTopLeftRadius: isRecived ? 0 : 15,
        borderTopRightRadius: isRecived ? 15 : 0,
        flexDirection: 'column'
    })
})