import React, { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const FadeInCard = () => {
  const fadeAnim = useSharedValue(0); // Valor inicial de la opacidad

  useEffect(() => {
    fadeAnim.value = withTiming(1, { duration: 1000 });
  }, []);

  // estilos de animación
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeAnim.value,
    };
  });

  // render del componente
  return (
    <Animated.View style={[styles.card, animatedStyle]}>
      <Text>Card Fading In!</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: { 
    width: 300, 
    height: 200, 
    backgroundColor: 'tomato', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 10 
}
});

export default FadeInCard;