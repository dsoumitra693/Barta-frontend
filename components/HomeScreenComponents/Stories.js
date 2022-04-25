import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native';
import Story from './Story';

function Stories() {
    return (
        <View style={styles.container}>
            <ScrollView styles={styles.stories}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
            </ScrollView>
        </View>
    )
}

export default Stories

const styles = StyleSheet.create({
    container: {
        height: 120,
        backgroundColor: '#4f4f4f',
        padding: 10,
        borderRadius: 10,
        width: '98%',
    },
    stories: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 120,
        backgroundColor: 'blue',
        flexDirection: 'row'
    }
})