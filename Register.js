import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, Alert } from 'react-native';
import axios from 'axios';

export default function Register({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerStatus, setRegisterStatus] = useState(false); 
  const [showWarning, setShowWarning] = useState(false); 

  const handleRegister = async () => {
    if (name === '' || email === '' || password === '') {
      setShowWarning(true);
      setRegisterStatus(false);
      return;
    }

    try {
      const response = await axios.post('http://192.168.1.8:3000/users/register', {
        name,
        email,
        password
      });

      // Show alert when the registration is successful
      if (response.status === 200) {
        Alert.alert(`Welcome aboard, ${name}!`);
        setRegisterStatus(true);
        setShowWarning(false);
      }
    } catch (error) {
      // Show alert when there's an error during registration
      Alert.alert("An error has occurred: " + error);
      setRegisterStatus(false);
      setShowWarning(false);
    }
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
    <Image source={require('./assets/jobhunt-logo.png')} style={styles.logo} /> 
    <TextInput
        style={styles.input}
        placeholder="Enter Name"
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.switchButton} onPress={navigateToLogin}>
        <Text style={styles.switchButtonText}>Already have an account? Login here</Text>
      </TouchableOpacity>

      {showWarning && (
        <Text style={styles.warningMessage}>
          {name === '' && email === '' && password === ''
            ? 'Please enter your name, email, and password.'
            : name === '' 
            ? 'Please enter your name.'
            : email === ''
            ? 'Please enter your email.'
            : password === ''
            ? 'Please enter your password.'
            : ''}
        </Text>
      )}
      {registerStatus && <Text style={styles.registerMessage}>Registration Successful!</Text>}
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
  registerMessage: {
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
