import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import logo from '../../../assets/images/logo.png';
import CustomInput from '../../component/Custominput/Custominput';
import CustomButton from '../../component/CustomButton/CustomButton';
import Policies from '../Policies/Policies';
import ForgetPass from '../ForgetPassword/ForgetPassword';

const SignInScreen = props => {
  const {username, setUsername} = useState('');
  const {password, setPassword} = useState('');

  const {height} = useWindowDimensions();

  const {navigation} = props;

  return (
    <View style={styles.root}>
      <Image
        source={logo}
        style={[styles.logo, {height: height * 0.2}]}
        resizeMode="contain"
      />

      <Text style={styles.txt}>Login</Text>

      <Text style={styles.text}>username</Text>
      <CustomInput
        placeholder="university ID"
        value={username}
        setValue={setUsername}
      />

      <Text style={styles.text}>password</Text>
      <CustomInput
        placeholder="************"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />

      <CustomButton
        onPress={() => navigation.navigate(Policies)}
        text="Sign In"
      />
      <CustomButton
        text="Forget password?"
        onPress={() => navigation.navigate(ForgetPass)}
        type="TERTIARY"
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    paddingVertical: 60,
  },

  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },

  txt: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
  },
  text: {
    paddingBottom: 5,
    paddingLeft: 10,
    fontSize: 16,
    width: '100%',
    fontWeight: 'bold',
  },
});



export default SignInScreen;
