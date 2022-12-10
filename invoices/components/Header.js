import {View, Text, Image, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Image
        style={styles.avatar}
        source={require('../assets/image-avatar.jpg')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 15,
  },
  logo: {height: 40},
  avatar: {height: 40, width: 40, borderRadius: 50},
});

export default Header;
