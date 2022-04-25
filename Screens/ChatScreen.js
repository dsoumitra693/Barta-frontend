import React, { useState } from 'react'
import { Platform, SafeAreaView, StyleSheet, StatusBar, KeyboardAvoidingView, ScrollView, View, TouchableWithoutFeedback } from 'react-native';
import Header from '../components/ChatScreenComponent/Header';
import Middle from '../components/ChatScreenComponent/Middle';
import Footer from '../components/ChatScreenComponent/Footer';
import MoreOpt from '../components/MoreOpt';

function ChatScreen({ route }) {
    const [showMore, setShowMore] = useState(false)
    const onClick = () => {
        setShowMore(!showMore)
    }
    const { first_name } = route.params
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <TouchableWithoutFeedback onPress={onClick}>
                <>
                    <Header 
                        txt={first_name}
                        onClickMore={onClick} />
                    {showMore && (
                        <View style={styles.more}>
                            <MoreOpt name={"Video Call"} type={'feather'} iconName={'video'} onClick={onClick} />
                            <MoreOpt name={"Audio Call"} type={'feather'} iconName={'phone'} onClick={onClick} />
                            <MoreOpt name={"Block User"} type={'feather'} iconName={'slash'} onClick={onClick} />
                            <MoreOpt name={"Delete Chat"} type={'antdesign'} iconName={'delete'} onClick={onClick} />
                            <MoreOpt name={"Clear Chat"} type={'entypo'} iconName={'eraser'} onClick={onClick} />
                        </View>)}
                    <KeyboardAvoidingView style={{ flex: 1 }}>
                        <ScrollView>
                            <Middle />
                            <Footer />
                        </ScrollView>
                    </KeyboardAvoidingView>
                </>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        height: 100,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: '#3b3b3b'
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