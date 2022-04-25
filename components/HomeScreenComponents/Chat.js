import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';

function Chat() {
    const [data, setData] = useState({
        first_name: "Soumo",
        avatar: "https://randomuser.me/api/portraits/men/62.jpg"
    })

    useEffect(async () => {
        try {
            const res = await axios.get("https://randomuser.me/api/?results=1");
            setData({ 
                first_name: res["data"]["results"][0]["name"]["first"], 
                avatar: res["data"]["results"][0]["picture"]["medium"],
                city: res["data"]["results"][0]["location"]["city"],
                country: res["data"]["results"][0]["location"]["country"],
                username: res["data"]["results"][0]["login"]["username"],
                phone: res["data"]["results"][0]["phone"],
            })
        } catch (err) {
            console.log("error: ", err);
        }
    }, [])
    const navigator = useNavigation()
    const pressed = () => {
        navigator.push('Chat', data)
    }
    return (
        <TouchableOpacity style={styles.container} onPress={pressed}>
            <TouchableOpacity onPress={()=>{
                navigator.push('Profile', data)
            }}>
                <Image source={{ uri: data.avatar }} style={styles.UserImg} />
            </TouchableOpacity>
            <View style={{ width: '60%', paddingLeft: 13, paddingRight: 13 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>
                    {data.first_name}
                </Text>
                <Text style={{ top: 6, fontWeight: '100', fontSize: 15, color: '#cfcfcf' }}>Hey! How's it going?</Text>
            </View>
            <View>
                <Text style={{ fontWeight: '100', fontSize: 13, color: '#c8cacd' }}>04:04AM</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Chat

const styles = StyleSheet.create({
    UserImg: {
        width: 55,
        height: 55,
        borderRadius: 55,
        backgroundColor: '#000',
        paddingBottom: 15,
        paddingTop: 15,
    },
    container: {
        justifyContent: 'space-between',
        width: '100%',
        height: 90,
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 25,
        paddingRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#3b3b3b',
        borderBottomWidth: 3,
        borderRadius: 5,
        backgroundColor: '#4f4f4f'
    },
})