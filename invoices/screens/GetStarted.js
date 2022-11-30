import {
  Dimensions,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Text} from '@ui-kitten/components';
import React from 'react';
import Svg, {Use} from 'react-native-svg';
const {height} = Dimensions.get('window');
const GetStarted = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text} category="h2">
          Lets Get Started
        </Text>

        <View styles={styles.buttonGroup}>
          <TouchableOpacity>
            <Text style={styles.clickMe} category="h4">
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.clickMe} category="h4">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    paddingBottom: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#252945',
  },
  text: {
    color: '#dfe3fa',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  clickMe: {
    color: '#dfe3fa',
    marginTop: 10,
    alignSelf: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
  },
});

export default GetStarted;
