import { StyleSheet, Text, View } from 'react-native';
import UsersListScreen from './Screens/UsersListScreen';

export default function App() {
  return (
    <View style={styles.container}>
    <UsersListScreen></UsersListScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
