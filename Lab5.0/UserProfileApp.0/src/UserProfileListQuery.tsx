import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { useQuery } from 'react-query';
import { fetchUserData } from './ApiService';

const UserProfileListQuery = () => {
    const { data, error, isLoading } = useQuery('users', fetchUserData, {
        retry: 3, // se reintentará 3 veces en caso de error
    });

    if (isLoading) {
        return <Text style={styles.loadingText}>Cargando...</Text>;
    }

    if (error) {
        return <Text style={styles.errorText}>Hubo un error al cargar los datos</Text>;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => <Text style={styles.itemText}>{item.name}</Text>}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f8f8f8',
    },
    loadingText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    },
    errorText: {
        fontSize: 18,
        textAlign: 'center',
        color: 'red',
        marginTop: 20,
    },
    itemText: {
        fontSize: 16,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default UserProfileListQuery;