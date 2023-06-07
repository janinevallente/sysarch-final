import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Image } from 'react-native';

export default function HomePage({ navigation }) {
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./assets/jobhunt-logo.png')} style={styles.logo} /> 
        <Text style={styles.logoText}>Welcome to JobHunt!</Text>
        <Text>Where opportunities find you.</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={navigateToLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={navigateToRegister}>
        <Text style={[styles.buttonText, styles.registerButtonText]}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#E5F5FF',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: -160,
  },
  logoContainer: {
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 32,
  },
  logo: {
  width: 200,
  height: 200,
  resizeMode: 'contain',
  },
  logoText: {
  fontSize: 40,
  fontWeight: 'bold',
  color: '#333',
  },
  tagline: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#666',
  marginTop: 8,
  },
  button: {
  backgroundColor: '#0077B6',
  borderRadius: 24,
  paddingVertical: 12,
  paddingHorizontal: 32,
  marginVertical: 8,
  width: 200,
  },
  buttonText: {
  textAlign: 'center',
  color: '#FFF',
  fontWeight: 'bold',
  fontSize: 16,
  },
  registerButton: {
  backgroundColor: '#3D8B37',
  },
  registerButtonText: {
  color: '#FFF',
  },
});
