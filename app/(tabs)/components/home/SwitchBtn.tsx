// components/home/SwitchTabs.tsx
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../../../constants/Colors'

type Btn = 'forecast' | 'air-quality'

export default function SwitchBtn() {
  const [activeTab, setActiveTab] = useState<Btn>('forecast')

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.btn, activeTab === 'forecast' && styles.activeBtn]} 
        onPress={() => setActiveTab('forecast')}
      >
        <Text style={[styles.btnText, activeTab === 'forecast' && styles.activeBtnText]}>Forecast</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.btn, activeTab === 'air-quality' && styles.activeBtn]} 
        onPress={() => setActiveTab('air-quality')}
      >
        <Text style={[styles.btnText, activeTab === 'air-quality' && styles.activeBtnText]}>Air quality</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      borderRadius: 25,
      padding: 4,
      marginTop: 40,
      alignSelf: 'center',
    },
    btn: {
      paddingVertical: 10,
      paddingHorizontal: 18,
      borderRadius: 20,
    },
    activeBtn: {
      backgroundColor: Colors.biruMuda,
    },
    btnText: {
      color: Colors.putihTransparan,
      fontFamily: 'Lato-Regular',
      fontSize: 16,
    },
    activeBtnText: {
      color: Colors.putih,
      fontWeight: '500',
    }
  });