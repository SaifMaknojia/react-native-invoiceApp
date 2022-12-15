import {View, Text, TouchableOpacity} from 'react-native';
import {Card} from '@ui-kitten/components';
import React from 'react';
import {useSelector} from 'react-redux';

const HomeScreenInvoiceCard = ({navigation}) => {
  const {invoices} = useSelector(state => state.allUserInvoices.invoice);

  return (
    <View style={{margin: 20}}>
      {invoices?.map(invoice => (
        <TouchableOpacity key={invoice._id} style={{borderColor: 'red'}}>
          <Card
            onPress={() =>
              navigation.navigate('InvoiceDetailScreen', {id: invoice._id})
            }
            style={{
              height: 134,
              marginTop: 10,
              borderRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
              <Text>{invoice.invoiceNumber}</Text>
              <Text>{invoice.clientName}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text style={{marginVertical: 10}}>
                  Due {invoice.paymentDue}
                </Text>
                <Text>$ {invoice.total}</Text>
              </View>
              <Text>{invoice.status}</Text>
            </View>
          </Card>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default HomeScreenInvoiceCard;
