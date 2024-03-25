import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'
import Heading from '../../components/Heading'
import Colors from '../../Utils/Colors'

export default function LatestBusiness() {
    const business = [
        { title: 'Home Cleaning', category: 'Cleaning', worker: 'Jenny Thomson', image: 'https://img.freepik.com/free-photo/disinfecting-home_155003-9129.jpg' },
        { title: 'Washing Clothes', category: 'Washing', worker: 'Robert Zen', image: 'https://www.dhobilite.com/image/og-image/best-laundry-services-in-india.webp' },
        { title: 'Repairing House', category: 'Repairing', worker: 'John Smith', image: 'https://i0.wp.com/movingtips.wpengine.com/wp-content/uploads/2019/09/waterpipe-repair.jpg' },

    ]
    return (
        <View style={{ padding: 20 }}>
            <Heading headingText={'Latest Business'} isViewAll={true} />
            <View style={{ marginTop: 10 }}>
                <FlatList
                    data={business}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <View style={styles.businessCard}>
                            <Image source={{ uri: item.image }} style={styles.imageStyle} />
                            <View style={styles.infoContainer}>
                                <Text style={{ fontFamily: 'outfit-Medium', fontSize: 17 }}>{item.title}</Text>
                                <Text>{item.worker}</Text>
                                <Text style={styles.category}>{item.category}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    businessCard: {
        marginRight: 20,
        padding: 12,
        backgroundColor: Colors.WHITE,
        borderRadius: 20
    },
    imageStyle: {
        width: 240,
        height: 150,
        borderRadius: 20,
        objectFit: 'cover',
    },
    infoContainer: {
        padding: 7,
        display: 'flex',
        gap: 7
    },
    category: {
        padding: 3,
        paddingHorizontal: 7,
        borderRadius: 3,
        backgroundColor: Colors.LightGray,
        fontSize: 10,
        alignSelf: 'flex-start'
    }
})