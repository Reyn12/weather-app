import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

export default function ComingSoon() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.3)']}
        style={styles.gradientBox}
      >
        <Text style={styles.comingSoonText}>🌬️ Coming Soon! 🌬️</Text>
        <Text style={styles.comingSoonSubtext}>
          Fitur kualitas udara lagi dibikin nih, sabar ya!
        </Text>
        <View style={styles.comingSoonLine} />
        <Text style={styles.comingSoonEmoji}>🏗️👷‍♀️🚧</Text>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  gradientBox: {
    width: '100%',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  comingSoonText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  comingSoonSubtext: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginBottom: 20,
  },
  comingSoonLine: {
    width: '50%',
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginBottom: 20,
  },
  comingSoonEmoji: {
    fontSize: 40,
    marginTop: 10,
  }
})