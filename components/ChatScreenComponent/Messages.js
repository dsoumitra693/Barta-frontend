import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native';
import { useState } from 'react';
import Message from './Message';
import { Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window')

function Messages() {
    const messages = [
        {
            messageContent: 'Hey Soumo! how was your day?',
            timeStamp: '14:55',
            isRecived: false
        },
        {
            messageContent: "Hi dear! very nice, but I'm miss you, Do your something interesting today",
            timeStamp: '14:55',
            isRecived: true
        },
        {
            messageContent: "Yes this look awsomee",
            timeStamp: '14:55',
            isRecived: false
        },
        {
            messageContent: 'Yeah cool',
            timeStamp: '14:55',
            isRecived: true
        }, {
            messageContent: "Hi dear! very nice, but I'm miss you, Do your something interesting today",
            timeStamp: '14:55',
            isRecived: true
        },
        {
            messageContent: "Yes this look awsomee",
            timeStamp: '14:55',
            isRecived: false
        },
        {
            messageContent: 'Yeah cool',
            timeStamp: '14:55',
            isRecived: true
        }
    ]
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {messages.map((message, index, arr) => (
                    <Message
                        messageContent={message.messageContent}
                        timeStamp={message.timeStamp}
                        isRecived={message.isRecived}
                        key={index}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4f4f4f',
        borderRadius: 10,
        height: '100%',
        paddingBottom: 0,
        marginBottom: 0, 
    }
})