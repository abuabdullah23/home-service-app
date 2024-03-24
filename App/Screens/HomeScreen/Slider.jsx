import { View, Text, StyleSheet } from 'react-native'
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

    console.log(sliders);

    return (
        <View style={styles.sliderContainer}>
            <Text>Slider</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    sliderContainer: {
        padding: 20
    }
})