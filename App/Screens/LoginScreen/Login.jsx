import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function Login() {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                source={require('../../../assets/images/login-screen.png')}
                style={styles.loginImage}
            />

            <View style={styles.subContainer}>
                <Text style={{ fontSize: 27, color: Colors.WHITE, textAlign: 'center', fontWeight: 400 }}>
                    Let's find <Text style={{ fontWeight: 'bold' }}>professional and cleaning</Text> home services
                </Text>

                <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 20, color: Colors.WHITE }}>Best App to find service and cleaning your home!</Text>

                <TouchableOpacity style={styles.button} onPress={() => console.log('Button Clicked')}>
                    <Text style={{ textAlign: 'center', fontSize: 17, color: Colors.PRIMARY }}> Let's Get Started </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginImage: {
        width: 230,
        height: 450,
        borderWidth: 2,
        borderColor: Colors.TEAL,
        marginTop: 70,
        borderRadius: 15
    },
    subContainer: {
        width: '100%',
        backgroundColor: Colors.PRIMARY,
        height: '70%',
        marginTop: -25,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 20
    },
    button: {
        padding: 15,
        backgroundColor: Colors.WHITE,
        borderRadius: 99,
        marginTop: 50,
    }
})