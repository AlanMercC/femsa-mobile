import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import SwipeableCard from './src/SwipeableCard';
import FadeInCard from './src/FadeInCard';
import AnimatedList from './src/AnimatedList';
import ImageGallery from './src/ImageGallery';

const imageUrls = [
  'https://rickandmortyapi.com/api/character/avatar/25.jpeg',
  'https://rickandmortyapi.com/api/character/avatar/614.jpeg',
  'https://rickandmortyapi.com/api/character/avatar/500.jpeg',
  'https://rickandmortyapi.com/api/character/avatar/786.jpeg',
];

const dataList: string[] = ['1', '2', '3', '4', '5'];

interface DataItem {
  key: string;
}

// constante con los datos de los componentes
const data: DataItem[] = [
  { key: 'SwipeableCard' },
  { key: 'FadeInCard' },
  { key: 'AnimatedList' },
  { key: 'ImageGallery' },
  
];

// funcion que renderiza los componentes
const renderItem = ({ item }: { item: DataItem }) => {
  switch (item.key) {
    case 'SwipeableCard':
      return <SwipeableCard />;
    case 'FadeInCard':
      return <FadeInCard />;
    case 'AnimatedList':
      return <AnimatedList data={dataList} />;
    case 'ImageGallery':
      return <ImageGallery images={imageUrls} />;
    default:
      return null;
  }
};

// componente principal que renderiza la lista de componentes
const App: React.FC = () => {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      initialNumToRender={20}
      windowSize={10}
      removeClippedSubviews={true}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default App;