import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, Platform } from 'react-native'
import VideoCom from '../components/ReelsScreenComponent/VideoCom';

const ReelsScreen = () => {
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <ScrollView pagingEnabled={true} showsHorizontalScrollIndicator={false}>
                <VideoCom  
                    url={'https://127.0.0.1:8887/vid0.mp4'}
                    channel={'soumo'}
                    desc={'first video ever'}
                    song={"none"}
                    like={300}
                    message={300}
                    share={300}/>
            <VideoCom  
                    url={'https://127.0.0.1:8887/vid0.mp4'}
                    channel={'soumo'}
                    desc={'First video ever that I uploaded on #Barta. Hopefully this is working. Feeling Happpy. \n#HAPPINESS '}
                    song={"none"}
                    like={300}
                    message={300}
                    share={300}/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ReelsScreen

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        height: 100,
        width: '100%',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: '#f9fafb'
    },
})
