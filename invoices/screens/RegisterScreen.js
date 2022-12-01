import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text, Input, Button, CheckBox, Icon} from '@ui-kitten/components';

const {height} = Dimensions.get('window');

const RegisterScreen = () => {
  const [isRememberMe, setRememberMe] = useState(false);
  const [passwordEntryIcon, setPasswordEntryIcon] = React.useState(true);
  const [confirmPasswordEntryIcon, setConfirmPasswordEntryIcon] =
    React.useState(true);
  console.log(isRememberMe);
  const handlePasswordIcon = props => (
    <TouchableWithoutFeedback
      onPress={() => setPasswordEntryIcon(!passwordEntryIcon)}>
      <Icon {...props} name={passwordEntryIcon ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const handleConfirmPasswordIcon = props => (
    <TouchableWithoutFeedback
      onPress={() => setConfirmPasswordEntryIcon(!confirmPasswordEntryIcon)}>
      <Icon {...props} name={confirmPasswordEntryIcon ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const handleCheckbox = () => {
    setRememberMe(!isRememberMe);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text} category="h2">
          Lets Get Started!
        </Text>
      </View>
      <View style={{marginTop: 10}}>
        <Input
          style={styles.input}
          size="large"
          placeholder="Enter Your Email"
          accessoryRight={<Icon name="email-outline" />}
        />
        <Input
          style={styles.input}
          size="large"
          placeholder="Enter Your Password"
          accessoryRight={handlePasswordIcon}
          secureTextEntry={passwordEntryIcon}
          onChangeText={() => console.log('password')}
        />
        <Input
          style={styles.input}
          size="large"
          placeholder="Enter Your Password"
          accessoryRight={handleConfirmPasswordIcon}
          secureTextEntry={confirmPasswordEntryIcon}
          onChangeText={() => console.log('password')}
        />
        <View style={styles.checkboxContainer}>
          <CheckBox
            checked={isRememberMe}
            onChange={handleCheckbox}
            style={styles.checkbox}
            status="primary">
            <Text style={{fontSize: 3}}> I agree to Terms and Conditions</Text>
          </CheckBox>
          <TouchableOpacity>
            <Text style={styles.textColor} category="c1"></Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button
        onPress={() => console.log('button was clicked')}
        style={styles.button}>
        Register
      </Button>
      <View
        style={[
          styles.checkbox,
          styles.checkboxContainer,
          {flexDirection: 'row'},
        ]}>
        <Text category="c1">Already Have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.textColor} category="c1">
            Sign In
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

export default RegisterScreen;
