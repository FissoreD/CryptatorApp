import React from 'react';
import {SafeAreaView, useWindowDimensions} from 'react-native';
import styles from './components/style';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const { height, width, scale, fontScale } = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      <Header title = "Cryptator" width={width} right={true}/>
      {/* <Header title = "Cryptator" width={width}/> */}
      <Footer width={width}/>
    </SafeAreaView>
  );
};

export default App;
