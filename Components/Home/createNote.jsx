import React from "react";
import { Pressable, View, Text, StyleSheet, Dimensions } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

export const AddNote = () => {
  const isExpanded = useSharedValue(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: isExpanded.value ? withTiming(width, { duration: 500 }) : withTiming(60, { duration: 500 }),
      right: isExpanded.value ? withTiming(right=0, { duration: 500 }) : withTiming(60, { duration: 500 }),
      bottom: isExpanded.value ? withTiming(bottom=0, { duration: 500 }) : withTiming(60, { duration: 500 }),
      height: isExpanded.value ? withTiming(height, { duration: 500 }) : withTiming(60, { duration: 500 }),
      borderRadius: isExpanded.value ? withTiming(0, { duration: 500 }) : withTiming(30, { duration: 500 }),
    };
  });

  const handlePress = () => {
    isExpanded.value = !isExpanded.value;
    console.log('hello');
  };

  return (
    <Animated.View style={[styles.createNote, animatedStyle]}>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={{ color: 'white', fontSize: 40 }}>+</Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  createNote: {
    position: "absolute",
    bottom: 50,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'tomato'
  },
  button: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 20,
    padding: 0,
    margin: 0,
  },
});
