import { StyleSheet, Text, View, Button } from 'react-native';

export default function RedScreen({navigation}) {
return (
    <View style={styles.container}>
    <Text>This Is Red Screen</Text>
    <Button title='Go To Main Screen' onPress={() => { 
            navigation.popTo('MainScreen');
                }}></Button> 
            
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
},
});
