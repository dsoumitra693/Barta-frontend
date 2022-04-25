import { useNavigation } from '@react-navigation/native'
import axios from 'axios';
import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform, StatusBar, TextInput, ToastAndroid } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { User } from '../App';
import Constants from "expo-constants";
import OtpField from '../components/LoginScreenComponents/OtpField';
const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000`;

const Login__Phone = ({ route }) => {
    const navigator = useNavigation()
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isFocused, setIsFocused] = useState(false)
    return (
        <SafeAreaProvider style={styles.AndroidSafeArea}>
            <View style={styles.container}>
                <Text style={{
                    width: '70%',
                    textAlign: 'center',
                    marginBottom: 30,
                    color: '#fff',
                }}>We need to text you a confirmation code to get started</Text>
                <View style={{
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}>
                    <Text style={{
                        fontSize: 12,
                        marginLeft: 40,
                        color: '#fff',
                    }}>PHONE NUMBER</Text>
                    <View style={{
                        width: '100%',
                        height: '100%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#fff',
                    }}>
                        <Text style={{ color: '#8992a1' }}>+91 </Text>
                        <TextInput style={styles.input(isFocused)}
                            placeholder='Enter your phone number'
                            placeholderTextColor={'grey'}
                            value={phoneNumber}
                            onChangeText={(e) => {
                                setPhoneNumber(e)
                            }}
                            onFocus={()=> setIsFocused(true)}
                            keyboardType='number-pad'
                            maxLength={10}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.btn} onPress={async () => {
                    if(phoneNumber.length !== 10 ){
                        ToastAndroid.show('Enter a valid Phone Number', ToastAndroid.SHORT)
                        return
                    }
                    try {
                        // let reqOptions = {
                        //     url: `${uri}/v1/user?phone=${phoneNumber}`,
                        //     method: "POST",
                        // }
                        // let res = await axios.request(reqOptions)
                        navigator.push('otp', { number: phoneNumber })
                    } catch (err) {
                        ToastAndroid.show('Please check your connection...', ToastAndroid.SHORT)
                    }
                }}>
                    <Text style={{ color: '#fefefe' }}> Get OPT </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaProvider>
    )
}

export const Login__otp = ({ route }) => {
    const [code, setCode] = useState('')
    const { setUserData } = useContext(User)
    return (
        <SafeAreaProvider style={styles.AndroidSafeArea}>
            <View style={styles.container}>
                <Text style={{
                    width: '70%',
                    textAlign: 'center',
                    marginBottom: 30,
                    color: '#fff',
                }}>We have sent you a confirmation code you should get in soon</Text>
                <View style={{
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}>
                    <OtpField setCode={setCode}/>
                </View>
                <TouchableOpacity style={styles.btn} onPress={async () => {
                    try {
                        // let reqOptions = {
                        //     url: `${uri}/v1/user/validate?phone=${route.params.number}&code=${code}`,
                        //     method: "POST",
                        // }
                        // let res = await axios.request(reqOptions)
                        console.log(code)
                        setUserData(code)
                    } catch (err) {
                        ToastAndroid.show('Please check your connection...', ToastAndroid.SHORT)
                    }
                }}>
                    <Text style={{ color: '#fefefe' }}> Continue </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaProvider>
    )
}

export default Login__Phone
const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: '#3b3b3b'
    },
    container: {
        justifyContent: 'flex-start',
        paddingTop: 100,
        alignItems: 'center',
        height: '100%'
    },
    input: (isFocused) => ({
        width: '70%',
        height: '80%',
        borderColor: !isFocused ? '#bbbbbb' : '#2b2b2b',
        borderBottomWidth: 1,
        fontSize: 15,
        marginLeft: 10,
        color: '#fefefe',
    }),
    btn: {
        marginTop: 70,
        backgroundColor: "#6f6ff6",
        borderRadius: 8,
        width: 300,
        height: 55,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});