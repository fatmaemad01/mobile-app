import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import cardimg from '../../../assets/images/card.png'
const CustomCard = ({coursename , term}  ) => {
    return (
        <View style={styles.container}>
            <Image
            style={styles.imgstyle}
            source={cardimg}
            />
        <View style={styles.info}>
            <Text style={styles.coursename}>
            {coursename}
            </Text>

            <Text style={styles.term}>
                {term}
            </Text>
            
        </View>

        </View>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft: 50,
        height: 200,
        width: deviceWidth - 100,
        borderRadius:20,
        borderColor:'black',
        borderStyle:'solid',
        borderWidth: 1,
    },

    imgstyle:{
     height:130,   
     width: deviceWidth - 100,
     borderTopLeftRadius:20,
     borderTopRightRadius:20,
    },

    coursename:{
    fontSize:18,
    color:'black',
    fontWeight:'bold',
    },

    term:{
    fontSize:14,
    fontWeight:'500',
    
    },

    info:{
        marginHorizontal: 15,
        marginVertical:15,
    }


});


export default CustomCard;