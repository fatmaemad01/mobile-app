import React from 'react'
import { Text, StyleSheet , Pressable } from 'react-native'

const CustomButton = ({onPress , text , type="PRIMARY"}) => {
    return (
        <Pressable onPress={onPress} style={[styles.container , styles[`container_${type}`] ]}>
            <Text style={[styles.text , styles[`text_${type}`] ]}>{text}</Text>
        </Pressable>
    );
};


const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY:{
        backgroundColor: '#7965d7',
        borderRadius:5,
    },
    
    container_TERTIARY:{
        
    },
    container_SECONDARY:{
        backgroundColor:'#7965d7',
        // height: 55,
        width:58,
        // borderRadius: 10,
        // textAlign:'center',
        marginLeft: 15,
        // paddingTop:23,
        // borderBottomWidth:1,
        // borderBottomColor: '#7965d7',
        
        },

    text: {
        fontWeight: 'bold',
        color: 'white',
    },

    text_TERTIARY:{
        color:'gray',
    },
    text_SECONDARY:{
        fontSize: 12,
        color:'#fff',
        // height: 13,
        // color:'#7965d7',
       }
});

export default CustomButton;
