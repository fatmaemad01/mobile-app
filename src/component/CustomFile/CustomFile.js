import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';

const CustomFile = ({text, source, type}) => {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.logo} />
      <View>
        <Text style={styles.type}>{type}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#000',
    borderWidth: 0.1,
    width: '100%',
    height: 100,
    padding: 15,
    marginVertical: 5,
    borderRadius: 2,
    flexDirection: 'row',
  },
  logo: {
    width: 30,
    height: 30,
    marginTop: 5,
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
    color: 'blue',
  },
  type: {
    marginLeft: 10,
    color: '#000',
  },
});

export default CustomFile;
