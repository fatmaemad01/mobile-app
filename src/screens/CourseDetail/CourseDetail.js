import React from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import course from '../../../assets/images/course.png';
import arrow from '../../../assets/logo/arrow.png';
import CustomFile from '../../component/CustomFile/CustomFile';
import file from '../../../assets/logo/document1.png';
import web from '../../../assets/logo/web.png';

const CourseDetail = () => {
  // const {height} = useWindowDimensions();
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Image source={course} style={styles.img} />
        <View style={styles.detail}>
          <Text style={styles.text}>Information Security</Text>
          <Text style={styles.text}>BSWE 4325.t355.12022</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.flex}>
          <Image source={arrow} style={styles.arrow} />
          <Text style={styles.date}>General</Text>
        </View>
        <CustomFile text={'Course Book'} source={file} type={'File'} />
      </View>

      <View style={styles.content}>
        <View style={styles.flex}>
          <Image source={arrow} style={styles.arrow} />
          <Text style={styles.date}>24September - 29September</Text>
        </View>
      </View>
      <CustomFile text={'Course Outline'} source={file} type={'File'} />
      <CustomFile
        text={
          'https://drive.google.com/file/d/1YEfN-NoypjtspMV7tt_kg9Iz5GpT9_mY/view'
        }
        source={web}
        type={'URL'}
      />
      <CustomFile
        text={
          'https://drive.google.com/file/d/1YEfN-NoypjtspMV7tt_kg9Iz5GpT9_mY/view'
        }
        source={web}
        type={'URL'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
  container: {
    flexDirection: 'row',
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginRight: 20,
  },
  detail: {
    marginTop: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  descContainer: {
    marginVertical: 40,
  },
  desc: {
    marginVertical: 10,
    padding: 20,
    height: 100,
    backgroundColor: '#fff',
  },
  content: {
    marginVertical: 20,
  },
  flex: {
    flexDirection: 'row',
  },
  arrow: {
    marginTop: 5,
  },
  date: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
});

export default CourseDetail;
