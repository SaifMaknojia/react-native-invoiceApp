import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {Text, Input, Button, CheckBox} from '@ui-kitten/components';
import React from 'react';
const {height} = Dimensions.get('window');
const SignIn = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text} category="h2">
          Welcome Back!
        </Text>
      </View>
      <View style={{marginTop: 10}}>
        <Input
          style={styles.input}
          size="large"
          placeholder="Enter Your Email"
        />
        <Input
          size="large"
          style={styles.input}
          placeholder="Enter Your Password"
        />
        <View style={styles.checkboxContainer}>
          <CheckBox style={styles.checkbox} status="primary">
            <Text style={{fontSize: 3}}> Remember Me</Text>
          </CheckBox>
          <TouchableOpacity>
            <Text style={styles.textColor} category="c1">
              Forgot Your Password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button
        onPress={() => console.log('button was clicked')}
        style={styles.button}>
        Sign In
      </Button>
      <View
        style={[
          styles.checkbox,
          styles.checkboxContainer,
          {flexDirection: 'row'},
        ]}>
        <Text category="c1">Don't Have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.textColor} category="c1">
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    paddingBottom: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#252945',
    color: '#dfe3fa',
    borderRadius: 20,
    padding: 10,
    borderColor: 'transparent',
  },
  checkbox: {
    paddingHorizontal: 20,
    fontSize: 5,
  },
  textColor: {
    color: '#7e88c3',
  },
  checkboxContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
});

export default SignIn;
