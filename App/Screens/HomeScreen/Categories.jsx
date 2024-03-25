import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import Heading from '../../components/Heading'
import Colors from '../../Utils/Colors';

export default function Categories() {
    const categories = [
        { name: 'Repairing', image: 'https://cdn-icons-png.flaticon.com/128/13133/13133579.png' },
        { name: 'Home', image: 'https://cdn-icons-png.flaticon.com/128/2163/2163350.png' },
        { name: 'Cleaning', image: 'https://cdn-icons-png.flaticon.com/128/995/995016.png' },
        { name: 'Shifting', image: 'https://cdn-icons-png.flaticon.com/128/3097/3097180.png' },
    ];

    return (
        <View style={styles.categoriesContainer}>
            <Heading headingText={'Categories'} isViewAll={true} />

            <FlatList
                style={{ marginTop: 10 }}
                data={categories}
                numColumns={4}
                renderItem={({ item, index }) => index <= 3 && (
                    <View style={styles.container}>
                        <View style={styles.iconContainer}>
                            <Image source={{ uri: item?.image }} style={styles.categoryImage} />
                        </View>
                        <Text style={{ fontFamily: 'outfit-Medium', marginTop: 5 }}>{item.name}</Text>
                    </View>
                )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    categoriesContainer: {
        paddingLeft: 20,
        paddingRight: 20
    },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    categoryImage: {
        width: 30,
        height: 30
    },
    iconContainer: {
        backgroundColor: Colors.LightGray,
        padding: 17,
        borderRadius: 100
    },
})
