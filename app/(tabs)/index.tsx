import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../constants/Colors';
import { useRouter } from 'expo-router';
import Header from './components/home/Header';

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
      <SafeAreaView style={{ flex: 1 }}>
        <Header />

      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  }
});