import React, { useRef } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Button, ScrollView } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const slides = [
  {
    title: 'Bienvenido a Nuestra App',
    description: 'Esta es la primera pantalla de introducción.',
    // image: require('./assets/slide1.png'),
  },
  {
    title: 'Funcionalidades',
    description: 'Aquí puedes aprender sobre las funcionalidades.',
    // image: require('./assets/slide2.png'),
  },
  {
    title: 'Empecemos',
    description: '¡Vamos a empezar a usar la app!',
    // image: require('./assets/slide3.png'),
  },
];

export const Onboarding = ({ navigation}) => {
  const scrollViewRef = useRef(null);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        tabIndex={true}
        ref={scrollViewRef}
      >
        {slides.map((slide, index) => (
          <View key={index} style={styles.slide}>
            {/* r */}
            <Text style={styles.title}>{slide.title}</Text>
            <Text style={styles.description}>{slide.description}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <Button title="Comenzar" onPress={()=>{navigation.navigate('Home')}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    width: screenWidth,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    padding: 20,
  },
});


