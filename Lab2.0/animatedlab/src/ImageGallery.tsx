import React from 'react';
import FastImage from 'react-native-fast-image';
import { FlatList, StyleSheet } from 'react-native';

interface GalleryProps {
  images: string[];
}

const ImageGallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <FlatList
      data={images}
      renderItem={({ item }) => (
        <FastImage
          style={styles.image}
          source={{ uri: item }}
          resizeMode={FastImage.resizeMode.cover}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
      initialNumToRender={10}
      windowSize={5}
      removeClippedSubviews={true}
    />
  );
};

const styles = StyleSheet.create({
  image: { 
    width: 100, 
    height: 100, 
    margin: 5 
}
});

export default ImageGallery;