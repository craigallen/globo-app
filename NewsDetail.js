import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Pressable, ActivityIndicator, Image, ScrollView } from 'react-native';

export default function NewsDetail({route, navigation}) {
    const [dataLoading, finishLoading] = useState(true);
    const [allPostData, setAllPostData] = useState([]);
    const { url } = route.params;
    const selectedPost = allPostData.find(post => post.url === url);

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tech&apiKey=3945601e6e474347b6426cb3d6309385')
            .then((response) => response.json())
            .then((json) => setAllPostData(json.articles))
            .catch((error) => console.error(error))
            .finally(() => finishLoading(false));
    }, []);

    return(
        <View style={StyleSheet.container}>
            <Pressable
                style={StyleSheet.button}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttontext}>Go back</Text>
            </Pressable>
            {dataLoading ? <ActivityIndicator/> : (
                <ScrollView >
                    <Text style={styles.title}>{selectedPost.title}</Text>
                    <Image
                        style={styles.storyimage}
                        source={{ uri: selectedPost.urlToImage}}
                    />
                    <Text style={styles.content}>{selectedPost.content}</Text>
                </ScrollView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    button: {
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    buttontext: {
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
    },
    storyimage: {
        height: 300,
        width: '100%',
    },
    title: {
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 20,
    },
    blurb: {
        fontFamily: 'OpenSans',
        fontSize: 14,
        padding: 20,
        fontStyle: 'italic',
    },
    content: {
        flex: 1,
        fontFamily: 'OpenSans',
        fontSize: 16,
        paddingTop: 30,
        paddingBottom: 100,
        paddingLeft: 20,
        paddingRight: 20,
    }
})