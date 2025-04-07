import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../../constants/Colors'

type StatusCuacaProps = {
  temp?: number;
  wind?: number;
  humidity?: number;
}

export default function StatusCuaca({ temp = 32, wind = 10, humidity = 75 }: StatusCuacaProps) {
  return (
    <View style={styles.container}>
      <View style={styles.statusItem}>
        <Text style={styles.statusLabel}>Temp</Text>
        <Text style={styles.statusValue}>{temp}°</Text>
      </View>

      <View style={styles.statusItem}>
        <Text style={styles.statusLabel}>Wind</Text>
        <Text style={styles.statusValue}>{wind}km/h</Text>
      </View>

      <View style={styles.statusItem}>
        <Text style={styles.statusLabel}>Humidity</Text>
        <Text style={styles.statusValue}>{humidity}%</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginTop: 10,
    width: '100%',
  },
  statusItem: {
    alignItems: 'center',
  },
  statusLabel: {
    color: Colors.putihTransparan,
    fontFamily: 'Lato-Regular',
    fontSize: 15,
    marginBottom: 5,
  },
  statusValue: {
    color: Colors.putih,
    fontFamily: 'Lato-Bold',
    fontSize: 20,
  }
})