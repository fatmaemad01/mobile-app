import React ,{useState} from 'react';
import {View , Text , Image , StyleSheet , useWindowDimensions , SafeAreaView} from 'react-native';
import logo from '../../../assets/images/logo.png';
import CustomButton from '../../component/CustomButton/CustomButton';
import CustomInput from '../../component/Custominput/Custominput';

const ForgetPassword = () => {
    const [email , enterEmail] = useState('');
    const {height} = useWindowDimensions();

    return (
        <View style={styles.root}>
            <Image
              source={logo}
              style={[StyleSheet.up , {height: height*0.2}]}
              resizeMode="contain" 
            />

                <Text style={styles.title}>Reset Password</Text>
                <Text style={styles.text}>Enter your email so that a password recovery link will be sent to you.</Text>
                <Text style={styles.email}>Your Email: </Text>
                <CustomInput 
                placeholder="Email"
                value={email}
                setValue={enterEmail}
                />
                <CustomButton text="Reset Password"/>

        </View>
        
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30,
        borderColor: '#e8e8e8',

    },
    up: {
       width: '70%',
       maxWidth: 300,
       maxHeight: 200, 
    },
    title: {

        padding:30,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    text: {
        width:'100%',
        textAlign: 'center',
        fontSize: 16,
        paddingBottom: 25,

    },
    email: {
        width: '100%',
        fontSize:16,
        fontWeight:'bold',
        paddingBottom:5,

    }
});

export default ForgetPassword;