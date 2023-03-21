import React from 'react';
import { View, Text, Image, StyleSheet , ScrollView} from 'react-native';
import profile from '../../../assets/images/profile.png';
import CustomCard from '../../component/CustomeCard/CutomCard';


const HomePage = (props) => {

    const {navigation} = props;
    
    return (
        <ScrollView>
        <View>

            <View style={styles.container}>

                <View style={styles.container2}>
                    <Text style={styles.text}>User Name</Text>
                    <Text style={styles.text}>user@gmail.com</Text>
                </View>

                <Image
                    source={profile}
                    style={styles.profile}
                    resizeMode="contain"
                />
                
            </View>

            <CustomCard
                coursename={'Information Security'}
                term={'First Term'}
            />

            <CustomCard
                coursename={'Distributed System'}
                term={'First Term'}
            />

            <CustomCard
                coursename={'Web Programming'}
                term={'First Term'}
            />

        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    profile: {
        width: 50,
        height: 50,
    },

    container: {
        padding: 10,
        flexDirection: 'row',
        justifyContent:'flex-start',
    },

    container2: {
        marginTop: 5,
        marginLeft: 15,
    },

    text: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    }

});

export default HomePage;







