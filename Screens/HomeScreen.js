import React from 'react'
import { Platform, StyleSheet, View, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Middle from '../components/Middle';

function HomeScreen() {
    return (
        <SafeAreaProvider style={styles.AndroidSafeArea}>
            <View>
                <Header leftImgUri={'https://cdn2.iconfinder.com/data/icons/pittogrammi/142/27-512.png'}
                    txt={'Messages'}
                    rightImgUri={'https://cdn2.iconfinder.com/data/icons/user-and-group/64/User_And_Group-02-128.png'} />
                <Middle />
                <Footer Active={'Home'}/>
            </View>
        </SafeAreaProvider>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        height: 100,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: '#3b3b3b'
    },
});
