import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: '/componenrt' }}
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Please sign in to continue</Text>
      <View style={styles.inputContainer}>
        <Icon name="phone" size={20} color="#fff" />
        <TextInput placeholder="Enter Number" placeholderTextColor="#fff" style={styles.input} keyboardType="phone-pad" />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#fff" />
        <TextInput placeholder="Enter Password" placeholderTextColor="#fff" style={styles.input} secureTextEntry />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signupText}>Don't have an account? <Text style={styles.signupLink}>Sign up</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2b4c',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '100%',
  },
  input: {
    flex: 1,
    color: '#fff',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#00e6ac',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    color: '#aaa',
  },
  signupLink: {
    color: '#00e6ac',
  },
});

export default LoginScreen;
