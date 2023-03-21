import React from 'react';
import {StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from '../screens/HomePage/HomePage';
import Policies from '../screens/Policies/Policies';
import SignInScreen from '../screens/SigninScreen/SigninScreen';
import CourseDetail from '../screens/CourseDetail/CourseDetail';
import UserDetail from '../screens/UserDetail/UserDetail';
import ContactUS from '../screens/ContactUs/ContactUs';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  return (

    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomePage} options={{ headerShown: false }}/>
      <Drawer.Screen name="Policies" component={Policies} options={{ headerShown: false }}/>  
      <Drawer.Screen name="CourseDetail" component={CourseDetail} options={{ headerShown: false }}/>  
      <Drawer.Screen name="Profile" component={UserDetail} options={{ headerShown: false }}/>  
      <Drawer.Screen name="ContactUs" component={ContactUS} options={{ headerShown: false }}/>  
      <Drawer.Screen name="Log Out" component={SignInScreen} options={{ headerShown: false }} />
    </Drawer.Navigator>

  );
};

export default DrawerNavigator;    
