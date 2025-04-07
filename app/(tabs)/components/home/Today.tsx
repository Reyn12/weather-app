import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { getIkonCuaca } from '../../../../constants/WeatherUtils'

const Today = () => {
    // Data dummy untuk contoh
    const hourlyForecast = [
        { time: '14.00', temp: 32, code: 1000, isDay: true },
        { time: '15.00', temp: 30, code: 1087, isDay: true },
        { time: '16.00', temp: 29, code: 1273, isDay: true },
        // Bisa tambah data lain kalau mau
    ]

    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <Text style={styles.title}>Today</Text>
                <Text style={styles.viewReport}>View full report</Text>
            </View>

            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}
            >
                {hourlyForecast.map((item, index) => (
                    <LinearGradient
                        key={index}
                        colors={item.code === 1000 ? ['#4A9EFF', '#0D6EFD'] : ['#3A3A3A', '#2B2B2B']}
                        style={styles.forecastCard}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <View style={styles.imageCuaca}>
                            <Image 
                                source={getIkonCuaca(item.code, item.isDay)} 
                                style={styles.weatherIcon} 
                            />
                        </View>

                        <View style={styles.forecastInfo}>
                            <Text style={styles.time}>{item.time}</Text>
                            <Text style={styles.temp}>{item.temp}°C</Text>
                        </View>
                    </LinearGradient>
                ))}
            </ScrollView>
        </View>
    )
}

export default Today

const styles = StyleSheet.create({
    container: {
        marginTop: 35,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    viewReport: {
        fontSize: 14,
        color: '#4A9EFF',
    },
    scrollViewContent: {
        flexDirection: 'row',
        paddingRight: 15,
    },
    forecastCard: {
        padding: 15,
        borderRadius: 20,
        marginRight: 15,
        width: 150,
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    imageCuaca: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    weatherIcon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    forecastInfo: {
        flexDirection: 'column',
        gap: 5,
        justifyContent: 'center',
    },
    time: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    temp: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
})