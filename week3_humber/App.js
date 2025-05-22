import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style = {styles.container}>
    <View style={styles.redbox}>
        <Text>First</Text>
    </View>
    <View style={styles.bluebox}>
            <Text>Second</Text>
    </View>
    <View style={styles.greenbox}>
        <Text>Third</Text>
    </View> 
</View>
  );
}const styles = StyleSheet.create({ // css
  container: {
    height: 500,
    width:300,
      flexDirection: 'row',
      borderWidth: 2,
    borderBlockColor: 'black',
    alignItems: 'stretch',
    justifyContent: 'center'

  },
  redbox: {
    backgroundColor: 'red', fontSize: 40
  },
  bluebox: {
    backgroundColor: 'blue',
    fontSize: 40,
  },
  greenbox: {
      backgroundColor: 'green',
      fontSize: 40
  },

});

