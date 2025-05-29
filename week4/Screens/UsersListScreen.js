import { StyleSheet, View , FlatList, Text, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { SafeAreaView , SafeAreaProvider} from 'react-native-safe-area-context';

export default function UsersListScreen() {
    
    var [list, setList] = useState([])

    const getUsersData = async () => { 
        try {
            var respose = await fetch('https://randomuser.me/api?results=40')
            if (!respose.ok) {
                throw new Error('no data')
            }
            var jsonResult = await respose.json()
            console.log(`${JSON.stringify(jsonResult)}`);
            setList(jsonResult.results)
            return jsonResult.results
        } catch {
            
        }
    }
    useEffect(() => {
        getUsersData();
        }, []);
    
        return (
        <SafeAreaProvider>
        <SafeAreaView>
        
        <View>
                <FlatList
                data={list}
                    renderItem={({item}) =>
                        <View style={styles.container}>
                            <Image style={styles.imageStyle}
                                source={{
                                    uri: item.picture.medium
                                }}></Image>
                            <View style ={styles.textsStyle}> 
                                <Text style={styles.textStyle}>{item.name.title} { item.name.first}</Text>
                                <Text style={styles.textStyle}> { item.email}</Text>
                            </View>
                    </View>
                }>
                        </FlatList>
                    </View>
                </SafeAreaView>   
            </SafeAreaProvider>
        );

}


const styles = StyleSheet.create({
container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: 'black',
        padding: 10
    },
    textStyle:{fontSize: 20},
        textsStyle: {
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 10
    },
    imageStyle: {
        width: 50,
        height: 50
    }
});
