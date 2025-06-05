import { StyleSheet, Text, View ,Button} from 'react-native';

export default function BlueScreen({ navigation, route }) {
    const { name } = route.params;
return (
    <View style={styles.container}>
        <Text>This Is Blue Screen - Welcome {name}</Text>
    
        <View style={styles.rowStyle}>
        <Button title='Go to red' onPress={() => { 
                navigation.navigate('RedScreen')
        }}></Button> 

        <Button title='Go back' onPress={() => { 
                navigation.goBack()
            }}></Button> 
        </View>
    </View>
);
}

const styles = StyleSheet.create({
container: {
        flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
    },
    rowStyle: {
        flexDirection: 'row'
    }
});
