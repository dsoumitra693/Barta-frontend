import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Header from '../components/ProfileScreenComponent/Header'
import Middle from '../components/ProfileScreenComponent/Middle'
import MoreOpt from '../components/MoreOpt'

export default function ProfileScreen({ route }) {
    const [showMore, setShowMore] = useState(false)
    const onClick = () => {
        setShowMore(!showMore)
    }
    return (
        <View style={styles.container}>
            <Middle route={route.params} />
            <Header onClickMore={onClick} />
            {showMore && (
                <View style={styles.more}>
                    <MoreOpt name={"Video Call"} type={'feather'} iconName={'video'} onClick={onClick} />
                    <MoreOpt name={"Audio Call"} type={'feather'} iconName={'phone'} onClick={onClick} />
                    <MoreOpt name={"Block User"} type={'feather'} iconName={'slash'} onClick={onClick} />
                    <MoreOpt name={"Delete Chat"} type={'antdesign'} iconName={'delete'} onClick={onClick} />
                    <MoreOpt name={"Clear Chat"} type={'entypo'} iconName={'eraser'} onClick={onClick} />
                </View>)}
        </View>
    )
}

const styles = StyleSheet.create({
    more: {
        width: '45%',
        height: '300%',
        backgroundColor: '#fff',
        position: 'absolute',
        right: 10,
        top: 40,
        borderRadius: 7,
        zIndex: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#3b3b3b'
    }
});