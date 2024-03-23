import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
    const { user, isLoading } = useUser();

    return user && (
        <View style={styles.container}>
            {/* Profile Container */}
            <View style={styles.profileMainContainer}>
                <View style={styles.profileContainer}>
                    <Image source={{ uri: user?.imageUrl }}
                        style={styles.userImage}
                    />
                    <View>
                        <Text style={{ color: Colors.WHITE }}>Welcome,</Text>
                        <Text style={{ color: Colors.WHITE, fontSize: 17 }}>{user?.fullName}</Text>
                    </View>
                </View>
                <FontAwesome name="bookmark-o" size={27} color="white" />
            </View>

            {/* Search Bar Container */}
            <View style={styles.searchBarContainer}>
                <TextInput placeholder='Search' style={styles.textInput} />
                <FontAwesome name="search" size={24} color={Colors.PRIMARY} style={styles.searchButton} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 20,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    profileMainContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    userImage: {
        borderRadius: 99,
        width: 45,
        height: 45,
    },
    searchBarContainer: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10
    },
    textInput: {
        padding: 7,
        paddingHorizontal: 16,
        width: '85%',
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        fontSize: 16
    },
    searchButton: {
        backgroundColor: Colors.WHITE,
        padding: 7,
        borderRadius: 8,
        paddingHorizontal: 12
    }
})