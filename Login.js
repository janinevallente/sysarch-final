import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, Alert } from 'react-native';
import axios from 'axios';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  /*const handleLogin = () => {
    if (email === '' || password === '') {
      setShowWarning(true);
      setLoginStatus(false);
      return;
    }

    setLoginStatus(true);
    setShowWarning(false);
  };*/

  /*const handleLogin = async () => {
    if (email === '' || password === '') {
      setShowWarning(true);
      setLoginStatus(false);
      return;
    }

    try {
      const response = await axios.get('http://192.168.1.8:3000/users/login', {
        params: {
          email,
          password
        }
      });

      // Show alert when the login is successful
      Alert.alert(`Welcome back, ${response.data.name}`);
      setLoginStatus(true);
      setShowWarning(false);
    } catch (error) {
      // Show alert when the login fails
      Alert.alert("User not found, please register.");
      console.log(error);
      setLoginStatus(false);
      setShowWarning(false);
    }
  };*/
  const handleLogin = async () => {
    if (email === '' || password === '') {
      setShowWarning(true);
      setLoginStatus(false);
      return;
    }
  
    try {
      const response = await axios.get('http://192.168.1.8:3000/users/login', {
        email,
        password,
      });
  
      if (response.status === 200) {
        // Show alert when the login is successful
        Alert.alert(`Welcome back, ${response.data.name}`);
        setLoginStatus(true);
        setShowWarning(false);
      } else {
        // Show alert when the login fails
        Alert.alert("User not found, please register.");
        setLoginStatus(false);
        setShowWarning(false);
      }
    } catch (error) {
      // Show alert when there's an error during the request
      //console.error(error);
      Alert.alert("An error occurred during login."+error);
      setLoginStatus(false);
      setShowWarning(false);
    }
  };

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  useEffect(() => {
    if (loginStatus) {
      navigation.navigate('JobListing');
    }
  }, [loginStatus, navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/jobhunt-logo.png')} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.switchButton} onPress={navigateToRegister}>
        <Text style={styles.switchButtonText}>Don't have an account? Register here</Text>
      </TouchableOpacity>

      {showWarning && (
        <Text style={styles.warningMessage}>
          {email === '' && password === ''
            ? 'Please enter your email and password.'
            : email === ''
            ? 'Please enter your email.'
            : password === ''
            ? 'Please enter your password.'
            : ''}
        </Text>
      )}
      {loginStatus && <Text style={styles.loginMessage}>Login Successful!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#E5F5FF',
    marginTop: -180,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 16,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ADD8E6',
    borderRadius: 4,
    backgroundColor: '#FFF',
    color: '#333',
  },
  button: {
    width: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 4,
    paddingVertical: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  switchButton: {
    marginTop: 16,
  },
  switchButtonText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  loginMessage: {
    marginTop: 16,
    color: '#4BA93B',
    fontWeight: 'bold',
  },
  warningMessage: {
    marginTop: 16,
    color: '#F44336',
    fontWeight: 'bold',
  },
});
