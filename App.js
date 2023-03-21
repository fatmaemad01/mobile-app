import React from "react";
import { SafeAreaView, Text, StyleSheet, TextInput, View } from 'react-native';
import Policies from "./src/screens/Policies/Policies";
import SignInScreen from "./src/screens/SigninScreen/SigninScreen";
import HomePage from "./src/screens/HomePage/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";
import DrawerNavigator from "./src/navigation/DrawerNavigation";
import ForgetPass from "./src/screens/ForgetPassword/ForgetPassword";
import ContactUS from "./src/screens/ContactUs/ContactUs";
import CourseDetail from "./src/screens/CourseDetail/CourseDetail";
import UserDetail from "./src/screens/UserDetail/UserDetail";

const App = () => {
  return (
    <NavigationContainer>
      
<StackNavigator/>

    </NavigationContainer>

)
};
  

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
















// export default class App extends React.Component{

//   render(){
//     return (
//       <View>
//         {<SignInScreen/> }
//       </View>

//     )
//   }
// }