import React from 'react'
import { View , TextInput , StyleSheet} from 'react-native'

const CustomInput = ({value , setValue , placeholder , secureTextEntry , type = "PRIMARY"}) => {
    return (
        <View style={[styles.container , styles[`container_${type}`]]}>
            <TextInput 
            value={value}
            onChangeText={setValue}
            placeholder={placeholder} 
            style={styles.input}
            secureTextEntry4={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
 container:{
    backgroundColor: 'white',
    width: '100%',

    borderColor:'#e8e8e8',
    borderWidth:1,
    borderRadius:5,

    paddingHorizontal:10,
    // marginVertical:5,
    marginBottom:20,

 },
 container_PRIMARY: {
},

container_TERTIARY:{
 height: 200,
 
},
 input:{

 },
});

export default CustomInput
