import React, { useEffect, useMemo } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
interface AnimatedListProps {
  data: string[];
}
const AnimatedList: React.FC<AnimatedListProps> = React.memo(({ data }) => {
  const opacity = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, { duration: 500 }),
    };
  });
  useEffect(() => {
    opacity.value = 1;
  }, [opacity]);
  // Usando useMemo para memorizar renderItem y evitar su recreación en cada render
  const renderItem = useMemo(() => {
    return ({ item }: { item: string }) => (
      <Animated.View style={animatedStyle}>
        <Text style={styles.item}>{item}</Text>
      </Animated.View>
    );
  }, [animatedStyle]);
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
});
export default AnimatedList;

const styles = StyleSheet.create({
  item: {
    padding: 20,
    fontSize: 18,
    backgroundColor: '#f9c2ff',
    marginVertical: 8,
  },
});











