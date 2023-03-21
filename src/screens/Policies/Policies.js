import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../../component/CustomButton/CustomButton';
import HomePage from '../HomePage/HomePage';

const Policies = props => {
  const {navigation} = props;

  return (
    <View style={styles.root}>
      <Text style={styles.head}>Privacy policies and terms of use</Text>
      <Text style={styles.text}>
        We don't charge you to use Facebook or other products and services
        covered by these Terms, unless we say otherwise. Instead, businesses,
        organizations and other people pay us a fee to show you ads for their
        products and services. By using our Products, you agree that we can show
        you advertisements that we think may be relevant to you and your
        interests. We use your personal data to help us determine which
        personalized ads to show you.
      </Text>
      <Text style={styles.text}>
        {' '}
        Our Privacy Policy explains how we collect and use your personal data to
        determine some of the advertisements you see and to provide all of the
        other services described below. You can also go to the settings pages of
        the appropriate Meta product at any time to review the privacy choices
        available to you regarding how we use your data.
      </Text>
      <CustomButton
        onPress={() => navigation.navigate(HomePage)}
        text="Agree"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    color: 'black',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 19,
    fontFamily: 'cairo',
  },

  text: {
    fontFamily: 'cairo',
    fontWeight: '500',
    direction: 'rtl',
    textAlign: 'justify',
    marginTop: 15,
    fontSize: 16,
    marginBottom: 15,
  },

  root: {
    padding: 20,
  },
});

export default Policies;
