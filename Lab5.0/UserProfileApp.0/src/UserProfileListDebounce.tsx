import { SetStateAction, useState } from 'react';
import { FlatList, Text, TextInput, View, StyleSheet } from 'react-native';
import { debounce } from 'lodash';
import { fetchUserDataAsync } from './ApiServiceAsync';

const UserProfileListDebounce = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState<{ id: number; name: string }[]>([]);

  const handleSearch = debounce(async (term) => {
    const data = await fetchUserDataAsync();
    setFilteredData(data.filter((user: { name: string; }) => user.name.toLowerCase().includes(term.toLowerCase())));
  }, 500);

  const handleChange = (text: SetStateAction<string>) => {
    setSearchTerm(text);
    handleSearch(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search users"
        value={searchTerm}
        onChangeText={handleChange}
      />
      <FlatList
        data={filteredData}
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
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  itemText: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default UserProfileListDebounce;
