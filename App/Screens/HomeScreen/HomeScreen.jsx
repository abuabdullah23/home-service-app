import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'
import LatestBusiness from './LatestBusiness'

export default function HomeScreen() {
    return (
        <ScrollView>
            {/* Header */}
            <Header />

            {/* Slider */}
            <Slider />

            {/* Categories */}
            <Categories />

            {/* Latest Business */}
            <LatestBusiness />
        </ScrollView>
    )
}