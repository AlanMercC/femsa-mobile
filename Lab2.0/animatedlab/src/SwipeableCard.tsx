import React, { useState } from 'react';
import { View, Text, Animated, PanResponder, StyleSheet } from 'react-native';

const SwipeableCard = () => {
  const [pan] = useState(new Animated.ValueXY());

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
    onPanResponderRelease: (e, gestureState) => {
      if (Math.abs(gestureState.dx) > 150) {
        // Si el desplazamiento es mayor que 150px, la tarjeta se va fuera de la pantalla
        Animated.timing(pan, {
          toValue: { x: gestureState.dx > 0 ? 500 : -500, y: 0 },
          duration: 200,
          useNativeDriver: true
        }).start();
      } else {
        // Si no, la tarjeta vuelve a su posición original
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true
        }).start();
      }
    }
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.card, { transform: pan.getTranslateTransform() }]}
      >
        <Text>Swipe Me!</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    justifyContent: 'center', 
    alignItems: 'center' 
},
  card: { 
    width: 300, 
    height: 200, 
    backgroundColor: 'skyblue', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 10 
}
});

export default SwipeableCard;