import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {CheckBox, Card, Layout, Popover, Text} from '@ui-kitten/components';

const HomeScreenNavModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const renderTogglePopover = () => {
    return (
      <Text style={styles.text} onPress={() => setIsVisible(true)}>
        Filter
      </Text>
    );
  };
  return (
    <Popover
      visible={isVisible}
      style={styles.popover}
      anchor={renderTogglePopover}
      onBackdropPress={() => setIsVisible(false)}>
      <Layout style={styles.content}>
        <Card style={styles.card} disabled={true}>
          <CheckBox style={styles.checkbox} status="primary">
            Pending
          </CheckBox>
          <CheckBox style={styles.checkbox} status="success">
            Paid
          </CheckBox>
          <CheckBox style={styles.checkbox} status="info">
            Draft
          </CheckBox>
        </Card>
      </Layout>
    </Popover>
  );
};
const styles = StyleSheet.create({
  popover: {
    marginBottom: 100,
  },
});

export default HomeScreenNavModal;
