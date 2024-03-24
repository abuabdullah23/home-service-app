import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'

export default function Slider() {
    const [sliders, setSliders] = useState([]);

    useEffect(() => {
        getSliders();
    }, [])

    const getSliders = () => {
        GlobalApi.getSlider().then(res => {
            setSliders(res?.sliders)
        })
    }

    return (
        <View style={styles.sliderContainer}>
            <Text style={styles.heading}>Offers For You!</Text>

            {/* Slider Container */}
            <FlatList
                data={sliders}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={{ marginRight: 20, marginTop: 10 }}
                        key={index}
                    >
                        <Image source={{ uri: item?.image?.url }} style={styles.sliderImage} />
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    sliderContainer: {
        padding: 20
    },
    heading: {
        fontSize: 17,
        fontWeight: '500'
    },
    sliderImage: {
        width: 248,
        height: 150,
        objectFit: 'cover',
        borderRadius: 20,
    }
})