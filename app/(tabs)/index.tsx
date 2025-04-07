import React, { useEffect } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import Colors from '../../constants/Colors';
import { useRouter } from 'expo-router';
import Header from './components/home/Header';
import SwitchBtn from './components/home/SwitchBtn';
import ImageCuaca from './components/home/ImageCuaca';
import StatusCuaca from './components/home/StatusCuaca';

export default function HomeScreen() {
  const router = useRouter();

  useEffect(() => {
    // Set status bar ke light mode (teks putih)
    StatusBar.setBarStyle('light-content');

    // Ini penting: kembalikan ke dark mode saat komponen unmount
    return () => {
      StatusBar.setBarStyle('light-content');
    };
  }, []);

  return (
    <LinearGradient
      colors={[Colors.biruMuda, Colors.primary]}
      style={styles.container}
    >
      {/* Lingkaran blur pake BlurView */}
      <View style={styles.blurCircleContainer}>
        <BlurView
          intensity={45}
          style={[styles.blurCircle, { backgroundColor: 'rgba(22, 31, 4, 0.3)' }]}
          tint="light"
        />
      </View>

      {/* Main Content */}
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <SwitchBtn />
        <ImageCuaca kode={1000} isDay={true} />
        <StatusCuaca />
        </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    position: 'relative',
  },
  blurCircleContainer: {
    position: 'absolute',
    width: 200,
    height: 200,
    top: -80,
    right: -75,
    borderRadius: 100,
    overflow: 'hidden', // Penting buat BlurView
    zIndex: 0,
  },
  blurCircle: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  }
});