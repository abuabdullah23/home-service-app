import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Heading({ headingText, isViewAll }) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{headingText}</Text>
            {isViewAll && <Text>View All</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    heading: {
        fontSize: 17,
        fontWeight: '500'
    },
})