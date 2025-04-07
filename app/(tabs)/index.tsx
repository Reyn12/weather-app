import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import Colors from '../../constants/Colors';
import { useRouter } from 'expo-router';
import Header from './components/home/Header';
import SwitchBtn, { Btn } from './components/home/SwitchBtn';
import ImageCuaca from './components/home/ImageCuaca';
import StatusCuaca from './components/home/StatusCuaca';
import Today from './components/home/Today';
import ComingSoon from '../../components/ComingSoon';
import * as Location from 'expo-location';


export default function HomeScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Btn>('forecast');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Nanti Fetch Data disini untuk api weather app nya 
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
  
        // Request permission lokasi
        let { status } = await Location.requestForegroundPermissionsAsync();
  
        if (status !== 'granted') {
          setLoading(false);
          return;
        }
  
        // Dapatkan lokasi user
        const location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Highest
        });
        const { latitude, longitude } = location.coords;
        const apiKey = process.env.EXPO_PUBLIC_WEATHER_API_KEY;
  
        // Pakai geocoding dulu untuk dapat nama kota yang tepat
        const geocodingResponse = await fetch(
          `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${latitude},${longitude}`
        );
        const geocodingData = await geocodingResponse.json();
  
        // Ambil lokasi terdekat dari hasil geocoding
        let locationQuery = `${latitude},${longitude}`;
        if (geocodingData && geocodingData.length > 0) {
          // Gunakan nama kota dari hasil geocoding jika tersedia
          locationQuery = geocodingData[0].name;
        }
  
        // Lalu gunakan query lokasi untuk fetch data cuaca
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${locationQuery}&days=2&aqi=yes&alerts=no`
        );
  
        if (!response.ok) {
          throw new Error('Gagal mengambil data cuaca');
        }
  
        const data = await response.json();
        // Filter data yang penting aja
        const filteredData = {
          location: {
            name: data.location.name,
            country: data.location.country
          },
          current: {
            temp_c: data.current.temp_c,
            condition: data.current.condition,
            humidity: data.current.humidity,
            wind_kph: data.current.wind_kph,
            wind_dir: data.current.wind_dir,
            last_updated: data.current.last_updated
          },
          forecast: data.forecast.forecastday.map((day: { date: any; day: { maxtemp_c: any; mintemp_c: any; condition: any; }; hour: any[]; }) => ({
            date: day.date,
            day: {
              maxtemp_c: day.day.maxtemp_c,
              mintemp_c: day.day.mintemp_c,
              condition: day.day.condition
            },
            // Ambil data per 3 jam aja biar ga kebanyakan
            hour: day.hour.filter((_, index) => index % 3 === 0).map(hour => ({
              time: hour.time,
              temp_c: hour.temp_c,
              condition: hour.condition
            }))
          }))
        };
  
        setWeatherData(filteredData);
  
        // Cek data
        console.log('Filtered Weather Data:', JSON.stringify(filteredData, null, 2));
  
        setLoading(false);
        // console.log('Data cuaca berhasil diambil:', data);
      } catch (err: any) {
        console.error('Error fetching weather data:', err);
        setError(err.message);
        setLoading(false);
      }
    };
  
    fetchWeatherData();
  }, []);


  useEffect(() => {
    // Set status bar ke light mode (teks putih)
    StatusBar.setBarStyle('light-content');

    // Ini penting: kembalikan ke dark mode saat komponen unmount
    return () => {
      StatusBar.setBarStyle('light-content');
    };
  }, []);

  return (
    <LinearGradient colors={[Colors.biruMuda, Colors.primary]} style={styles.container}>
      {/* Lingkaran blur pake BlurView */}
      <View style={styles.blurCircleContainer}>
        <BlurView
          intensity={45}
          style={[styles.blurCircle, { backgroundColor: 'rgba(22, 31, 4, 0.3)' }]}
          tint="light"
        />
      </View>

      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <SwitchBtn activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Conditional rendering berdasarkan activeTab */}
        {activeTab === 'forecast' ? (
          // UI Forecast
          <>
            <ImageCuaca />
            <StatusCuaca />
            <Today />
          </>
        ) : (
          // UI Air Quality
          <ComingSoon />
        )}
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