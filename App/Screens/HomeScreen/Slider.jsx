import { View, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../components/Heading';

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
            <Heading headingText={'Offers For You'} />

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
    sliderImage: {
        width: 248,
        height: 150,
        objectFit: 'cover',
        borderRadius: 20,
    }
})