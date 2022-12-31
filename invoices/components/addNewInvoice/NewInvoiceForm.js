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
  const handleFormSubmit = (values, actions) => {
    console.log(values);
    actions.setFieldValue('status', 'Paid');

    actions.resetForm();
  };
  return (
    <ScrollView>
      <Formik
        initialValues={newInvoiceInitialValues}
        onSubmit={(values, actions) => handleFormSubmit(values, actions)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          setFieldValue,
          ...props
        }) => {
          // console.log(props);
          return (
            <View style={styles.container}>
              <Text style={styles.billFromText}>Bill From</Text>
              <Address
                values={values.senderAddress}
                name="senderAddress"
                handleChange={handleChange}
              />

              {/*  <BillTo values={values} handleChange={handleChange} /> */}
              <InputDate
                values={values.createdAt}
                setFieldValue={setFieldValue}
              />
              <InputSelect
                setFieldValue={setFieldValue}
                isSubmitting={props.isSubmitting}
                values={values.paymentTerms}
              />
              <CustomInput
                values={values.description}
                placeholder="Project Description"
                label="Project Description"
                handleChange={handleChange}
                name="description"
              />
              <Button onPress={handleSubmit} type="submit">
                Submit
              </Button>
            </View>
          );
        }}
      </Formik>
    </ScrollView>
  );
};

/* const handleSelect = () => {
  if (selectedIndex === 0) {
    setFieldValue('paymentTerms', 1);
  } else if (selectedIndex === 1) {
    setFieldValue('paymentTerms', );
  } else if (selectedIndex === 2) {
    setFieldValue('paymentTerms', 1);
  } else if (selectedIndex === 3) {
    setFieldValue('paymentTerms', 1);
  }
}; */
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
