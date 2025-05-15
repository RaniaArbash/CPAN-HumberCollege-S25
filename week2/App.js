import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useState } from 'react';
import MyFirstComponent from './Components/myfirstview';
export default function App() {
  const msg = "Hello Week2";
  const onLoading = () => { 
    alert("show this mes");
  }
  var [number, setNumber] = useState(10);
  const addOne = () => { 
    setNumber(number + 1);
    console.log(number)
  }
  const subOne = () => {
    setNumber(number - 1)
    console.log(number)

  }
  const clickListener = () => { 
    alert("in Button Click");
  }
  const onerror = () => { 
    alert("not able to load the image ");
    console.error();
  }
  return (
    //JSX == html
    <View style={styles.container}>
      <MyFirstComponent/>
      <Text style={styles.TextStyle}>{msg}</Text>
      <Image
        style={styles.imageStyle}
        source={require('./assets/img22.jpg')}
        onLoad={onLoading}
      />
      {/* <Image
        onLoad={onLoading}
        onError={onerror}
        source={{
          uri:
'https://images.freeimages.com/images/large-previews/9f7/sleeping-cat-1359219.jpg' }} ></Image> */}
      <Text style={styles.TextStyle}>{ number }</Text>
      <Button
        style={{ fontSize: 40 }}
        title='++'
        onPress={addOne}></Button>
      <Button
        style={{ fontSize: 40 }}
        title='--'
        onPress={subOne}></Button>
      
     
    </View>
  );
}
//css
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
  imageStyle: {
    width: 200,
    height: 200
  },
  TextStyle: {
    fontSize: 50,
    color: 'blue'
  }
});
