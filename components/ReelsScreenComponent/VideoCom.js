import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import { Dimensions } from 'react-native'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'
import { Entypo, AntDesign } from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native'
import MoreOpt from '../MoreOpt';

function VideoCom({ url, channel, desc, song, like, message, share }) {
    const videoRef = useRef(null)
    const [playing, setPlaying] = useState(false)
    const navigator = useNavigation()
    const [showMore, setShowMore] = useState(false)
    const onClick = () => {
        setShowMore(!showMore)
    }
    return (
        <View style={styles.video}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigator.goBack}>
                    <AntDesign name={'arrowleft'} size={20} color={'#fff'} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.txt}>Following</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.txt}>Favourite</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onClick}>
                    <Entypo name={'dots-three-horizontal'} size={20} color={'#fff'} />
                </TouchableOpacity>
            </View>
            {showMore && (
                        <View style={styles.more}>
                            <MoreOpt name={"Video Call"} type={'feather'} iconName={'video'} onClick={onClick} />
                            <MoreOpt name={"Audio Call"} type={'feather'} iconName={'phone'} onClick={onClick} />
                            <MoreOpt name={"Block User"} type={'feather'} iconName={'slash'} onClick={onClick} />
                            <MoreOpt name={"Delete Chat"} type={'antdesign'} iconName={'delete'} onClick={onClick} />
                            <MoreOpt name={"Clear Chat"} type={'entypo'} iconName={'eraser'} onClick={onClick} />
                        </View>)}
            {/* <Video source={{ uri: url }}   
                ref={videoRef}                                      
                onBuffer={onBuffer}               
                onError={videoError}
                // style={backgroundVideo} 
                /> */}
            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsK6oIKzeSCKiqpjv5cuoC4ZC_hJ0FxNkvQ&usqp=CAU' }}
                style={{ height: '100%', width: '100%', zIndex: -1, backgroundColor: '#000' }}
            />
            <VideoSidebar
                like={like}
                message={message}
                share={share}
            />
            <VideoFooter
                channel={channel}
                desc={desc}
                song={song}
            />
        </View>
    )
}

export default VideoCom

const styles = StyleSheet.create({
    video: {
        height: Dimensions.get('window').height + 28,
        width: Dimensions.get('screen').width,
    },
    header: {
        width: '100%',
        height: 80,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute'
    },
    txt: {
        color: "#fff",
        fontSize: 13,
    },
    more: {
        width: '45%',
        height: '30%',
        backgroundColor: '#fff',
        position: 'absolute',
        right: 10,
        top: 40,
        borderRadius: 7,
        zIndex: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

