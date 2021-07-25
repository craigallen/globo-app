import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, TouchableWithoutFeedback } from 'react-native';

export default function Homepage({navigation}){
    const [dataLoading, finishLoading] = useState(true);
    const [newsData, setData] = useState([]);

    useEffect(() =>{
        fetch('https://newsapi.org/v2/everything?q=tech&apiKey=3945601e6e474347b6426cb3d6309385')
            .then((response) => response.json())
            .then((json) => setData(json.articles))
            .catch((error) => console.error(error))
            .finally(() => finishLoading(false));
    }, []);

    const storyItem = ({item}) =>{
        return(
            <TouchableWithoutFeedback
                onPress={() =>
                    navigation.navigate('NewsDetail', {url: item.url})
                }
            >
                <View style={styles.listings}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Image
                        style={styles.thumbnail}
                        source={{uri: item.urlToImage}}
                    />
                    <Text style={styles.blurb}>{item.description}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    };

    return (
        <View style={styles.container}>
            {dataLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={newsData}
                    renderItem={storyItem}
                    keyExtractor={(item) => item.url}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    thumbnail: {
        height: 200,
        width: '100%',
    },
    listings: {
        paddingTop: 15,
        paddingBottom: 25,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    title: {
        padding: 10,
        fontFamily: 'OpenSans-Bold',
    },
    blurb: {
        fontFamily: 'OpenSans',
        fontStyle: 'italic',
        padding: 10,
    }
});