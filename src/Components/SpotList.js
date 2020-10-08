import { AppLoading } from 'expo';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';

import api from '../Services/api';

export default function SpotList({ cidade }) {
    const [spots, setSpots] = useState([]);

    useEffect (() => {
        async function loadSpots() {
            const response = await api.get('/spots', {
                params: { cidade }
            })
            setSpots(response.data);
            console.log(response.data);
        }

        loadSpots();
    }, []);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Casas disponíveis em <Text style={styles.bold}>{cidade}</Text></Text>
        
            <FlatList
                style = { styles.list }
                data = { spots }
                keyExtractor = {spot => spot._id}
                vertical
                showsHorizontalScrollIndicator = { false }
                renderItem = {({ item }) => (
                    <View style = {styles.listItem}>
                        <Text style = {styles.company}>{item.company}</Text>
                        <Image style={styles.thumbnail}source = {{ uri: item.thumbnail_url}} />
                        <Text style = {styles.price}>{`R$${item.minimum_price}/dia`}</Text>
                        <TouchableOpacity onPress={() => {}} style={styles.button}>
                            <Text style={styles.buttonText}>Solicitar Reserva</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    title: {
        fontSize: 20,
        color: 'white',
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    bold: {
        fontWeight: 'bold',
        color: 'white',
    },
    list: {
        paddingHorizontal: 20,
    },
    listItem: {
        marginRight: 15,
    },
    thumbnail: {
        width: 400,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 2,
        alignSelf: 'center',
        marginTop: 20,
    },
        company : {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 60,
    },
    price : {
        fontSize: 15,
        color: '#999',
        marginTop: 5,
    },
    button : {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
    },
});