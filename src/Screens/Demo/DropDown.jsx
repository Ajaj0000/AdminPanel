import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);
  const animatedPosition = useRef(new Animated.Value(0)).current; // Animates between 0 (off) and 1 (on)

  useEffect(() => {
    Animated.timing(animatedPosition, {
      toValue: isOn ? 1 : 0,
      duration: 300, // duration of the animation in milliseconds
      useNativeDriver: false,
    }).start();
  }, [isOn]);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  // Interpolate position for smooth transition
  const circlePosition = animatedPosition.interpolate({
    inputRange: [0, 1],
    outputRange: ['5%', '55%'], // Move the circle from 5% (left) to 55% (right)
  });

  return (
    <TouchableOpacity onPress={handleToggle} style={styles.toggleContainer}>
      <View style={[styles.toggleButton, isOn ? styles.on : styles.off]}>
        <Text style={styles.toggleText}>{isOn ? 'ON' : 'OFF'}</Text>
        <Animated.View
          style={[
            styles.circle,
            { left: circlePosition }, // animate the 'left' property
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleButton: {
    width: 50,
    height: 25,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    position: 'relative',
  },
  on: {
    backgroundColor: 'green',
  },
  off: {
    backgroundColor: 'gray',
  },
  toggleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    position: 'absolute',
    left: 10,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    position: 'absolute',
  },
});

export default ToggleButton;
