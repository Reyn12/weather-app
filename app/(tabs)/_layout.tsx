import { Home, Search, BarChart, Settings } from 'lucide-react-native';
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
          <Home 
            size={28} 
            color={isActive('/') ? '#fff' : 'rgba(255,255,255,0.6)'} 
          />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.tabItem} 
          onPress={() => router.push('/search')}
        >
          <Search 
            size={28} 
            color={isActive('/search') ? '#fff' : 'rgba(255,255,255,0.6)'} 
          />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.tabItem} 
          onPress={() => router.push('/report')}
        >
          <BarChart 
            size={28} 
            color={isActive('/report') ? '#fff' : 'rgba(255,255,255,0.6)'} 
          />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.tabItem} 
          onPress={() => router.push('/setting')}
        >
          <Settings 
            size={28} 
            color={isActive('/setting') ? '#fff' : 'rgba(255,255,255,0.6)'} 
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