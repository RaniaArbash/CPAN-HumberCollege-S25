import { View, TextInput,StyleSheet } from 'react-native'
import { useState } from 'react';

export default function MyFirstComponent() { 
    // logic 
    var [userEmail, setUserEmail] = useState('');

    return (
        //jsx
        <View style={styles.container}>
        <View style={styles.redView}/>
        <TextInput
        value={userEmail}
        keyboardType='email-address'
        placeholder='Enter Your Email'
        onChangeText={(newtext) => { 
        setUserEmail(newtext)
        }}></TextInput>
            
            </View>
    );

}
// css
const styles = StyleSheet.create({
    container: {// FlexBox
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    redView: {
        backgroundColor: 'red', 
        width: 100,
        height: 100
    },
})
