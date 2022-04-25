import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';

function Story() {

    const [data, setData] = useState({
        first_name: "Soumo",
        avatar: "https://randomuser.me/api/portraits/men/62.jpg"
    })
    const navigator = useNavigation()

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
    return (
        <TouchableOpacity style={styles.container} onPress={() => {
            navigator.push('StoryScreen', data)
        }}>
            <View style={{
                width: 73,
                height: 73,
                borderRadius: 73,
                borderColor: '#6f6ff6',
                borderWidth: 3,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image source={{ uri: data.avatar }} style={styles.UserImg} />
            </View>
            <Text style={styles.Username}>{data.first_name}</Text>
        </TouchableOpacity>
    )
}

export default Story

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 100,
    },
    UserImg: {
        width: 67,
        height: 67,
        borderRadius: 60,
        backgroundColor: '#000',
        paddingBottom: 10,
        paddingTop: 15,
    },
    Username: {
        fontSize: 12,
        top: 5,
        color: '#cfcfcf',
    },
    tag: {
        width: 5,
        height: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#8992a1',
        zIndex: 20,
        position: 'absolute',
    }
})