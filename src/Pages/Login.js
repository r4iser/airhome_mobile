import React, { useState } from 'react';
import { View, AsyncStorage, KeyboardAvoidingView, Platform, Image, Text, TextInput,
    StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';

import api from "../Services/api";
import logo from '../../assets/logo.png';


export default function Login({ navigation  }) {
    const [email, setEmail] = useState('');
    const [cidade, setCidade] = useState('');

    async function handleSubmit() {
        console.log(email);
        console.log(cidade);
        const response = await api.post('/sessions', {
            email
        })
        const { _id } = response.data;
        //await AsyncStorage.setItem('user', _id);
        //await AsyncStorage.setItem('cidade', cidade)

        navigation.navigate('List');
    }

    return (
        <KeyboardAvoidingView behavior = "padding" style = { styles.container } >
        <Image style = { styles.imageStyle }
        source = { logo }/>
        <View style = { styles.form } >
        <Text style = { styles.label } > Email * </Text>
        <TextInput style = { styles.input }
        placeholder = "Seu e-mail"
        placeholderTextColor = "#999"
        keyboardType = "email-address"
        autoCapitalize = "none"
        autoCorrect = { false }
        value = {email}
        onChangeText = {setEmail}
        />
        <Text style = { styles.label } > Cidade * </Text>
        <TextInput style = { styles.input }
        placeholder = "Cidade de interesse"
        placeholderTextColor = "#999"
        autoCapitalize = "words"
        autoCorrect = { false }
        value = {cidade}
        onChangeText = {setCidade}
        />

        <TouchableOpacity onPress = {handleSubmit} style = { styles.button} >
            <Text style = { styles.buttonText }>
                Encontrar casas
            </Text>
        </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2b2c2e',
    },

    form: {
        alignSelf: 'center',
        paddingHorizontal: 15,
        marginTop: 5,
    },

    label: {
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 8,
        fontSize: 16,
        alignSelf: "center",
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 15,
        width: "150%",
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2,
        alignSelf: "center",
        width: 300,
    },

    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});