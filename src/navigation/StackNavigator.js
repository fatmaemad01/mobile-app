import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SigninScreen from '../screens/SigninScreen/SigninScreen';
import HomePage from '../screens/HomePage/HomePage';
import Policies from '../screens/Policies/Policies';
import DrawerNavigator from './DrawerNavigation';
import ContactUS from '../screens/ContactUs/ContactUs';
import ForgetPassword from '../screens/ForgetPassword/ForgetPassword';
import UserDetail from '../screens/UserDetail/UserDetail';
import CourseDetail from '../screens/CourseDetail/CourseDetail';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={HomePage}>
      <Stack.Screen name="Signin" component={SigninScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="Policies" component={Policies} />
      <Stack.Screen name="HomePage" component={DrawerNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="UserDetail" component={UserDetail}  options={{ headerShown: false }} />
      <Stack.Screen name="CourceDetail" component={CourseDetail} options={{ headerShown: false }} />
      <Stack.Screen name="ContactUs" component={ContactUS} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default StackNavigator;