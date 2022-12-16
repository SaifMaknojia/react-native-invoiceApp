import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import Address from './Address';
import BillTo from './BillTo';
import InputDate from './InputDate';
import InputSelect from './InputSelect';
import CustomInput from './CustomInput';
import {newInvoiceInitialValues} from '../../utils/initialValues';
import {Button} from '@ui-kitten/components';

const NewInvoiceForm = () => {
  return (
    <ScrollView>
      <Formik
        initialValues={newInvoiceInitialValues}
        onSubmit={(values, actions) => {
          console.log({values, actions});
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View style={styles.container}>
            <Text style={styles.billFromText}>Bill From</Text>
            <Address name="senderAddress" handleChange={handleChange} />

            <BillTo values={values} handleChange={handleChange} />
            <InputDate />
            <InputSelect />
            <CustomInput
              placeholder="Project Description"
              label="Project Description"
              handleChange={handleChange}
              name="description"
            />
            <Button type="submit">Submit</Button>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  navContainer: {
    backgroundColor: '#fff',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 20,
  },
  billFromText: {
    marginVertical: 15,
  },
});

export default NewInvoiceForm;
