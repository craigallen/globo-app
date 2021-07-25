import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, } from 'react-native';
import imageA from './assets/about1.jpg';
import imageB from './assets/about2.jpg';
import imageC from './assets/about3.jpg';

const blockA = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta magna sed tortor elementum viverra. Duis condimentum turpis convallis dui dictum, quis ullamcorper lorem varius. Proin id leo tortor. Praesent aliquet id ligula a congue. Duis dapibus bibendum leo, mollis imperdiet dui tempor non. Proin eget odio sagittis libero rutrum blandit vitae sed diam.
    
    Nunc sagittis ac massa non iaculis. Integer ullamcorper tempus tortor, sed sodales nibh pellentesque sodales. Cras semper nibh eget vulputate volutpat. Donec nec aliquet velit. Mauris dictum et arcu sed imperdiet. Nam nec mauris suscipit, ultricies sem quis, iaculis leo.
    
    Proin molestie diam interdum magna laoreet, quis convallis justo ornare. Duis libero sem, scelerisque non lacus ac, tincidunt tincidunt arcu.
`;

const blockB = `
    Integer orci est, dapibus in vestibulum non, semper a lacus. Aenean enim elit, malesuada at eros non, interdum ornare eros. Ut ut nunc convallis lacus vehicula finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla convallis sit amet est sit amet molestie. Aenean fermentum metus ut suscipit tincidunt. Donec risus turpis, placerat eget varius eu, aliquet quis urna. Vivamus hendrerit convallis porttitor. Vestibulum quis nulla pulvinar, rutrum urna et, condimentum augue. Aenean consequat luctus elementum. Phasellus dignissim lorem placerat mattis semper.
`;

export default function AboutGlobo() {
    return(
        <View style={styles.container}>
            <ScrollView>
                <Image source={imageA} style={{width: '100%', height: 300 }} />
                <Text style={styles.heading}>We Are Different</Text>
                <Text style={styles.text}>{blockA}</Text>
                <Image source={imageB} style={{width: '100%', height: 300 }} />
                <Text style={styles.heading}>Leaders In Our Field</Text>
                <Text style={styles.text}>{blockB}</Text>
                <Image source={imageC} style={{width: '100%', height: 300 }} />
                <Text style={styles.heading}>We Are The Experts</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    heading: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
    },
    text: {
        fontFamily: 'OpenSans',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 30,
    }
});