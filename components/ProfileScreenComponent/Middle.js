import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Linking } from 'react-native'
import React from 'react'
import { Fontisto, MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons'
import Info from './Info'
import { useNavigation } from '@react-navigation/native';
import Footer from '../Footer';

const Middle = ({ route }) => {

    const uri = route?.avatar || 'https://yt3.ggpht.com/yti/APfAmoHnzOfEtbC2GbMhj35ufeK2x3GCxWTTzjKzrSuV7w=s88-c-k-c0x00ffffff-no-rj-mo'
    const name = route?.first_name || "SOUMO"
    const username = route?.username || "SMD__46"
    const city = route?.city || "HYDRABAD"
    const country = route?.country || "INDIA"
    const phone = route?.phone || "7478398178"
    const navigator = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.ImageContainer}>
                <Image source={{ uri }} style={styles.Image} resizeMode='cover' />
            </View>
            <View style={styles.profile}>
                <View style={styles.details}>
                    <Image source={{ uri }} style={styles.UserImg} resizeMode='cover' />
                    {!route ? (
                        <TouchableOpacity>
                            <MaterialCommunityIcons name='pencil-circle' size={30} style={styles.icon} />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => {
                            navigator.push('Chat', route)
                        }}>
                            <Ionicons name='md-add-circle' size={30} style={styles.icon} />
                        </TouchableOpacity>
                    )}
                    <View style={styles.Text}>
                        <Text style={styles.primary}>
                            {name.toUpperCase()}
                        </Text>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL(`geo: ${city}, ${country}`)
                        }}>
                            <Text style={styles.secondary(city.length + country.length)}>
                                <Fontisto
                                    name='map-marker-alt'
                                    size={7} color={'#6f6ff6'} />
                                {' '}{city.toUpperCase()}, {country.toUpperCase()}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Info heading={'Account'} details={[
                    {
                        props: 'Phone',
                        value: phone,
                    },
                    {
                        props: 'Username',
                        value: '@' + username
                    },
                    {
                        props: 'Bio',
                        value: 'Android Devloper'
                    },
                ]} />
            </ScrollView>
        </View>
    )
}

export default Middle

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: '#3b3b3b'
    },
    ImageContainer: {
        width: '100%',
        height: 300,
    },
    UserImg: {
        width: 110,
        height: 110,
        borderRadius: 110,
        backgroundColor: '#000',
        position: 'absolute',
        left: '10%',
        top: -55
    },
    Image: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        paddingBottom: 10,
    },
    profile: {
        position: 'absolute',
        top: 230,
        width: '100%',
        height: 80,
        backgroundColor: '#4f4f4f',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginBottom: 10,
    },
    details: {
        flexDirection: 'row',
        paddingLeft: '30%',
        width: '100%',
        height: 80,
    },
    Text: {
        paddingLeft: 25,
        position: 'relative',
        left: '13%',
    },
    primary: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 13,
        paddingTop: 10,
        letterSpacing: 5,
        color: '#fff'
    },
    secondary: (len) => ({
        fontSize: 10,
        letterSpacing: 0.5,
        color: '#fefefe',
        width: len <= 20 ? '100%' : '80%'
    }),
    icon: {
        width: 30,
        height: 30,
        borderRadius: 30,
        color: '#000',
        top: 20,
        backgroundColor: '#4f4f4f',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
