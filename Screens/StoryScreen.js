import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, ScrollView, StatusBar, Platform, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Footer from '../components/StoryScreenComponent/Footer'
import Header from '../components/StoryScreenComponent/Header'
import Middle from '../components/StoryScreenComponent/Middle'
import MoreOpt from '../components/MoreOpt';


const StoryScreen = ({ route }) => {
    const [showMore, setShowMore] = useState(false)
    const onClick = () => {
        setShowMore(!showMore)
    }
    return (
        <SafeAreaProvider style={styles.AndroidSafeArea}>
            <Header route={route.params}onClickMore={onClick} />
            {showMore && (
                    <View style={styles.more}>
                        <MoreOpt name={"Video Call"} type={'feather'} iconName={'video'} onClick={onClick} />
                        <MoreOpt name={"Audio Call"} type={'feather'} iconName={'phone'} onClick={onClick} />
                        <MoreOpt name={"Block User"} type={'feather'} iconName={'slash'} onClick={onClick} />
                        <MoreOpt name={"Delete Chat"} type={'antdesign'} iconName={'delete'} onClick={onClick} />
                        <MoreOpt name={"Clear Chat"} type={'entypo'} iconName={'eraser'} onClick={onClick} />
                    </View>)}
            <KeyboardAvoidingView style={{
                flex: 1,
            }}>
                <ScrollView>
                    <Middle />
                    <Footer />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaProvider>
    )
}

export default StoryScreen

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        height: 100,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight - 40: 0,
        backgroundColor: '#000'
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
});
