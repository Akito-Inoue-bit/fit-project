/**
 * SynicFit Health App
 * Health Connect Integration
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, SafeAreaView } from 'react-native';
import HealthConnectScreen from './src/components/HealthConnectScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        barStyle={isDarkMode ? 'light-content' : 'dark-content'} 
        backgroundColor={isDarkMode ? '#000' : '#fff'}
      />
      <HealthConnectScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
