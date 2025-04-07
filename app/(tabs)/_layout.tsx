import { House, Search, Settings, ChartArea } from 'lucide-react-native';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Slot, useRouter, usePathname } from 'expo-router';
import Colors from '../../constants/Colors';

export default function TabLayout() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path || pathname === `/${path}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Slot />
      </View>
      
      <View style={styles.tabBar}>
        <TouchableOpacity 
          style={styles.tabItem} 
          onPress={() => router.push('/')}
        >
          <House 
            size={28} 
            color={isActive('/') ? Colors.putih : Colors.putihTransparan} 
            fill={isActive('/') ? Colors.putih : 'transparent'} 
          />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.tabItem} 
          onPress={() => router.push('/search')}
        >
          <Search 
            size={28} 
            color={isActive('/search') ? Colors.putih : Colors.putihTransparan} 
            fill={isActive('/search') ? Colors.putih : 'transparent'} 
          />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.tabItem} 
          onPress={() => router.push('/report')}
        >
          <ChartArea 
            size={28} 
            color={isActive('/report') ? Colors.putih : Colors.putihTransparan} 
            />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.tabItem} 
          onPress={() => router.push('/setting')}
        >
          <Settings 
            size={28} 
            color={isActive('/setting') ? Colors.putih : Colors.putihTransparan} 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    height: 90,
    justifyContent: 'space-around',
    paddingBottom: 15,
    alignItems: 'center',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});