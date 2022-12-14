import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Card, Text} from '@ui-kitten/components';
import {color} from '../../utils/Colors';

const InvoiceDetailButton = () => {
  return (
    <Card activeOpacity={0.0} style={styles.card}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <View style={styles.buttonEdit}>
            <Text style={styles.textWhite}>Edit</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonDelete}>
            <Text style={styles.textWhite}>Delete</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonPaid}>
            <Text style={styles.textWhite}>Mark as Paid</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  card: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  buttonDelete: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: '#ec5757',
    borderRadius: 25,
  },
  buttonEdit: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: '#7c5dfa',
    borderRadius: 25,
  },
  buttonPaid: {
    backgroundColor: color.fontBlue,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  textWhite: {
    color: '#fff',
    fontWeight: '700',
  },
});

export default InvoiceDetailButton;
