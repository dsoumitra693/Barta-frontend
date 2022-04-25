import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import { Divider } from 'react-native-elements'


const InfoChild = ({ props, value }) => {
    return (
        <>
            <View style={styles.container}>
                <Text style={{ color: '#919295' }}>{props}</Text>
                        <TouchableOpacity onPress={()=>{
                            if(props == "Phone") Linking.openURL(`tel:${value}`)
                        }}>
                            <Text style={{color: '#919295'}}>{value}</Text>
                        </TouchableOpacity>
                </View>
            <Divider width={1} color={'#919295'} />
        </>
    )
}

export default InfoChild

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
