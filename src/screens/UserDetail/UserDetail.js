import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/profile.png';
import icon1 from '../../../assets/logo/mortarboard.png';
import icon2 from '../../../assets/logo/trophy.png';
import file from '../../../assets/logo/document.png';
import arrow from '../../../assets/logo/right-arrow.png';
import financial from '../../../assets/logo/financial-statement.png';
import schedule from '../../../assets/logo/schedule.png';
import password from '../../../assets/logo/password-code.png';
import logout from '../../../assets/logo/logout.png';


const UserDetails = () => {

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Image source={Logo} style={styles.img} resizeMode="contain" />
        <Text style={styles.name}>Heba Maher Alamassi</Text>
        <Text style={styles.collage}>
          Collage of Engineering and Urbain Plan
        </Text>
        <View style={styles.flex}>
          <View style={styles.flex}>
            <Text style={styles.text}>4</Text>
            <Image source={icon1} style={styles.icon1} />
          </View>
          <View style={styles.flex}>
            <Text style={styles.text}>87.31</Text>
            <Image source={icon2} style={styles.icon1} />
          </View>
        </View>
      </View>

      <View style={styles.cont}>
        <View style={styles.row}>
          <View style={styles.imageText}>
            <Image source={file} />
            <Text style={styles.conText}>Marks</Text>
          </View>
          <Image source={arrow} />
        </View>
        <View style={styles.row}>
          <View style={styles.imageText}>
            <Image source={financial} />
            <Text style={styles.conText}>Financial data</Text>
          </View>
          <Image source={arrow} />
        </View>
        <View style={styles.row}>
          <View style={styles.imageText}>
            <Image source={icon1} />
            <Text style={styles.conText}>Academic data</Text>
          </View>
          <Image source={arrow} />
        </View>
        <View style={styles.row}>
          <View style={styles.imageText}>
            <Image source={schedule} />
            <Text style={styles.conText}>Daily Schedule</Text>
          </View>
          <Image source={arrow} />
        </View>
        <View style={styles.row}>
          <View style={styles.imageText}>
            <Image source={password} />
            <Text style={styles.conText}>change password</Text>
          </View>
          <Image source={arrow} />
        </View>
        <View style={styles.row}>
          <View style={styles.imageText}>
            <Image source={logout} />
            <Text style={styles.conText}>logout</Text>
          </View>
          <Image source={arrow} />
        </View>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
  },
  container: {
    paddingVertical: 30,
    alignItems: 'center',
    height: 270,
    backgroundColor: '#f9f9fc',
  },
  cont: {
    padding: 30,
  },
  img: {
    width: 120,
    height: 120,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 8,
  },
  collage: {
    paddingBottom: 15,
  },
  text: {
    color: '#000',
    marginRight: 10,
  },
  icon1: {},
  flex: {
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container1: {
    marginLeft: 20,
  },
  imageText: {
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  conText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
  },
  list: {
    backgroundColor: '#fff',
    color: '#000',
  },
});

export default UserDetails;
