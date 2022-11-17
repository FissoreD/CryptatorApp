import React from 'react';
import { SafeAreaView, useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/index';
import styles from './components/style';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const { height, width, scale, fontScale } = useWindowDimensions();
  return (
    // Test de la vue en mode puzzle
    // <SafeAreaView style={styles.container}>
    //   {/* Test avec ou sans l'ampoule */}
    //   {/* <Header title = "Cryptator" width={width} right={true}/> */}
    //   <Header title = "Cryptator" width={width}/> 
    //   <Footer width={width}/>
    // </SafeAreaView>
    // Test des écrans de navigation 
    <RootNavigator />
  );
};

export default App;
