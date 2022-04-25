import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons, FontAwesome, Entypo } from 'react-native-vector-icons'

function VideoSidebar({ like, message, share }) {
    const [liked, setLiked] = useState(false)
    let onLikePress = () => {
        setLiked(!liked)
    };
    return (
        <View style={styles.videoSidebar}>
            <View style={styles.videoSidebar__btn}>
                {liked ? (
                    <TouchableOpacity onPress={onLikePress}>
                        <MaterialIcons name='favorite' size={40} color={'#f21d61'} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={onLikePress} >
                        <MaterialIcons name='favorite-outline' size={40} color={'#fff'} />
                    </TouchableOpacity>
                )}
                <Text style={styles.text}>{liked ? like + 1 : like}</Text>
            </View>
            <View style={styles.videoSidebar__btn}>
                <FontAwesome name='comment' size={38} color={'#fff'} />
                <Text style={styles.text}>{message}</Text>
            </View>
            <View style={styles.videoSidebar__btn}>
                <Entypo name='share' size={40} color={'#fff'} />
                <Text style={styles.text}>{share}</Text>
            </View>
        </View>
    )
}

export default VideoSidebar


const styles = StyleSheet.create({
    videoSidebar: {
        height: '100%',
        paddingRight: 5,
        position: 'absolute',
        right: 0,
        top: 470,
    },
    videoSidebar__btn: {
        height: 70,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 13
    },
})
