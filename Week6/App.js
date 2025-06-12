import { useEffect, useState, useRef } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View, ToastAndroid } from 'react-native';
import * as Progress from 'react-native-progress';

export default function App() {

  var totalTime = 10;
  const [timeleft, setTimeleft] = useState(totalTime);
  const [answered, setAnswered] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => { //1
    // update the timer
    timerRef.current = setTimeout(() => { 
      setTimeleft(timeleft - 1);
    },1000);
    // check if the timer is over and display an alret
    if (timeleft === 0 & !answered) { 
      Alert.alert('Time is Over', 'You did not answer in time');
    }
    return () => clearTimeout(timerRef.current);
  
  },[timeleft,answered]);

  const ClickHandler = (userAnswer) => { 
    
    // stop the timer
    // display the toast
    setAnswered(true);
    clearTimeout(timerRef.current);

    ToastAndroid.show('Here is another toast', ToastAndroid.LONG);
  }

  return (
    <View style={styles.container}>
      <Text style ={styles.textStyle}>Is Learing React Native fun? </Text>

      <Progress.Bar progress={1 - timeleft/totalTime} width={200} />
    
      <View style={styles.buttonsRow}>
    
      <TouchableOpacity onPress={() => { ClickHandler(true) }}>
        <Text style={styles.textStyle}>True</Text>
      </TouchableOpacity>

      <TouchableOpacity  onPress={ ()=>{ClickHandler(false)} }>
        <Text style={styles.textStyle}>False</Text>
      </TouchableOpacity>

      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textStyle: {
    fontSize: 30
    
  },
  buttonsRow: {
    width: 300,
    flexDirection: 'row',
    justifyContent:'space-between'
  }
});
