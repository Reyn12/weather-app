// components/home/ImageCuaca.tsx
import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { getIkonCuaca } from '../../../../constants/WeatherUtils'

type ImageCuacaProps = {
  kode?: number;
  isDay?: boolean;
  size?: number;
}

export default function ImageCuaca({ kode = 1000, isDay = true, size = 350 }: ImageCuacaProps) {
  return (
    <View style={styles.container}>
      <Image 
        source={getIkonCuaca(kode, isDay)} 
        style={[styles.image, { width: size, height: size }]} 
        resizeMode="cover"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  image: {
    width: 300,
    height: 300,
  }
})