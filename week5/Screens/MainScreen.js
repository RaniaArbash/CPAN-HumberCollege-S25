import { StyleSheet, Text, View , Button, TouchableOpacity, TextInput} from 'react-native';
import { useState } from 'react';

export default function MainScreen({ navigation }) {
    const [name, setName] = useState('');
return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => { 
            console.log("the text clicked");
            navigation.navigate('BlueScreen')
        }}>
            <Text>This Is Main Screen</Text>
            <TextInput value={name}
                placeholder='Enter Your Name'
                onChangeText={(v) => { 
                    setName(v)
            }}> </TextInput>
    </TouchableOpacity>

    <Button title='Go to blue' onPress={() => { 
            navigation.navigate('BlueScreen', { name: name})
        }}></Button> 
        </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
});
