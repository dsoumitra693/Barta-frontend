import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import Ticker from 'react-ticker'

function VideoFooter({ channel, desc, song }) {
    const navigator = useNavigation()

    return (
        <View style={styles.videoFooter}>
            <View style={styles.videoFooter__text}>
                <TouchableOpacity onPress={()=>{
                    navigator.push('Profile')
                }}>
                    <Text style={styles.text}>@{channel}</Text>
                </TouchableOpacity>
                <Text style={styles.text}>{desc}</Text>
                {/* <View style={{flexDirection: 'row', paddingTop: 9}}>
                    <MaterialIcons name='music-note' size={25} color={'#fff'} />
                    <Text mode='smooth' style={styles.ticker}>
                        <Text style={styles.text}>{song}</Text>
                    </Text>
                </View> */}
            </View>
            <Image
                style={styles.videoFooter__record}
                source={{ uri: "https://static.thenounproject.com/png/934821-200.png" }} />
        </View>
    )
}

export default VideoFooter

const styles = StyleSheet.create({
    videoFooter: {
        height: '100%',
        paddingRight: 5,
        position: 'absolute',
        padding: 10,
        justifyContent: 'flex-end',
        paddingBottom: 20
    },
    ticker: {
        paddingLeft: 5,
        color: '#fff',
    },
    text: {
        color: "#fff",
        paddingTop: 9,
        maxWidth: 200,
    }
})
