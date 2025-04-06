import { Stack } from 'expo-router/stack';
import { StatusBar as RNStatusBar } from 'react-native';
import { useEffect } from 'react';
import { AppState } from 'react-native';

export default function Layout() {
  useEffect(() => {
    // Set status bar ke dark mode (teks hitam)
    RNStatusBar.setBarStyle('dark-content');
    
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState === 'active') {
        // Ini akan dipanggil saat app kembali aktif
        RNStatusBar.setBarStyle('dark-content');
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}