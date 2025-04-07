import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../../constants/Colors';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bandung City</Text>
      <Text style={styles.subTitle}>April 07, 2025</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    marginTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.putih,
    fontFamily: 'Lato-Bold',
    letterSpacing: 1,
  },
  subTitle: {
    fontSize: 16,
    color: Colors.putihTransparan,
    fontFamily: 'Lato-Regular',
  },
})