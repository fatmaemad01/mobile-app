import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import CustomButton from '../../component/CustomButton/CustomButton';
import CustomInput from '../../component/Custominput/Custominput';
import fax from '../../../assets/images/fax.png';
import gmail from '../../../assets/images/gmail.png';
import phone from '../../../assets/images/phone.png';
import CustomContact from '../../component/CustomContact/CustomContact';

const ContactUS = () => {
  const onSentPressed = () => {
    console.warn('Message Send Successfully');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}> Contact Us</Text>
        <Text style={styles.text}>Name</Text>
        <CustomInput placeholder="Enter Your Name" />
        <Text style={styles.text}>Address</Text>
        <CustomInput placeholder="Enter Your Address" />
        <Text style={styles.text}>Message</Text>
        <CustomInput
          placeholder="Write Your Message Here ..."
          type="TERTIARY"
        />
        <CustomButton
          text=" Sent "
          onPress={onSentPressed}
          style={styles.btn}
        />
        <CustomContact text="FaxN" icon={fax} />
        <CustomContact text="Gmail" icon={gmail} />
        <CustomContact text="Phone" icon={phone} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 30,
    borderColor: '#e8e8e8',
  },
  title: {
    padding: 40,
    fontSize: 22,
    fontWeight: 'bold',
  },
  text: {
    width: '95%',
    fontWeight: 'bold',
    paddingBottom: 8,
  },
  btn: {
    marginBottom: 10,
  },
});

export default ContactUS;
