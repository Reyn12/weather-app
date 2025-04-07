import { Stack } from 'expo-router/stack';
import { StatusBar as RNStatusBar } from 'react-native';
import { useEffect } from 'react';
import { AppState } from 'react-native';
import { useFonts } from 'expo-font';

export default function Layout() {
  const [loaded] = useFonts({
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('../assets/fonts/Lato-Light.ttf'),
    'Lato-Italic': require('../assets/fonts/Lato-Italic.ttf'),
    'Lato-Black': require('../assets/fonts/Lato-Black.ttf'),
  });

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

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}