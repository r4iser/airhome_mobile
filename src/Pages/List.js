import React, { useState, useEffect } from 'react';
import {    SafeAreaView, View, Text, StyleSheet, Image    } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import SpotList from '../Components/SpotList';

import logo from '../../assets/logo.png';



export default function List() {
    const [cidade, setCidade] = useState('');

    useEffect( () => {
        AsyncStorage.getItem('cidade').then( storagedCidade => {
            setCidade(storagedCidade);
        })
    }, []);


    return < SafeAreaView style = { styles.container } >
        <Image style = { styles.imageStyle } source={ logo } />
        <SpotList key={cidade} cidade={cidade} />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#2b2c2e',
    },
    imageStyle: {
        width: 90,
        height: 90,
        resizeMode: 'contain',
        marginTop: 10,
    },
});