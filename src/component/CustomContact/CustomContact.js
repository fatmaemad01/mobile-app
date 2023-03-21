import React  from 'react';
import {View , Text , StyleSheet , Image} from 'react-native';
import CustomButton from '../CustomButton/CustomButton';

const CustomContact = ({text , icon }) =>{
    return(
        <View style={styles.row}>
        <View style={styles.imageText}>
            <Text style={styles.conText}>{text}</Text>
            <Image source={icon} style={styles.icon} />
            <CustomButton text="Sent" type="SECONDARY"/>
        </View>
        </View>
    );}

    const styles = StyleSheet.create({
        imageText: {
            flexDirection: 'row',
          },
          row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            textAlign:'left',
          },
          
          conText: {
            marginTop:10,
            fontSize: 16,
            color: '#000',
            marginRight:0,
        },
        icon:{
            marginTop:10,
            marginLeft:170,
        },
    });

    export default CustomContact;

