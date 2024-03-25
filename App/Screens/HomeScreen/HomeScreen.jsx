import { Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'

export default function HomeScreen() {
    return (
        <View>
            {/* Header */}
            <Header />

            {/* Slider */}
            <Slider />

            {/* Categories */}
            <Categories/>
        </View>
    )
}